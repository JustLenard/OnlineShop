import React from 'react'
import styled from 'styled-components'

const Card = styled.div``

const ImageContainer = styled.div``

const Name = styled.div``

const Price = styled.div``

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
