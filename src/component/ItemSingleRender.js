import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../styles';
import { AppContext } from '../context';

export default function ItemSingleRender ({item, onPress}){
  const {selectedIds} = React.useContext(AppContext);
  const value = selectedIds === item.id ? 'green' : 'white';
  const onItemPress = () => onPress(item.id);

  return React.useMemo(() => {
      console.log("Log Single Item");
    return (  
      <TouchableOpacity
        style={[styles.styleMultiple, {backgroundColor: value}]}
        onPress={onItemPress}>
        <Text numberOfLines={1} style={styles.text}>
          {item.id}
        </Text>
        <Image
          source={{
            uri: 'https://i.stack.imgur.com/ILTQq.png',
          }}
          style={styles.img}
        />
        <Text numberOfLines={1} style={styles.text}>
        {item.title}
        </Text>
      </TouchableOpacity>
    );
  }, [value]);
}
