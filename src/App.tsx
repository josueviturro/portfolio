import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import PortfolioPage from './modules/portfolio/PortfolioPage'
import ProjectDetailPage from './modules/portfolio/ProjectDetailPage'

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<PortfolioPage />} />
				<Route path="/proyecto/:slug" element={<ProjectDetailPage />} />
			</Routes>
		</>
	)
}

export default App
