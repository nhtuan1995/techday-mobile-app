import React from 'react';
import { View, StyleSheet } from 'react-native';
import RenderSvg from '../../Components/Svg/Render';
import { debounce } from 'lodash';

const BeforeLogin = ({ navigation }) => {
	(debounce(()=>{
		navigation.navigate('Login')
	},3000))();
	return (
		<View style={styles.screen}>
					<RenderSvg iconName={'FPTLogo'} width={82} height={50} />
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		width: '100%',
		height: '100%',
		display: 'flex', 
		justifyContent:'center', 
		alignItems:'center',
	},
});


export default BeforeLogin;


