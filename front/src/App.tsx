import React from 'react'
import './App.css'
import Button from './components/Button'
import S from './components/S'

const App = () => {
	return (
		<div className="App">
			<div>Heyo</div>
			<div>Heyo</div>

			<Button text="prop" />
			<S text={'This is the the super secret message'} />
		</div>
	)
}

export default App
