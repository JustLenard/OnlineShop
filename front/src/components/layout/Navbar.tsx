import React from 'react'
import {
	NavbarContainer,
	RightSection,
	LogoContainer,
	Categories,
	Cell,
} from './styles/Navbar.styles'
// import { Navbar } from './Navbar.styles'
// import Navbar from './navbarComponents/Navbar'

interface Props {}

const MainNavbar: React.FC<Props> = ({}) => {
	return (
		<NavbarContainer>
			<Categories>
				<Cell>Women</Cell>
				<Cell>Man</Cell>
				<Cell>All</Cell>
			</Categories>
			<LogoContainer>Logo</LogoContainer>
			<RightSection>
				<Cell>Cell</Cell>
				<Cell>Cell</Cell>
			</RightSection>
		</NavbarContainer>
	)
}

export default MainNavbar
