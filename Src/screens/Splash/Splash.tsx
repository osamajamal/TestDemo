/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {View,  StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../assets/colors';
import {scalableheight} from '../../assets/dimensions';
import {CustomFooter} from '../../Compnents/CustomFooter/CustomFooter';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation() as NavigationProp<{Home: undefined}>;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/chime.png')}
        style={styles.logo}
      />
      <CustomFooter />
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: scalableheight.twentyfive,
    width: scalableheight.twentyfive,
    resizeMode: 'contain',
  },
});
