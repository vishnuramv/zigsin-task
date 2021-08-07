import React from 'react'
import '../styles/button.css'

const Button = ({variant,text,url}) => {
	return (
		<a href={url} className={`btn z-depth-0 ${variant}`}>{text}</a>
	)
}

export default Button