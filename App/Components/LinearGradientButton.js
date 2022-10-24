import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity , ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  UIActivityIndicator,
} from 'react-native-indicators';

const BG_COLOR = {
  LOADING: ['#F0F0F0', '#F0F0F0'],
  NON: ['#192A80', '#0B3EB1', '#0A48CD']
};

const TEXT_COLOR = {
  LOADING: '#838895',
  NON: 'white'
}

const LinearGradientButton = ({
  text,
  onPress,
  isLoading = false
}) => {
  const handlePress = () => {
    if(onPress) onPress();
  }
  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[...BG_COLOR[isLoading ? 'LOADING' : 'NON']]}
          style={styles.linearGradient}>
          <View style={styles.content} >
            {!isLoading 
              ?
              <Text style={{ fontSize: 18, fontWeight: '600', color: TEXT_COLOR[isLoading ? 'LOADING' : 'NON'] }}>
                {text}
              </Text> 
              :
              <UIActivityIndicator style={{ marginLeft: 8, flex: 0 }} color='#213992' count={8} size={20} />}
          </View>
        </LinearGradient>

      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    paddingVertical: 16,
    borderRadius: 8,
    width:'100%'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default React.memo(LinearGradientButton);


