import React from 'react';
import { View, Text, FlatList, SectionList, Alert, StyleSheet } from 'react-native';

// Danh sách sản phẩm
const products = [
  { id: '1', name: 'Product A', price: '10.00' },
  { id: '2', name: 'Product B', price: '15.00' },
  { id: '3', name: 'Product C', price: '20.00' },
];

// Danh sách nhóm sản phẩm
const groupedProducts = [
  { title: 'Category A', data: ['Product A1', 'Product A2', 'Product A3'] },
  { title: 'Category B', data: ['Product B1', 'Product B2'] },
  { title: 'Category C', data: ['Product C1', 'Product C2', 'Product C3'] },
];

const App = () => {
  const renderProductItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text onPress={() => handlePress(item.name)}>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  const handlePress = (name) => {
    Alert.alert(name);
  };

  const renderSectionItem = ({ item }) => (
    <Text style={styles.item} onPress={() => Alert.alert(item)}>
      {item}
    </Text>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.marginTop]}>Danh sách sản phẩm</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        contentContainerStyle={styles.listMargin} // Cách lề trên và dưới cho FlatList
      />
      <Text style={[styles.title, styles.marginTop]}>Danh sách nhóm sản phẩm</Text>
      <SectionList
        sections={groupedProducts}
        keyExtractor={(item, index) => item + index}
        renderItem={renderSectionItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listMargin} // Cách lề trên và dưới cho SectionList
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  marginTop: {
    marginTop: 30, // Điều chỉnh giá trị này để thay đổi khoảng cách lề trên của phần tử
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 5,
  },
  header: {
    padding: 10,
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  listMargin: {
    marginVertical: 10,
  },
});

export default App;
