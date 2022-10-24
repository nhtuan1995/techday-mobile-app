import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Stack, Center } from 'native-base'

import HeaderInfoIcon from '../../Components/Svg/Icons/HeaderInfoIcon';

import buttonStyle from '../../Themes/TreasureHunt'

import SectionHeader from '../../Components/Header';

const TreasureTag = ({ link, onPress }) => {
	return (
		<TouchableOpacity style={styles.treasureTag} onPress={onPress}>
			<Center
				bg="#D0D5DD"
				rounded="sm"
			>
				<Image
					style={{ width: '100%', height: '100%', borderRadius: 8, resizeMode: 'cover' }}
					source={{ uri: link }}
				/>
			</Center>
		</TouchableOpacity>
	)
}

const InfoIcon = ({onPress}) => {
	return(
		<TouchableOpacity onPress={onPress}>
			<HeaderInfoIcon />
		</TouchableOpacity>
	)
}

function TreasureScan({ navigation }) {

	const headerProps = {
		headerStyle: { backgroundColor: 'transparent', padding: 8, },
		title: "Treasure Hunt",
		titleStyle: { color: '#213992', fontSize: 16, fontWeight: 'bold' },
		headerStyle: { borderBottomColor: '#EAEEFA', borderBottomWidth: 1, },
		rightContent: <InfoIcon onPress={()=>{navigation.navigate('TreasureFinish');}} />,
		goBack: handleBack
	}

	const handleBack = () => {
		navigation.navigate('TreasureScan');
	}

	const scanQR = () => {
		navigation.navigate('TreasureScan');

	}

	const handleDetail = () => {
		navigation.navigate('TreasureDetails');

	}
	return (
		<>
			<View style={styles.container}>
				<SectionHeader
					{...headerProps}
				/>

				<View style={styles.badgeWrapper}>
					<View style={styles.badgeContent}>
						<Text style={{ color: '#213992', fontSize: 16, }}>You have collected 1/16 logos.</Text>
					</View>
				</View>

				<View style={{ paddingLeft: 16, paddingRight: 16 }}>
					<Stack direction="row" mb="2.5" mt="1.5" style={styles.stack}>
						<TreasureTag link="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-FPT.png" onPress={handleDetail} />
						<TreasureTag />
						<TreasureTag />
						<TreasureTag />

						<TreasureTag />
						<TreasureTag />
						<TreasureTag />
						<TreasureTag />

						<TreasureTag />
						<TreasureTag />
						<TreasureTag />
						<TreasureTag />

						<TreasureTag />
						<TreasureTag />
						<TreasureTag />
						<TreasureTag />
					</Stack>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity style={buttonStyle.button} onPress={scanQR}>
						<Text style={buttonStyle.buttonText}>Scan QR</Text>
					</TouchableOpacity>
				</View>
			</View >
		</>
	);
}

const styles = StyleSheet.create({
	stack: {
		marginRight: -8,
		 marginLeft: -8, 
		 flexWrap: 'wrap'
	}, 
	container: {
		position: 'relative',
		height: '100%',
		width: '100%'
	},
	badgeWrapper: {
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 16,
		paddingRight: 16
	},
	badgeContent: {
		width: '100%',
		height: 50,
		backgroundColor: '#EAEEFA',
		borderRadius: 8,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonContainer: {
		width: '100%',
		paddingLeft: 16,
		paddingRight: 16,
		position: 'absolute',
		bottom: 20
	},
	treasureTag: {
		aspectRatio: 1,
		width: '25%',
		borderRadius: 8,
		padding: 8
	}
})
export default TreasureScan;


