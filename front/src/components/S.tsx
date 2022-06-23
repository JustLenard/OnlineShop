import React from 'react'

interface Props {
	text: string
}

const S: React.FC<Props> = ({ text }) => {
	return <div>{text}</div>
}

export default S
