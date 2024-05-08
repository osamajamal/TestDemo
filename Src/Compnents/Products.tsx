import React, {FC} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

interface ProductsProps {
  data: {
    thumbnail: string;
  };
}

const Products: FC<ProductsProps> = ({data}) => {
  return (
    <ImageBackground
      source={{uri: data?.thumbnail}}
      resizeMode="cover"
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '92%',
    height: 160,
    alignSelf: 'center',
    marginVertical: 12,
  },
});
export default Products;
