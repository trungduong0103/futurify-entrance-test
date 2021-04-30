export const FOOD_CATEGORIES = [
  "Main Plates",
  "Vegeterian",
  "Side Plates",
  "Healhy",
  "Fast Food",
];

export interface Nutrition {
  calories: number;
  protein: number;
  totalFat: number;
  totalCarbs: number;
}

export interface FoodItem {
  foodName: string;
  category: string;
  tags: string[];
  startingPriceRange: number;
  deliveryTime: number;
  extras: string[];
  ingredients: string[];
  nutrition: Nutrition;
  description: string;
  imageUrl: string;
}

const FOOD_LIST: FoodItem[] = [
  {
    foodName: "Very Tasty Burger",
    category: "Main Plate",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
    foodName: "Very Tasty Burger",
    category: "Main Plates",
    tags: ["Vegeterian", "Gluten-free", "Healthy"],
    startingPriceRange: 25,
    deliveryTime: 90,
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
