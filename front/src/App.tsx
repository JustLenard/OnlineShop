import React from 'react'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import styled from 'styled-components'
import ProductDisplay from './pages/ProductDisplay'
import { sizes } from './utils/breakpoints'

const App = () => {
	function calculate(elem: number): number {
		return 3
	}

	const Container = styled.div`
		//Is there a better way to do this?
		@media ${sizes.lg} {
			width: 90%;
			margin: 0 auto;
		}

		/* Delte this */
		background: gray;
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
