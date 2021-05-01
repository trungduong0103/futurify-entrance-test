export const FOOD_CATEGORIES = [
  "Main Plates",
  "Vegeterian",
  "Side Plates",
  "Healthy",
  "Fast Food",
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
    category: "Main Plate",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    id: 2,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    id: 3,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    id: 5,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    id: 6,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    id: 7,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    id: 8,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    id: 9,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    id: 10,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    id: 11,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
    id: 12,
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    starRating: 4.5,
    deliveryTime: 90,
    prepTime: "45 - 60",
    servingPerDish: 4,
    extras: ["jumbo shrimp", "cheese", "white anchovies"],
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
];

export default FOOD_LIST;
