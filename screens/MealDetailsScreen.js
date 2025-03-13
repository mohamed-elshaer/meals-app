import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
// import { FavoritesContext } from '../store/context/favorite-context';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
function MealDetailsScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  // const favoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const selectedItem = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);
  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={changeFavoriteStatusHandler} icon={mealIsFavorite ? 'star' : 'star-outline'} color={'white'} />
      }
    });
  }, [mealIsFavorite, navigation]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedItem.imageUrl }} style={styles.image} />
      <Text style={styles.mealTitle}>{selectedItem.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedItem.duration}m</Text>
        <Text style={styles.detailItem}>
          {selectedItem.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedItem.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients:</Subtitle>
          <List data={selectedItem.ingredients} />
          <Subtitle>Steps:</Subtitle>
          <List data={selectedItem.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: 'white',
  },
  listOuterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
