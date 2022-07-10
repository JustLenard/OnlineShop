import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import ProductDisplay from '../pages/ProductDisplay'
interface Props {}

const Routing: React.FC<Props> = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" strict element={<h1>Home</h1>} /> */}
				<Route path="/" element={<ProductDisplay />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routing
