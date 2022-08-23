import React, {} from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import AppContextProvider from './context/AppContextProvider';
import ItemList from './context/ItemList';
import MultipleItemList from './context/MultipleItemList';
const width = Dimensions.get('screen').width;

export default function MultipleRender (){
  return(
  <AppContextProvider>
    <MultipleItemList />
  </AppContextProvider>
  )
}
const styles = StyleSheet.create({

  styleMultiple: {
    borderWidth: 1,
    width: width / 2 - 10,
    margin: 5,
  },
  img: {
    width: width / 2 - 20,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

