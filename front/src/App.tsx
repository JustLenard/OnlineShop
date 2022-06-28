import React from 'react'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import styled from 'styled-components'
import ProductDisplay from './pages/ProductDisplay'

const App = () => {
	function calculate(elem: number): number {
		return 3
	}

	const Container = styled.div`
		margin: 0 5rem;
	`

	return (
		<Container>
			<Navbar></Navbar>
			<ProductDisplay></ProductDisplay>
			<Footer></Footer>
		</Container>
	)
}

export default App
