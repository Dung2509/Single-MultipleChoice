import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {memo, useState} from 'react';

const Item = ({id, title, selected, onClick}) => {
  console.log(`rendering item id=${id}, selected=${selected}`);
  return (
    <TouchableOpacity
      style={[
        styles.styleMultiple,
        {backgroundColor: selected ? 'white' : 'red'},
      ]}
      onPress={onClick}>
      <Text>ID: {id}</Text>
      <Image
        source={{
          uri: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        }}
        style={styles.img}
      />
      <Text numberOfLines={1} style={styles.text}>
        ItemMultipleRender
      </Text>
    </TouchableOpacity>
  );
};
function itemEq(prevItem, nextItem) {
  return prevItem.id === nextItem.id && prevItem.selected === nextItem.selected;
}

// Does not make a difference, every time a row is clicked, all rows are re-rendered
const MemoizedItem = memo(Item);
// Make some difference but the behavior looks very weird. Try click around and see the log
// const MemoizedItem2 = memo(Item, itemEq);

const Items = ({data, selectedItems, onClick}) => {
  console.log('rendering items');
  const _renderItem = ({item}) => {
    const isSelected = selectedItems.filter(i => i === item.id).length > 0;
    return (
      <MemoizedItem
        id={item.id}
        // title={`${item.name.title} ${item.name.first} ${item.name.last}`}
        // avatarUrl={item.picture.thumbnail}
        selected={isSelected}
        onClick={onClick}
      />
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={_renderItem}
      keyExtractor={item => item.id}
      extraData={selectedItems}
      numColumns={2}
    />
  );
};

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = React.useCallback(async () => {
    const data = 'https://jsonplaceholder.typicode.com/photos?_limit=100';
    fetch(data)
      .then(response => response.json())
      .then(data => {
        setItems(data);
      });
  }, []);
  // Does not help
  // const onClickUseCallBack = React.useCallback(
  //   id => {
  //     setSelectedItems((selectedItems) => {
  //       const newSelectedItems = selectedItems.has(id)
  //         ? selectedItems.delete(id)
  //         : selectedItems.add(id);

  //       return newSelectedItems
  //     });
  //   },
  //   []
  // );

  const checkSelected = item => {
      if (selectedItems.includes(item.id)) {
        const newListItem = selectedItems.filter(itemID => itemID !== item.id);
        console.log('Bỏ chọn' + item.id);
        return setSelectedItems(newListItem);
      }
      console.log('Đã chọn ' + item.id );
      return setSelectedItems([...selectedItems, item.id]);   
    };

  return (
    <SafeAreaView style={styles.container}>
      <Items
        data={items}
        selectedItems={selectedItems}
        onClick={checkSelected}
      />
      {/* <Button
          title="Print"
          onPress={() => console.log(`Printing selected items ${selectedItems}`)}
        /> */}
    </SafeAreaView>
  );
};

export default App;
import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
  styleImage: {
    maxHeight: 200,
    padding: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: width / 2 - 20,
    // elevation: 3,
    marginTop: 20,
    // borderRadius: 15,
    marginBottom: 5,
    marginHorizontal: 10,
    // marginLeft: 15,
  },
  img: {
    width: width / 2 - 20,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    width: 100,
    alignSelf: 'center',
  },
  styleMultiple: {
    borderWidth: 1,
    width: width / 2 - 10,
    margin: 5,
    // backgroundColor: 'green',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
