import React from 'react'
import Footer from './Footer'
import MainNavbar from './Navbar'
import { Navbar } from '../navbarComponents'

interface Props {}

const Layout: React.FC<Props> = (props: Props) => {
	return (
		<>
			<MainNavbar />
			{/* <div>{...children}</div> */}
			<Footer />
		</>
	)
}

export default Layout
