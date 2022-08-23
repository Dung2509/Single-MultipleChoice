import React from "react";
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from "react-native";

const List = ({ data,onItemClick  }) => {
  console.log("List Rendered");

  return (
    <FlatList
      style={styles.list}
      data={data}
      renderItem={({ item }) => {
        return (
            <TouchableOpacity
            style={styles.listItem}
            onPress={() => onItemClick(item)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    borderWidth: 3,
    borderColor: "black",
    height: "30%",
    width: "80%",
  },
  listItem: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default List;