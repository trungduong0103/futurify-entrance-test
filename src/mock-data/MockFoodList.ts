export const FOOD_CATEGORIES = [
  "ALL",
  "Main Plates",
  "Side Plates",
  "Salads",
  "Dessert",
  "Vegeterian",
];

export interface Nutrition {
  calories: number;
  protein: number;
  totalFat: number;
  totalCarbs: number;
}

export interface FoodItem {
  id: number;
  foodName: string;
  category: string;
  tags: string[];
  startingPriceRange: number;
  starRating: number;
  deliveryTime: number;
  prepTime: string;
  servingPerDish: number;
  extras: string[];
  ingredients: string[];
  nutrition: Nutrition;
  description: string;
  imageUrl: string;
}

const FOOD_LIST: FoodItem[] = [
  {
    id: 0,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Fast Food", "Delicious", "Meat Lover"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["bacon", "cheese", "lettuce"],
    ingredients: [
      "buns",
      "meat",
      "salt",
      "bread",
      "egg",
      "ham",
      "bacon",
      "lettuce",
      "onions",
    ],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-p/14/cd/fb/d5/the-lush.jpg",
  },
  {
    id: 1,
    foodName: "Say What Again MF",
    category: "Main Plates",
    tags: ["Meat Lover", "Bacon", "Cheesy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["bacon", "cheese", "lettuce"],
    ingredients: [
      "buns",
      "meat",
      "salt",
      "bread",
      "egg",
      "ham",
      "bacon",
      "lettuce",
      "onions",
    ],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description: "Say what again motherfucker, SAY WHAT AGAIN!",
    imageUrl:
      "https://i.etsystatic.com/5654812/r/il/6bb51b/1627408606/il_570xN.1627408606_gqjf.jpg",
  },
  {
    id: 2,
    foodName: "Another Tasty Burger",
    category: "Main Plates",
    tags: ["Meat Lover", "Fast Food", "Cheesy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["bacon", "cheese", "lettuce"],
    ingredients: [
      "buns",
      "meat",
      "salt",
      "bread",
      "egg",
      "ham",
      "bacon",
      "lettuce",
      "onions",
    ],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2019_df_retail_butter-burger_20912_760x580.jpg?ext=.jpg",
  },
  {
    id: 3,
    foodName: "Yum! Salads",
    category: "Salads",
    tags: ["Vegeterian", "Salads", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["lettuce", "cucumber", "vinegar", "eggs"],
    ingredients: [
      "lettuce",
      "vinegar",
      "eggs",
      "bread",
      "butter",
      "avocado",
      "anchovies",
    ],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://ifoodreal.com/wp-content/uploads/2018/12/FG-healthy-spinach-salad-recipe.jpg",
  },
  {
    id: 4,
    foodName: "Super Duper Salad",
    category: "Salads",
    tags: ["Vegeterian", "Salads", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["lettuce", "cucumber", "vinegar", "eggs"],
    ingredients: [
      "lettuce",
      "vinegar",
      "eggs",
      "bread",
      "butter",
      "avocado",
      "anchovies",
    ],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://www.howsweeteats.com/wp-content/uploads/2020/05/summer-salad-16-500x375.jpg",
  },
  {
    id: 5,
    foodName: "Caesar Salads",
    category: "Salads",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["lettuce", "cucumber", "vinegar", "eggs"],
    ingredients: [
      "lettuce",
      "vinegar",
      "eggs",
      "bread",
      "butter",
      "avocado",
      "anchovies",
    ],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/14/0/FNK_CAESAR-SALAD-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1557857930163.jpeg",
  },
  {
    id: 6,
    foodName: " Deluxe Ice Cream",
    category: "Dessert",
    tags: ["Ice Cream", "Cold", "Chocolate"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["vanilla topping", "chocolate chips", "crackers"],
    ingredients: ["milk", "eggs", "chocolate", "crackers"],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://theviewfromgreatisland.com/wp-content/uploads/2013/05/chunky-apricot-ice-cream-image-2.jpg",
  },
  {
    id: 7,
    foodName: "Hot Ice Cream?!?",
    category: "Dessert",
    tags: ["Ice Cream", "Hot", "Vanilla"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["vanilla topping", "chocolate chips", "crackers"],
    ingredients: ["milk", "eggs", "chocolate", "crackers"],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://www.foodrepublic.com/wp-content/uploads/2015/07/icecream-1-700x529.jpg",
  },
  {
    id: 8,
    foodName: "Spciy Ice Cream",
    category: "Dessert",
    tags: ["Ice Cream", "Hot", "Vanilla"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["vanilla topping", "chocolate chips", "crackers"],
    ingredients: ["milk", "eggs", "chocolate", "crackers"],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://www.simplyscratch.com/wp-content/uploads/2020/03/No-Churn-Pistachio-Ice-Cream-l-SimplyScratch.com-nochurn-icecream-pistachio-nut-easy-dessert-29-720x720.jpg",
  },
  {
    id: 9,
    foodName: "Crispy Fies",
    category: "Side Plates",
    tags: ["Vegeterian", "Fry", "Salty"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["ketchup", "mayo", "mustard"],
    ingredients: ["potato", "salt", "oil"],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://static.fanpage.it/wp-content/uploads/sites/22/2020/09/iStock-618214356-638x425.jpg",
  },
  {
    id: 10,
    foodName: "Scotch Eggs",
    category: "Side Plates",
    tags: ["Eggs", "Yolk", "Crispy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["eggs", "lettuce", "mustard"],
    ingredients: ["eggs", "flour", "salt"],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://az810478.vo.msecnd.net/media/images/default-source/Recipes/sausage/paleo-breakfast-scotch-eggs-with-honey-mustard.jpg",
  },
  {
    id: 11,
    foodName: "Kimchi",
    category: "Side Plates",
    tags: ["Vegeterian", "Spicy", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: [],
    ingredients: ["lettuce", "onions", "pepper"],
    nutrition: {
      calories: 470,
      protein: 40,
      totalFat: 25,
      totalCarbs: 12,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://static01.nyt.com/images/3019/03/22/dining/jm-kimchi/merlin_150934050_507fb4e7-4773-4be3-96eb-9eae98f7b9e6-articleLarge.jpg",
  },
];

export default FOOD_LIST;
