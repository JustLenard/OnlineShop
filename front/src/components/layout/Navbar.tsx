import React from 'react'
import {
	NavbarContainer,
	RightSection,
	LogoContainer,
	Categories,
	Cell,
} from './Navbar.styles'
// import { Navbar } from './Navbar.styles'

interface Props {}

const Navbar: React.FC<Props> = ({}) => {
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

export default Navbar
