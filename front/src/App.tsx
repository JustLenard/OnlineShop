import React from 'react'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import styled from 'styled-components'
import ProductDisplay from './pages/ProductDisplay'
import { sizes } from './utils/breakpoints'
import Routing from './routes/routes'

const Container = styled.div`
	//Is there a better way to do this?

	/* Figure out how to make 100vh the corect way */
	/* height: 100vh; */
	@media ${sizes.lg} {
		width: 90%;
		margin: 0 auto;
	}

	/* Delte this */
	background: gray;
`

const App = () => {
	function calculate(elem: number): number {
		return 3
	}

	return (
		<div>
			<Container>
				<Navbar></Navbar>
				<ProductDisplay></ProductDisplay>
				<Footer></Footer>
			</Container>
		</div>
	)
}

export default App
