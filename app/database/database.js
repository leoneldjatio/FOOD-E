export const Items = [
    {
      id: 1,
      name:"Chicken Livers and Portuguese Roll",
      category_name:"Appeteasers",
      mealPrice: 250.00,
      description:"Chicken Livers Topped with PERi-PERi Sauce, Served with A Roll To Soak Up The Sauce",
      mealDisplayImage: require('./images/livers1.jpg'),
      isAvailable: true,
      stock:50,
      currency:"XAF",
      mealImageList: [
        {id:1,url:require('./images/livers1.jpg')},
        {id:2,url:require('./images/livers2.jpg')},
        {id:3,uri:require('./images/livers3.jpg')}
      ],
    },
    {
      id: 2,
      name:"5 Chicken Wings",
      category_name:"Peri-peri chicken",
      mealPrice: 500.02,
      description:"Original Flavours or PERi-PEREi Crusted (P)",
      mealDisplayImage: require('./images/wings1.jpg'),
      isAvailable: true,
      currency:"XAF",
      stock:10,
      mealImageList: [
        {id:1,url:require('./images/wings2.jpeg')},
        {id:2,url:require('./images/wings3.png')}
      ],
    },
    {
        name:"Achu",
        category_name:"Lunch",
        mealPrice: 1500,
        description:"gloriously yellow, delicate soup prepared mostly in Cameroonian home cooking and fairly common in the Western and North West regions.",
        mealDisplayImage: require('./images/achu1.jpg'),
        isAvailable: true,
        currency:"XAF",
        stock:10,
        mealImageList: [
          {id:1,url:require('./images/achu1.jpg')},
          {id:2,url:require('./images/achu2.jpg')},
          {id:3,url:require('./images/achu1.jpg')}
        ],
    },
    
  ];