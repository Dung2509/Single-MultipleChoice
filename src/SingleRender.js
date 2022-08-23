import React, {} from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import AppContextProvider from './context/AppContextProvider';
import ItemList from './context/ItemList';
const width = Dimensions.get('screen').width;

export default function SingleRender (){
  return(
  <AppContextProvider>
    <ItemList />
  </AppContextProvider>
  )
}
const styles = StyleSheet.create({

  styleMultiple: {
    borderWidth: 1,
    width: width / 2 - 10,
    margin: 5,
    // backgroundColor: 'green',
  },
  img: {
    width: width / 2 - 20,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

