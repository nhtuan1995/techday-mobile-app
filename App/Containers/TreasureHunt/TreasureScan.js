import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Modal, Center } from "native-base";
import TreasureModal from '../../Components/Svg/Icons/TreasureModal'
import buttonStyle from '../../Themes/TreasureHunt'

import SectionHeader from '../../Components/Header';
import TreasureThunder from '../../Components/Svg/Icons/TreasureThunder'
import StampIcon from '../../Components/Svg/Icons/StampIcon'

const NotFoundModal = ({isOpen, onClose}) =>{
	return (
		<Modal isOpen={isOpen} onClose={onClose} style={{ width: '100%' }}>
				<Modal.Content style={styles.modalContent}>
					<Modal.Body>
						<View style={styles.modalIcon}>
							<TreasureModal />
						</View>
						<View>
							<Text style={styles.modalInstructions}>
							The QR Code is not in the correct format. Please try again.
							</Text>
						</View>
					</Modal.Body>
					<View sltyle={{width: '100%'}}>
						<TouchableOpacity style={buttonStyle.button} onPress={onClose}>
							<Text style={buttonStyle.buttonText}>OK</Text>
						</TouchableOpacity>
					</View>
				</Modal.Content>
			</Modal>
	)
}

const TreasureScan = ({ navigation }) => {
	const [notFound, setNotFound] = useState(false);
	const handleBack = () => {
		navigation.navigate('TreasureHunt');
	}

	const showArchivement = () => {
		navigation.navigate('TreasureArchivement')
	}

	const showNotFound = () =>{
		setNotFound(true);
	}

	const headerProps = {
		bgColor: 'transparent',
		headerStyle: { backgroundColor: 'transparent' },
		iconBackColor: "white",
		rightContent: <TreasureThunder />,
		goBack: handleBack
	}


	
	return (
		<>
			<View style={styles.overlay}>
				<View style={{ padding: 16, marginBottom: 90 }}>
					<SectionHeader
						{...headerProps}
					/>
				</View>

				<View style={styles.qrScan}>
					<View style={{ marginBottom: 28 }}>
						<Text style={styles.qrInstruction}>Move camera closer to QR code</Text>
					</View>

					<View style={styles.qrCamera}>
					<TouchableOpacity style={{width: '100%', height: '100%', display: 'flex', justifyContent:'center', alignItems:'center'}} onPress={showNotFound}>
							<Text>Not found </Text>
						</TouchableOpacity>
					</View>

					<View style={styles.archiveContainer}>
						<TouchableOpacity style={styles.archiveButton} onPress={showArchivement}>
							<StampIcon />
						</TouchableOpacity>
						<Text style={styles.archiveText}>My archivement</Text>
					</View>
				</View>

				<NotFoundModal isOpen={notFound} onClose={()=>{setNotFound(false)}}/>
			</View>
		</>
	);
}


const styles = StyleSheet.create({
	overlay: {
		backgroundColor: '#363636',
		opacity: 0.9,
		width: '100%',
		height: '100%'
	},
	qrScan: {
		width: '100%',
		height: 500,
		display: 'flex',
		alignItems: 'center'
	},
	qrInstruction: {
		width: '100%',
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '500',
	},
	qrCamera: {
		marginBottom: 140,
		width: 275,
		height: 275,
		backgroundColor: '#D9D9D9',
		borderRadius: 8
	},
	archiveContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	archiveButton: {
		width: 50,
		height: 50,
		borderRadius: 8,
		marginBottom: 16,
		backgroundColor: '#D0D5DD',
		borderRadius: 12,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	archiveText: {
		color: 'white',
		fontSize: 16
	},
	modalContent: {
		paddingLeft: 12,
		paddingRight: 12,
		paddingBottom: 36,
		width: 347
	},
	modalIcon: {
		marginTop: 24,
		marginBottom: 24,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalInstructions: {
		fontSize: 16,
		fontWeight: '500',
		textAlign: 'center',
		marginBottom: 20
	},
})

export default TreasureScan;


