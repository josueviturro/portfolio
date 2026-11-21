import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import PortfolioPage from './modules/portfolio/PortfolioPage'
import ProjectDetailPage from './modules/portfolio/ProjectDetailPage'
import LandingDemo from './modules/demos/landing/LandingDemo'
import InstitucionalDemo from './modules/demos/institucional/InstitucionalDemo'
import SistemaDemo from './modules/demos/sistema/SistemaDemo'

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<PortfolioPage />} />
				<Route path="/proyecto/:slug" element={<ProjectDetailPage />} />
				<Route path="/demo/landing" element={<LandingDemo />} />
				<Route path="/demo/institucional/*" element={<InstitucionalDemo />} />
				<Route path="/demo/sistema/*" element={<SistemaDemo />} />
			</Routes>
		</>
	)
}

export default App
