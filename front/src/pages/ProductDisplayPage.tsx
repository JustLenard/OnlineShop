import React from 'react'
import ProductCard from '../components/cards/ProductCard'
import { cardData } from '../utils/mockData'
import { CardsHolder, CategoryName } from './PrductsDisplay.styles'

interface Props {}

const ProductDisplayPage: React.FC<Props> = ({}) => {
	const mockCard = {}

	return (
		<div>
			<CategoryName>Category Name</CategoryName>
			<CardsHolder>
				{cardData.map(card => {
					return (
						<ProductCard
							imageUrl={card.image}
							name={card.name}
							price={card.price}
						/>
					)
				})}
			</CardsHolder>
		</div>
	)
}

export default ProductDisplayPage
