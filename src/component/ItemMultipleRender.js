import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../styles';
function ItemMultipleRender({item}) {
  console.log("Log Multiple Item");
  const {id} = item;
  const [selectedItems, setSelectedItems] = React.useState([])
  const isSelected = selectedItems.map(i => i === item.id).length > 0;
      const checkSelected = () => {
        if (isSelected) {
          console.log("Bỏ chọn " + id);
         return setSelectedItems(prev => prev.filter(i => i !== item.id));
        } else {
          console.log("Đã chọn " + id);
         return setSelectedItems(prev => [...prev, item.id]);
        }
      };
  return (
    <TouchableOpacity
      style={[
        styles.styleMultiple,
        {backgroundColor: !isSelected ? 'white' : 'red'},
      ]}
      onPress={checkSelected}>
      <Text style={{textAlign:'center'}}>{id}</Text>
      <Image
        source={{
          uri: 'https://static.addtoany.com/images/dracaena-cinnabari.jpg',
        }}
        style={styles.img}
      />
      <Text numberOfLines={1} style={styles.text}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}
export default memo(ItemMultipleRender);
