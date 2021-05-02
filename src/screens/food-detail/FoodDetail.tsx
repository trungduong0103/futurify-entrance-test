import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ApplicationStackNavigationProp,
  ApplicationStackRouteProp,
  Routes,
} from "../../routes/routes";
import ImageButton from "../home/components/header/components/image-button/ImageButton";
import ChevronLeft from "./assets/chevron_left.png";
import IncrementIcon from "./assets/increment_icon.png";
import DecrementIcon from "./assets/decrement_icon.png";
import TickIcon from "./assets/checked_icon.png";
import styles from "./FoodDetailStyle";

interface FoodDetailProps {
  route: ApplicationStackRouteProp<Routes.FoodDetailScreen>;
}

const FoodDetail: React.FunctionComponent<FoodDetailProps> = ({
  route,
}): JSX.Element => {
  const [plate, setPlate] = useState<number>(1);
  const { item } = route.params;
  const navigation = useNavigation<
    ApplicationStackNavigationProp<Routes.HomeScreen>
  >();
  const [tickState, setTickState] = useState<boolean[]>(
    item.extras.map(() => {
      return false;
    }),
  );

  const onOrder = () => {
    Alert.alert(
      "Successfully ordered!",
      "Your order will be processed shortly",
      [
        {
          text: "Confirm",
          onPress: () => navigation.navigate(Routes.HomeScreen),
        },
      ],
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <ImageButton
          handlePress={() => navigation.goBack()}
          source={ChevronLeft}
          style={styles.chevronLeft}
        />
        <TouchableOpacity onPress={onOrder}>
          <Text style={styles.orderText}>Order</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.bodyWrapper}>
          <View style={styles.foodImageWrapper}>
            <Image source={{ uri: item.imageUrl }} style={styles.foodImage} />
          </View>
          <View style={styles.foodDescriptionWrapper}>
            <>
              <Text style={styles.foodName}>{item.foodName}</Text>
              <View style={styles.row}>
                <Text style={styles.foodPriceRange}>
                  ${item.startingPriceRange}
                </Text>
                <Text style={styles.portionSize}>{item.portionSize}g</Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </>
            <View style={styles.hr} />
            <>
              <Text style={styles.foodSectionTitle}>Ingredients</Text>
              <Text style={styles.foodIngredients}>
                {item.ingredients
                  .map(ingredient => {
                    if (item.ingredients.indexOf(ingredient) === 0) {
                      return (
                        ingredient[0].toUpperCase() +
                        ingredient.substr(1, ingredient.length - 1)
                      );
                    }
                    return ingredient;
                  })
                  .join(", ")}
              </Text>
            </>
            <View style={styles.hr} />
            <View>
              <Text style={styles.foodSectionTitle}>Nutritron</Text>
              <View style={[styles.row, styles.nutritionRow]}>
                <View>
                  <Text style={styles.nutritionLabel}>Calories</Text>
                  <Text style={styles.nutritionStats}>
                    {item.nutrition.calories}
                  </Text>
                </View>
                <View>
                  <Text style={styles.nutritionLabel}>Protein</Text>
                  <Text style={styles.nutritionStats}>
                    {item.nutrition.protein}g
                  </Text>
                </View>
                <View>
                  <Text style={styles.nutritionLabel}>Total Fat</Text>
                  <Text style={styles.nutritionStats}>
                    {item.nutrition.totalFat}g
                  </Text>
                </View>
                <View>
                  <Text style={styles.nutritionLabel}>Total Carbs</Text>
                  <Text style={styles.nutritionStats}>
                    {item.nutrition.totalCarbs}g
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.orderOptionsWrapper}>
            <Text style={styles.extraOptionTitle}>EXTRAS</Text>
            {item.extras.map((extra, index) => (
              <TouchableWithoutFeedback
                key={extra.option}
                onPress={() => {
                  let newArray = tickState;
                  const oldState = tickState[index];
                  tickState[index] = !oldState;
                  setTickState([...newArray]);
                }}>
                <View style={[styles.extraOption, styles.spaceBetween]}>
                  <View style={styles.row}>
                    <Text style={styles.extraOptionText}>
                      Add {extra.option}
                    </Text>
                    <Text
                      style={[styles.extraOptionText, styles.extraOptionPrice]}>
                      +${extra.price}
                    </Text>
                  </View>
                  {tickState[index] === true && (
                    <Image source={TickIcon} style={styles.tickIcon} />
                  )}
                </View>
              </TouchableWithoutFeedback>
            ))}
            <Text style={styles.extraOptionTitle}>QUANTITY</Text>
            <View style={[styles.extraOption, styles.spaceBetween]}>
              <Text style={styles.extraOptionText}>{plate} plate</Text>
              <View style={[styles.row, styles.centered]}>
                <ImageButton
                  source={DecrementIcon}
                  handlePress={() => {
                    if (plate > 1) {
                      console.log("yo");
                      setPlate(plate - 1);
                    }
                  }}
                />
                <ImageButton
                  source={IncrementIcon}
                  handlePress={() => setPlate(plate + 1)}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FoodDetail;
