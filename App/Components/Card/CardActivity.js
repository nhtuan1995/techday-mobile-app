import React from 'react';
import {
	TouchableOpacity,
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';
import RenderSvg from '../Svg/Render';
import { Fonts, Styles } from '../../Themes';
// images
import activity from '../../Images/activity.png';

const CardAction = ({ imgSrc, dateTime, desc, style = {}, onPress }) => {
	return (
		<TouchableOpacity style={[myStyles.card, style]} onPress={() => {
			if (onPress) onPress();
		}}>
			<Image source={imgSrc ? { uri: imgSrc } : activity} style={myStyles.image} width={'100%'} height={94} />
			<View style={myStyles.content}>
				<View style={[Styles.rowSpace, { marginBottom: 4 }]}>
					<Text style={myStyles.time}>8:30</Text>
					<View style={myStyles.date}>
						<RenderSvg iconName={'iconCalenderChecked'} width={16} height={16} color={'#F57E25'} />
						<Text style={myStyles.dateText}>19 Jul</Text>
					</View>
				</View>
				<Text style={myStyles.desc}>{desc}</Text>
			</View>
		</TouchableOpacity>
	);
};

const myStyles = StyleSheet.create({
	card: {
		width: 245,
		borderRadius: 12,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		shadowColor: 'rgba(33, 57, 146, 0.1)',
		shadowOpacity: 0.8,
		shadowRadius: 12,
		shadowOffset: {
			width: 1,
			height: 1,
		},
	},
	desc: {
		fontSize: 14,
		color: '#667085',
	},
	content: { alignItems: 'flex-start', flexShrink: 1 },
	date: {
		...Styles.rowStart,
		backgroundColor: '#FFECD8',
		paddingVertical: 5,
		paddingHorizontal: 8,
		borderRadius: 32.7586,
	},
	time: {
		color: '#101828',
		fontSize: 24,
		...Fonts.weight.bold,
	},
	dateText: {
		color: '#F57E25',
		fontSize: 12,
		marginLeft: 4,
	},
	image: {
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12,
	},
	content: {
		width: '100%',
		padding: 10,
	},
});

export default React.memo(CardAction);
