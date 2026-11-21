// Inserta guiones suaves (U+00AD) en los límites de sílaba de palabras en español.
// El navegador solo los muestra si necesita cortar la palabra al final de una línea,
// así el texto justificado no deja espacios grandes entre palabras (funciona en todos los navegadores).

const SHY = '­'
const VOCAL = /[aeiouáéíóúü]/i
// grupos de consonantes que no se separan (van juntos al inicio de la sílaba siguiente)
const INSEPARABLES = new Set(['pr', 'br', 'tr', 'dr', 'cr', 'gr', 'fr', 'pl', 'bl', 'cl', 'gl', 'fl', 'ch', 'll', 'rr'])
const MIN_PALABRA = 5 // palabras más cortas no se cortan
const MIN_INICIO = 2 // letras mínimas antes del corte
const MIN_FINAL = 2 // letras mínimas después del corte

function cortes(palabra: string): number[] {
	const w = palabra.toLowerCase()
	const out: number[] = []
	let i = 0
	// avanzar hasta la primera vocal
	while (i < w.length && !VOCAL.test(w[i])) i++
	while (i < w.length) {
		// saltar el núcleo vocálico (diptongos/triptongos no se separan)
		while (i < w.length && VOCAL.test(w[i])) i++
		const ini = i
		while (i < w.length && !VOCAL.test(w[i])) i++
		if (i >= w.length) break // consonantes finales quedan en la última sílaba
		const cons = w.slice(ini, i)
		let corte: number
		if (cons.length <= 1) corte = ini // V-CV
		else if (cons.length === 2) corte = INSEPARABLES.has(cons) ? ini : ini + 1 // V-CCV o VC-CV
		else if (cons.length === 3) corte = INSEPARABLES.has(cons.slice(1)) ? ini + 1 : ini + 2 // VC-CCV o VCC-CV
		else corte = ini + 2 // VCC-CCV
		out.push(corte)
	}
	return out
}

function silabearPalabra(palabra: string): string {
	if (palabra.length < MIN_PALABRA || /[^a-záéíóúüñ]/i.test(palabra)) return palabra
	const pos = cortes(palabra).filter((c) => c >= MIN_INICIO && palabra.length - c >= MIN_FINAL)
	let res = ''
	let prev = 0
	for (const c of pos) {
		res += palabra.slice(prev, c) + SHY
		prev = c
	}
	return res + palabra.slice(prev)
}

export function silabear(texto: string): string {
	return texto.replace(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g, silabearPalabra)
}
