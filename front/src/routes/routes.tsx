// import { ProductDisplayPage } from '../pages'
import ProductDisplayPage from '../pages/ProductDisplayPage'

export const paths = {
	productDisplayPage: '/',
}

export const routes = [
	{
		strick: true,
		path: paths.productDisplayPage,
		element: <ProductDisplayPage />,
	},
]
