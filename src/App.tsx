import { Routes, Route } from 'react-router-dom'
import PortfolioPage from './modules/portfolio/PortfolioPage'
import ProjectDetailPage from './modules/portfolio/ProjectDetailPage'

function App() {
	return (
		<Routes>
			<Route path="/" element={<PortfolioPage />} />
			<Route path="/proyecto/:slug" element={<ProjectDetailPage />} />
		</Routes>
	)
}

export default App
