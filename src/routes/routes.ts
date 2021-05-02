import { FoodItem } from "../mock-data/MockFoodList";
import FoodDetail from "../screens/food-detail/FoodDetail";
import Home from "../screens/home/Home";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export enum Routes {
  HomeScreen = "Home",
  FoodDetailScreen = "Food Detail",
}

export type ApplicationStackParamList = {
  [Routes.HomeScreen]: undefined;
  [Routes.FoodDetailScreen]: {
    item: FoodItem;
  };
};

export type ApplicationStackNavigationProp<
  RouteName extends keyof ApplicationStackParamList
> = StackNavigationProp<ApplicationStackParamList, RouteName>;

export type ApplicationStackRouteProp<
  RouteName extends keyof ApplicationStackParamList
> = RouteProp<ApplicationStackParamList, RouteName>;

const routes = [
  {
    name: Routes.HomeScreen,
    component: Home,
  },
  {
    name: Routes.FoodDetailScreen,
    component: FoodDetail,
  },
];

export default routes;
