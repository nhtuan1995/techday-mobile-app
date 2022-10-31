import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, SafeAreaView, StatusBar } from 'react-native';

import Header from './Header';

export default React.memo(function BgGradientScreen({
  colors = ['#E4EFFF', '#FFF'],
  style = {},
  headerProps = {},
  hasHeader = true,
  children,
  locations = [0.3, 0.7],
  start = {x: 1, y: 0},
  end = {x: 1, y: 1},
}) {
  const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      locations={locations}
      style={[{flex: 1}, style]}
    >
      {hasHeader ? (
        <Header bgColor={'transparent'} {...headerProps}/>
      ) : (
        <>
          <SafeAreaView style={{ paddingTop: statusBarHeight }} />
          <StatusBar translucent={true} backgroundColor={'transparent'} />
        </>
      )}
      <View style={{flex: 1}}>
        {children}
      </View>
    </LinearGradient>
  )
})