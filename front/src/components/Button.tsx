import React from 'react'

interface Props {
	text: string
}

const Button: React.FC<Props> = (props: Props) => {
	return <div>{props.text}</div>
}

export default Button
