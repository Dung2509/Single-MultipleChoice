import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../styles';
const width = Dimensions.get('screen').width;
function MultipleItem({onPress, item, isSelected}) {
  const {id, title} = item;
  return (
    <TouchableOpacity
      style={[
        styles.styleMultiple,
        {backgroundColor: !isSelected ? 'white' : 'red'},
      ]}
      onPress={onPress}>
      <Text numberOfLines={1} style={styles.text}>
        {id}
      </Text>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
        }}
        style={styles.img}
      />
      <Text numberOfLines={1} style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default memo(MultipleItem);
