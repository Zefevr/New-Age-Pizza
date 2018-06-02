/* First you pick your base. You have four options:

1. 25cm NY Style € 8,99
2. 30cm NY Style € 11,49
3. 35cm NY Style € 13,49
4. 20cm NY Style € 6,45

After that you pick your sauce options:

1. White sauce
2. Red sauce
3. Double red sauce € 1,00
4. Mix it up € 1,50 

After that you pick one or more toppings:

1. Pineapple
2. Corn
3. Olives (green)
4. Red union
5. Spinach
6. Cherry tomatoes
7. Chicken

max. 3 toppings, toppings cost € 0,50 apiece

Last but not least, you can choose turbo-drone-delivery which is an additional 10% on top of the total pizza price.  */

export const base = [
  { id: "0",
    name: "20cm NY Style",
    price: 6.45
  },
  {
    id: "1",
    name: "25cm NY Style",
    price: 8.99
  },
  { id: "2",
    name: "30cm NY Style",
    price: 11.49
  },
  { id: "3",
    name: "35cm NY Style",
    price: 13.49
  }
    
]
  
export const sauce = [
  {
    id: "0",
    name: "White sauce",
    price: 0
  },
  { id: "1",
    name: "Red sauce",
    price: 0
  },
  { id: "2",
    name: "Double red sauce",
    price: 1
  },
  { id: "3",
    name: "Mix it up",
    price: 1.5
  }
]
  
export const toppings = [
  {
    id: "0",
    name: "Pineapple",
    price: 0.5
  },
  { id: "1",
    name: "Corn",
    price: 0.5
  },
  { id: "2",
    name: "Green olives",
    price: 0.5
  },
  { id: "3",
    name: "Red onion",
    price: 0.5
  },
  { id: "4",
    name: "Spinach",
    price: 0.5
  },
  { id: "5",
    name: "Cherry tomatoes",
    price: 0.5
  },
  { id: "6",
    name: "Chicken",
    price: 0.5
  }
]
  
export const Delivery = [
  {
    id:"0",
    name: "Normal",
    price: 0
  },
  {
    id:"1",
    name: "Turbo Drone",
    price: "10%"
  }
  
]