import {
  Dimensions,
  FlatList,
  LogBox,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {FooterMain} from './component/FooterMain';
import SingleItemData from './component/SingleItemData';

function SingleFlatlist() {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  const [page, setPage] = useState(1);
  const [listItem, setListItem] = React.useState([]);

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {     
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${page}`,
      );
      const json = await response.json();
      console.log("Log data");
      setListItem([...listItem, ...json]);
      setPage(page + 1);
  };

  const keyExtractor = useCallback(item => item.id, []);

  const footer = useMemo(() => {
    return(
      <Text style={{color:'red',fontSize:17,textAlign:'center'}}>Đang tải</Text>
    )
  }, []);

  const ITEM_HEIGHT = 200;
  const getItemLayout = useCallback(
    (_, index) => ({
      length: ITEM_HEIGHT,
      offset: index * ITEM_HEIGHT,
      index,
    }),
    [],
  );
  const [selectedId, setSelectedId] = useState(null);
  
  const renderItem = useCallback(
    ({item}) => {
      const backgroundColor = item.id === selectedId ? 'green' : 'white';
      return (
        <SingleItemData
          key={item.id}
          backgroundColor={{backgroundColor}}
          item={item}
          onPress={() => setSelectedId(item.id)}
        />
      );
    },
    [selectedId],
  );
  return (
    <FlatList
      key={keyExtractor}
      numColumns={2}
      updateCellsBatchingPeriod={1}
      removeClippedSubviews={true}
      data={listItem}
      renderItem={renderItem}
      ListFooterComponent={footer}
      keyExtractor={keyExtractor}
      windowSize={5}
      initialNumToRender={1}
      maxToRenderPerBatch={1}
      onEndReached={loadData}
      onEndReachedThreshold={0.5}
      getItemLayout={getItemLayout}
    />
  );
}

export default SingleFlatlist;
