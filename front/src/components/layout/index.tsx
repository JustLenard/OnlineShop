import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface Props {}

const Layout: React.FC<Props> = (props: Props) => {
	return (
		<>
			<Navbar />
			<div>WHyyyy</div>
			<Footer />
		</>
	)
}

export default Layout
