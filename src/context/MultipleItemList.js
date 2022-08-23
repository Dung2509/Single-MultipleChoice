import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {AppContext} from '../context';
import ItemMultipleRender from '../component/ItemMultipleRender';

export default function MultipleItemList() {
  const {selectedItems} = React.useContext(AppContext);

  const renderItem = ({item}) => {
    return <ItemMultipleRender item={item} />;
  };

  const [listItem, setListItem] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  // var [count, setCount] = useState(50)
  React.useEffect(() => { 
    loadData();
  }, []);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 50);
  //   }, 100);
  // },[]);

  const loadData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=200',
    );
    const json = await response.json();
    setListItem(json);    
    setLoading(true);
  
  };
  const ITEM_HEIGHT = 200;
  const getItemLayout = (_, index) => ({
    length: ITEM_HEIGHT,
    offset: index * ITEM_HEIGHT,
    index,
  });

  const keyExtractor = React.useCallback(item => item.id, []);
  
  return (
    <>
      {!loading ? (
        <ActivityIndicator
          size={'large'}
          style={{alignSelf: 'center'}}
          color={'red'}
        />
      ) : (
        <FlatList
          style={{marginBottom: 20}}
          numColumns={2}
          data={listItem}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          initialNumToRender={100}
        />
      )}
    </>
  );
}
