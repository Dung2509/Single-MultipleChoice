import {Image, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../styles';
function SingleItemData({item, onPress, backgroundColor}) {
  return (
    <TouchableOpacity
      style={[styles.styleMultiple, backgroundColor]}
      onPress={onPress}>
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
}

export default memo(SingleItemData);
