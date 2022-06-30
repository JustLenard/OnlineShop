import React from 'react'
import ProductCard from '../components/cards/ProductCard'
import { cardData } from '../utils/mockData'

interface Props {}

const ProductDisplay: React.FC<Props> = ({}) => {
	const mockCard = {}

	return (
		<div>
			{cardData.map(card => {
				return (
					<ProductCard
						imageUrl={card.image}
						name={card.name}
						price={card.price}
					/>
				)
			})}
		</div>
	)
}

export default ProductDisplay
