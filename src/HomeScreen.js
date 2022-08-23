import {View, Text, Button} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View
      style={{
        padding: 10,
        width: 300,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'space-evenly',
      }}>  
      <Button
        title="MultipleFlatlist"
        onPress={() => navigation.navigate('MultipleFlatlist')}
      />
      <Button
        title="SingleFlatlist"
        onPress={() => navigation.navigate('SingleFlatlist')}
      />
      <Button
        title="MultipleItemRender"
        onPress={() => navigation.navigate('MultipleItemRender')}
      />
      <Button
        title="SingleItemRender"
        onPress={() => navigation.navigate('SingleItemRender')}
      />
   
    </View>
  );
}
