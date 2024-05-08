/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {FC, useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {fontSize, scalableheight} from '../../assets/dimensions';
import {colors} from '../../assets/colors';
import Products from '../../Compnents/Products';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../Store/home';

interface ItemData {
  id: string;
  thumbnail: string;
  // Add more properties here if needed
}

const Home: FC<{navigation: any}> = ({}) => {
  const dispatch = useDispatch<any>();
  const {allProducts} = useSelector((state: any) => state.home);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const renderItem = ({item}: {item: ItemData}) => {
    return <Products data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: 'black',
          fontWeight: '700',
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 12,
        }}>
        Products
      </Text>
      <FlatList
        data={allProducts}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  heading: {
    color: colors.black,
    fontSize: fontSize.seventeen,
    fontWeight: '800',
    marginBottom: scalableheight.two,
  },
});
