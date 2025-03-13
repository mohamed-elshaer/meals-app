// import { useContext } from 'react'
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native'
import MealsList from '../components/MealsList/MealsList'
// import { FavoritesContext } from '../store/context/favorite-context/';
import { MEALS } from '../data/dummy-data';

function FavoriteScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  if(favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.title}>No Favorite Meals Yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoriteScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});