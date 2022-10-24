import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Modal, Center } from "native-base";
import { useState } from "react";
import TreasureModal from '../../Components/Svg/Icons/TreasureModal'
import buttonStyle from '../../Themes/TreasureHunt'


const TreasureHunt = ({ navigation }) => {
	const [showModal, setShowModal] = useState(false);
	const handleScran = () => {
		navigation.navigate('TreasureScan')
	}

	const handleShow = () => {
		setShowModal(true);
	}

	return (
		<Center style={{ height: '100%', width: '100%' }}>
			<View style={{ padding: 16, width: 200 }}>
				<TouchableOpacity style={buttonStyle.button} onPress={handleShow}>
					<Text style={buttonStyle.buttonText}>Treasure Hunt</Text>
				</TouchableOpacity>
			</View>


			{/* BEGIN: Main Modal */}
			<Modal isOpen={showModal} onClose={() => setShowModal(false)} style={{ width: '100%' }}>
				<Modal.Content style={styles.modalContent}>
					<Modal.Header style={{ textAlign: 'center', }}>
						<Modal.CloseButton style={styles.modalClose} />
						<Text style={styles.modalTitle}>Instruction</Text>
					</Modal.Header>
					<Modal.Body>
						<View style={styles.modalIcon}>
							<TreasureModal />
						</View>
						<View>
							<Text style={styles.modalInstructions}>
								Find event logos in hidden places in the building and
								scan the QR code below it to receive a cool umbrella.
							</Text>
						</View>
					</Modal.Body>
					<View>
						<TouchableOpacity style={buttonStyle.button} onPress={handleScran}>
							<Text style={buttonStyle.buttonText}>Scan now</Text>
						</TouchableOpacity>
					</View>
				</Modal.Content>
			</Modal>
		</Center>
	);
}


const styles = StyleSheet.create({
	modalContent: {
		paddingLeft: 12,
		paddingRight: 12,
		paddingBottom: 36,
		width: 347
	},
	modalTitle: {
		width: '100%',
		textAlign: 'center',
		color: '#213992',
		fontSize: 18,
		fontWeight: '600'
	},
	modalClose: {
		marginRight: -14,
		color: 'black'
	},
	modalIcon: {
		marginTop: 50,
		marginBottom: 50,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalInstructions: {
		fontSize: 16,
		fontWeight: '500',
		textAlign: 'justify',
		marginBottom: 35
	},
	// modalButton: {
	// 	width: '100%',
	// 	height: 52,
	// 	backgroundColor: '#213992',
	// 	borderRadius: 8,
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	alignItems: 'center'
	// },
	// buttonText: {
	// 	fontSize: 16,
	// 	fontWeight: '500',
	// 	color: 'white'
	// }
});


export default TreasureHunt;


