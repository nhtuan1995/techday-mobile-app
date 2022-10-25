import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import RenderSvg from '../../Components/Svg/Render';
import { debounce } from 'lodash';
import RenderImage from '../../Components/RenderImage';

const BeforeLogin = ({ navigation }) => {

	useEffect(() => {
		(debounce(() => {
			navigation.navigate('Login')
		}, 3000))();
	}, [])
	
	return (
		<View style={styles.screen}>
			<RenderImage name={'beforeLogin'} width={'100%'} height="100%" />
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		width: '100%',
		height: '100%',
		flex: 1,
	},
});


export default BeforeLogin;


