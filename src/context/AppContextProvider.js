import React,{memo, useState} from 'react';
import {AppContext} from '../context';

export default function AppContextProvider({children}) {
  const [selectedIds, setSelectedIds] = React.useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const addSelectedIds = id => {
    setSelectedIds(id);
  };
  // const checkSelected = id => {
  //   if (selectedItems.includes(id)) {
  //     const newListItem = selectedItems.filter(itemID => itemID !== id);
  //     console.log('Bỏ chọn' + id);
  //     return setSelectedItems(newListItem);
  //   }
  //   console.log('Đã chọn ' + id );
  //   return setSelectedItems([...selectedItems, id]);   
  // };
   return (
    <AppContext.Provider
      value={{
        selectedIds: selectedIds,
        addSelectedIds: addSelectedIds,
        selectedItems: selectedItems,
        // checkSelected: checkSelected,
      }}>
      {children}
    </AppContext.Provider>
  );
}
// export default memo(AppContextProvider);
