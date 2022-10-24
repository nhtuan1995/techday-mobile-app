import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import SectionHeader from '../../Components/Header';
import buttonStyle from '../../Themes/TreasureHunt'


function TreasureDetails({ navigation }) {
	const handleBack = () => {
		navigation.navigate('TreasureArchivement');
	}

	const headerProps = {
		headerStyle: { backgroundColor: 'transparent', padding: 8, },
		title: "IT Consulting",
		titleStyle: { color: '#213992', fontSize: 16, fontWeight: 'bold' },
		headerStyle: { borderBottomColor: '#EAEEFA', borderBottomWidth: 1, },
		goBack: handleBack
	}

	return (
		<>
			<View style={styles.container}>
				<SectionHeader
					{...headerProps}
				/>

				<View style={{ paddingLeft: 16, paddingRight: 16, marginTop: 20 }}>
					<Text style={{ fontSize: 16, color: '#667085', fontWeight: '600', marginBottom: 16 }}>Details</Text>
					<Text style={{ fontSize: 16, color: '#1D2939', fontWeight: '400', textAlign: 'justify' }}>
						Digital transformation is not simply incorporating different aspects of new technologies such as AI, Blockchain, and automation to complement business processes on a micro level; but is instead about transforming entire business models, strategies and cultures on a macro level with technological innovation as the foundation. Find out how FPT’s consulting service can help enterprises overcome challenges on the race of digital transformation
					</Text>
				</View>

				<View style={{ paddingLeft: 16, paddingRight: 16, marginTop: 20 }}>
					<Text style={{ fontSize: 16, color: '#667085', fontWeight: '600', marginBottom: 16 }}>Video</Text>
					<View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity style={{ marginRight: 12 }}>
							<Image
								style={{ width: 74, height: 55, borderRadius: 8 }}
								source={{ uri: 'http://cdn2.tieudungplus.vn/upload/qeXw6Srue12aQG46um9kw/files/fpt-shop.png' }}
							/>
						</TouchableOpacity>
						<Text style={{ fontSize: 16, fontWeight: '500' }}>Operating Model Product of FPT</Text>
					</View>
				</View>

				<View style={{ paddingLeft: 16, paddingRight: 16, marginTop: 20 }}>
					<Text style={{ fontSize: 16, color: '#667085', fontWeight: '600', marginBottom: 16 }}>Brochure</Text>
					<Text style={{ fontSize: 16, color: '#182968', }}>IT Consulting information.pdf</Text>
				</View>

				<View style={{ position: 'absolute', width: '100%', bottom: 20, paddingLeft: 16, paddingRight: 16 }}>
					<TouchableOpacity style={buttonStyle.button} onPress={() => { alert('scan') }}>
						<Text style={buttonStyle.buttonText}>Contact AM</Text>
					</TouchableOpacity>
				</View>
			</View >
		</>
	);
}


const styles = StyleSheet.create({
	container: {
		positon: 'relative',
		width: '100%',
		height: '100%',
	}

})

export default TreasureDetails;


