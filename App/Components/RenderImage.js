import React from 'react';
import { Image } from 'react-native';
import images from '../Images/index';

export default function Render(props) {
	const {
		name = null,
		style = {},
		nullElement = null,
	} = props;

	if (!name) return nullElement;

	const source = `${images[name]}`;

	if (!source) return nullElement;

	return (
		<Image
			style={style}
			source={source}
			{...props}
		/>
	)
}
