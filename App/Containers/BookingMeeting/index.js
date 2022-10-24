import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import SectionHeader from '../../Components/Header';
import buttonStyle from '../../Themes/TreasureHunt'
import CreateHeaderButton from '../../Components/Svg/Icons/CreateHeaderButton';
import CaretRight from '../../Components/Svg/Icons/CaretRight'
import Clock from '../../Components/Svg/Icons/Clock'
import Location from '../../Components/Svg/Icons/Location'
import Users from '../../Components/Svg/Icons/Users'

const BookingInfo = () => {
	return (
		<>
			<View style={{ width: '100%', }}>
				<View style={{ height: 36, paddingHorizontal: 12, backgroundColor: '#EAEEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 8, borderTopRightRadius: 8, }}>
					<Text style={{ color: '#182968', fontSize: 16, fontWeight: '600' }}>Kick off Meeting with Honda</Text>
				</View>

				<View style={{ paddingHorizontal: 12, paddingVertical: 12, borderStyle: 'solid', borderWidth: 1, borderColor: '#EAEEFA', borderBottomLeftRadius: 8, borderBottomRightRadius: 8, }}>
					<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
						<View>
							<Clock />
						</View>
						<Text style={{ marginLeft: 10, fontSize: 14, color: '#1D2939' }}>19/07/2022  15:00 - 15:30 </Text>
					</View>

					<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
						<View>
							<Location />
						</View>
						<Text style={{ marginLeft: 10, fontSize: 14, color: '#1D2939' }}>Lotte Hotel Hanoi, 54 P. Liễu Giai, Cống Vị, Ba Đình, Hà Nội</Text>
					</View>

					<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginTop: 8 }}>
						<View style={{display:'flex', flexDirection:'row', alignContent:'center',}}>
							<Users />
						<Text style={{ marginLeft: 10, fontSize: 14, color: '#1D2939' }}>5</Text>
						</View>
						<Text style={{color: '#4463D5'}}>
							Waiting
						</Text>
					</View>

				</View>
			</View>
		</>

	)
}

function BookingMeeting({ navigation }) {
	const handleBack = () => {
		navigation.navigate('Home');
	}

	const handleCreate = () => {
		navigation.navigate('CreateBookingMeeting');

	}

	const headerProps = {
		headerStyle: { backgroundColor: 'transparent', },
		title: "Booking Meeting",
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
					<Text style={{ fontSize: 16, color: '#667085', fontWeight: '600' }}>My Request (5)</Text>
					<TouchableOpacity onClick={() => alert('move on ! ')}>
						<CaretRight />
					</TouchableOpacity>
				</View>
				<View style={{ paddingHorizontal: 16, width: '100%', marginTop: 12 }} >
					<BookingInfo />
					<BookingInfo />
				</View>

				<View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16, marginTop: 20 }}>
					<Text style={{ fontSize: 16, color: '#667085', fontWeight: '600' }}>Need Approval (8)</Text>
					<TouchableOpacity onClick={() => alert('move on ! ')}>
						<CaretRight />
					</TouchableOpacity>
				</View>
				<View style={{ paddingHorizontal: 16, width: '100%', marginTop: 12 }} >
					<BookingInfo />
					<BookingInfo />
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

export default BookingMeeting;


