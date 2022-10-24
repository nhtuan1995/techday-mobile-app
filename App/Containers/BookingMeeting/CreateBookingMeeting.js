import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Input } from 'native-base';
import SectionHeader from '../../Components/Header';
import buttonStyle from '../../Themes/TreasureHunt'
import CreateHeaderButton from '../../Components/Svg/Icons/CreateHeaderButton';
import CaretRight from '../../Components/Svg/Icons/CaretRight'
import Clock from '../../Components/Svg/Icons/Clock'
import Location from '../../Components/Svg/Icons/Location'
import Users from '../../Components/Svg/Icons/Users'
import arrowRight from '../../Components/Svg/Icons/arrowRight'


function CreateBookingMeeting({ navigation }) {
	const handleBack = () => {
		navigation.navigate('Home');
	}

	const handleCreate = () => {
		alert('hello world ! ');
	}

	const headerProps = {
		headerStyle: { backgroundColor: 'transparent', },
		title: "Create New",
		titleStyle: { color: '#213992', fontSize: 16, fontWeight: 'bold' },
		headerStyle: { borderBottomColor: '#EAEEFA', borderBottomWidth: 1, },
		rightContent: <CreateHeaderButton onPress={handleCreate} />,
		goBack: handleBack
	}

	return (
		<>
			<View style={styles.container}>
				<SectionHeader
					{...headerProps}
				/>
				<View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, marginTop: 20 }}>
					<Input style={{ width: '100%', height: 60 }} borderRadius="8" variant="outline" placeholder="Meeting title" />
				</View>

				<View style={{paddingHorizontal: 16, marginTop: 16, width: '100%'}}>
					<TouchableOpacity style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, height: 50, backgroundColor: '#F8F9FD', borderRadius: 8 }}>
						<Text style={{color: '#1D2939'}}>Choose Attendee(s)</Text>
						<CaretRight />
					</TouchableOpacity>
				</View>

				<View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, marginTop: 20 }}>
					<Input style={{ width: '100%', height: 60 }} borderRadius="8" variant="outline" placeholder="Location" />
				</View>

				<View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, marginTop: 20 }}>
					<Input style={{ width: '100%', height: 60 }} borderRadius="8" variant="outline" placeholder="Location" />
				</View>

				<View style={{}}>
					<View>
						<Text>Date</Text>
						<Text>18/7/2022</Text>
					</View>
					<View>
						
					</View>
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

export default CreateBookingMeeting;


