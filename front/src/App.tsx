import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'

interface Props {}

const App: React.FC<Props> = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, i) => (
					<Route key={i} {...route} />
				))}
			</Routes>
		</BrowserRouter>
	)
}

export default App
