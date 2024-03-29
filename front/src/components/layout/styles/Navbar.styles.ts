import styled from 'styled-components'
import { sizes } from '../../../utils/breakpoints'

export const NavbarContainer = styled.nav`
	min-height: 3rem;
	background: blue;
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const Categories = styled.div`
	display: flex;
	gap: 2rem;
	/* justify-content: space-between; */
`

export const RightSection = styled.div`
	display: flex;
	gap: 2rem;
`

export const LogoContainer = styled.div``

export const Cell = styled.span`
	padding: 1rem;
	/* margin: 1rem; */
`
