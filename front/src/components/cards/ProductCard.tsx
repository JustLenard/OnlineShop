import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
	max-width: 400px;
	cursor: pointer;
	padding: 1rem;
	transition: all 0.2s ease-in-out;

	:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		transform: scale(1.05);
	}

	/* Delete */
	background-color: #b9b7b7;
`

const ImageContainer = styled.div`
	border: 1px solid black;

	img {
		width: 100%;
		/* height: 100%; */
	}
	margin-bottom: 2rem;
`

const Name = styled.div`
	margin: 0.25rem;
`

const Price = styled.div`
	font-weight: bold;
`

interface Props {
	imageUrl: string
	name: string
	price: string
}

const ProductCard: React.FC<Props> = ({ imageUrl, name, price }) => {
	return (
		<Card>
			<ImageContainer>
				<img src={imageUrl} alt="product image" />
			</ImageContainer>
			<Name>{name}</Name>
			<Price>{price}</Price>
		</Card>
	)
}

export default ProductCard
