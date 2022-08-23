import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React,{useState} from 'react'
import ItemSingleRender from '../component/ItemSingleRender';
import { AppContext } from '../context';

export default function ItemList(){
    const {selectedIds, addSelectedIds} = React.useContext(AppContext);  
    const renderItem = ({item}) => {
      return <ItemSingleRender item={item} onPress={addSelectedIds} />;
    };  
    const [page, setPage] = React.useState(1);
  const [listItem, setListItem] = React.useState([]);
  
  React.useEffect(() => {
    loadData();
  }, []);
  
  const loadData = async () => {     
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${page}`,
      );
      const json = await response.json();
      console.log("Log Data Single Item " + "page " + page);
      setListItem([...listItem, ...json]);
      setPage(page + 1);
  };
    return (
        <FlatList
          data={listItem}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedIds}
          numColumns={2}
          style={{marginVertical:15}}
          onEndReached={loadData}
          onEndReachedThreshold={0.05}
          ListFooterComponent={() => {
            return(
              <Text style={{alignSelf:'center',fontSize:20,color:'red'}}>Loading</Text>
            )
          }}
        />
    );
  };