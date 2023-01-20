import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* {routes.map((route, i) => {
							return <Route key={i} {...route} />
						})} */}
				<Route path="/" element={<div>Home</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
