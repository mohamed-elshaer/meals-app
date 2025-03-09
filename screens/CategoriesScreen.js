import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {
  const renderItemHandler = (itemData) => {
    const onPressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItemHandler}
        numColumns={2} // This will create a 2-column layout
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
