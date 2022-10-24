import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Stack, Center } from 'native-base'
import { Actionsheet, useDisclose, Box, NativeBaseProvider } from "native-base";
import { Linking } from 'react-native';

//Test

import FacebookIcon from '../../Components/Svg/Icons/FacebookIcon'
import LinkedinIcon from '../../Components/Svg/Icons/LinkedinIcon'
import TreasureSuccess from '../../Components/Svg/Icons/TreasureSuccess'

import HeaderInfoIcon from '../../Components/Svg/Icons/HeaderInfoIcon';

import buttonStyle from '../../Themes/TreasureHunt'

import SectionHeader from '../../Components/Header';

const InfoIcon = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<HeaderInfoIcon />
		</TouchableOpacity>
	)
}

const SocialIcon = ({ icon, name, link }) => {
	return (
		<TouchableOpacity style={{ marginRight: 40 }}
			onPress={() => {
				Linking.openURL(link);
			}}>
			<View style={{ width: 48, height: 48, backgroundColor: 'white', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }} >
				{icon}
			</View>
			<Text style={{ fontSize: 12, color: '#667085' }}>{name}</Text>
		</TouchableOpacity>
	)
}

const ShareModal = ({ isOpen, onClose }) => {

	const headerProps = {
		headerStyle: { backgroundColor: 'transparent', padding: 8, },
		title: "Share to",
		titleStyle: { color: '#213992', fontSize: 16, fontWeight: 'bold' },
		headerStyle: { borderBottomColor: '#EAEEFA', borderBottomWidth: 1, },
		goBack: onClose
	}
	return (
		<Actionsheet isOpen={isOpen} onClose={onClose}>
			<Actionsheet.Content>
				<SectionHeader
					{...headerProps}
				/>
				<View style={{ height: 170, width: '100%', backgroundColor: '#f2f4f7', padding: 16, display: 'flex', flexDirection: 'row' }}>
					<TouchableOpacity style={{ marginRight: 40 }}>
						<View style={{ width: 48, height: 48, backgroundColor: 'white', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }} >
							<FacebookIcon />
						</View>
						<Text style={{ fontSize: 12, color: '#667085' }}>Facebook</Text>
					</TouchableOpacity>
					<SocialIcon
						icon={<LinkedinIcon />}
						name="Linkedin"
						link="https://gooogle.com"
					/>
				</View>
			</Actionsheet.Content>
		</Actionsheet>
	)
}

const TreasureFinish = ({ navigation }) => {
	const [shareModal, setShareModal] = useState(false);
	const handleBack = () => {
		navigation.navigate('TreasureScan');
	}
	const headerProps = {
		headerStyle: { backgroundColor: 'transparent', padding: 8, },
		title: "Treasure Hunt",
		titleStyle: { color: '#213992', fontSize: 16, fontWeight: 'bold' },
		headerStyle: { borderBottomColor: '#EAEEFA', borderBottomWidth: 1, },
		rightContent: <InfoIcon />,
		goBack: handleBack
	}

	

	const showShare = () => {
		setShareModal(true);
	}
	return (
		<>
			<View style={styles.container}>
				<SectionHeader
					{...headerProps}
				/>

				<View style={{ paddingLeft: 24, paddingRight: 24, marginTop: 90, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<TreasureSuccess />
					<Text style={{ color: '#213992', fontSize: 24, marginTop: 30 }}>Congratulation! </Text>
					<Text style={{ fontSize: 16, marginTop: 21, width: '100%', color: '#344054' }}>You have collected 9/9 logos. Please go to Reception Room to receive your gift. </Text>
					<Text style={{ fontSize: 16, marginTop: 21, width: '100%', color: '#344054' }}>Hope that you have had wonderful time with FPT. </Text>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity style={buttonStyle.button} onPress={showShare}>
						<Text style={buttonStyle.buttonText}>Share</Text>
					</TouchableOpacity>
				</View>

				<ShareModal isOpen={shareModal} onClose={() => { setShareModal(false); }} />
			</View >
		</>
	);
}

const styles = StyleSheet.create({
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
export default TreasureFinish;


