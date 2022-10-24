import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import RenderImage from './RenderImage';

const Banner = ({ style, onPress }) => {
	return (<TouchableOpacity onPress={() => {
		if (onPress) onPress();
	}} style={style} activeOpacity={1}>
		<RenderImage name={'banner'} width={'100%'} height={200} style={myStyles.bannerImage} />
	</TouchableOpacity>);
}

const myStyles = StyleSheet.create({
	bannerImage: {
		borderRadius: 12,
	}
});

export default React.memo(Banner);

