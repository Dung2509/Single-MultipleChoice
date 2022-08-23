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
    marginHorizontal:10
    // marginLeft: 15,
  },
  img: {
    width: width / 2 - 20,
    height: 150,
    alignSelf: 'center',
    resizeMode:'contain'
  },
  text: {
    width: 100,
    alignSelf: 'center',
  },
  styleMultiple:{
    borderWidth: 1,
    width: width / 2 - 10,
    margin: 5,   
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
