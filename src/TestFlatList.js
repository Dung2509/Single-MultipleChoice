import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  LogBox,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';

import MultipleItem from './component/MultipleItem';
import {FooterMain} from './component/FooterMain';
const width = Dimensions.get('screen').width;
function TestFlatList() {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  const [loading, setLoading] = useState(false);
  const [listItem, setListItem] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const data = 'https://jsonplaceholder.typicode.com/photos?_limit=200';
    fetch(data)
      .then(response => response.json())
      .then(data => {
        setListItem([...data]);
        setLoading(false);
      });
  }, [!loading]);

  const [selectedItems, setSelectedItems] = React.useState([]);

  const renderItem = useCallback(
    ({item}) => {
      const isSelected = selectedItems.filter(i => i === item.id).length > 0;
      const checkSelected = () => {
        if (isSelected) {
          setSelectedItems(prev => prev.filter(i => i !== item.id));
        } else {
          setSelectedItems(prev => [...prev, item.id]);
        }
      };
      return (
        <MultipleItem
          key={item.id}
          item={item}
          onPress={checkSelected}
          isSelected={isSelected}
        />
      );
    },
    [selectedItems],
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);
  const footer = useMemo(() => {
    return (
      <View style={styless.loader}>
        {!loading ? (
          <FooterMain />
        ) : (
          <TouchableOpacity>
            <Text>No data left</Text>
          </TouchableOpacity>
        )}
      </View>
    );
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
  return (
    <FlatList
      key={keyExtractor}
      removeClippedSubviews={true}
      style={{marginBottom: 20}}
      numColumns={2}
      data={listItem}
      renderItem={renderItem}
      initialNumToRender={1}
      ListFooterComponent={footer}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      windowSize={1}
      updateCellsBatchingPeriod={1}
      maxToRenderPerBatch={1}
    />
  );
}
const styless = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
export default TestFlatList;
