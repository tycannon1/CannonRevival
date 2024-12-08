
import { User, Favorites, Product, Store, db, SocialMedia } from "./model.js";


    // Sync all models with the database
    await db.sync({ force: true });

    // Seed Users
    let users = [
        {
            name: 'Ty',
      username: 'tycannon@gmail.com',
      password: 'password',
    },
    {   name: 'Ty Cannon',
        username: 'tycannon@example.com',
    password: 'password1',
    }
];

for (const user of users) {
    await User.create(user);
}

    // Seed SocialMedia
//     let socialMedia = [
        
// ];
// for (const social of socialMedia) {
//     await SocialMedia.create(social)
// }
let stores = [
    { storeName: 'Ricks Retro' },
    { storeName: '2nd Street' },
  ];
  
  for (const store of stores) {
    const newStore = await Store.create(store);
    // Seed Products for each store
  //   const products = [
  //     { storeId: newStore.storeName === 'Ricks Retro', productName: 'Nike Sweats' ,brand: 'Nike', price: 19.99, description: 'Nike Sweats'},
  //     { storeId: newStore.storeName === 'Blue Rinse', productName: 'Kappa Shirt' ,brand: 'Kappa', price: 29.99, description: 'Kappa Shirt'},
  //   ];
  //   await Product.bulkCreate(products);

  // }

  let products = [];
  if (newStore.storeName === 'Ricks Retro') {
    products.push({
      productName: 'DIESEL CARGO PANTS',
      brand: 'Diesel',
      price: 57.00,
      description: 'Beige, 34W X 32L',
      imageUrl: 'public/Images/DSC_9145.webp',
      storeId: newStore.storeId
    },
    {
      productName: 'ARCTERYX JACKET',
      brand: 'Arcteryx',
      price: 180.00,
      description: 'Red, Large',
      imageUrl: 'public/Images/DSC_2414.jpg',
      storeId: newStore.storeId
    },
    {
      productName: 'BURBERRY SHIRT',
      brand: 'Burberry',
      price: 128.00,
      description: 'Medium',
      imageUrl: 'public/Images/DSC_6131.webp',
      storeId: newStore.storeId
    },
    {
      productName: 'PATAGONIA SYNCHILLA FLEECE',
      brand: 'PATAGONIA',
      price: 76.00,
      description: 'Blue, Small',
      imageUrl: 'public/Images/DSC_0261.webp',
      storeId: newStore.storeId
    },
    {
      productName: 'CARHARTT CARGO TROUSERS',
      brand: 'CARHARTT',
      price: 70.00,
      description: 'Blue, 34W, 32L',
      imageUrl: 'public/Images/DSC_1644.webp',
      storeId: newStore.storeId
    },
    {
      productName: 'VERSACE CRUSHED VELVET JEANS',
      brand: 'VERSACE',
      price: 80.00,
      description: 'Turquoise, 30W, 32L',
      imageUrl: 'public/Images/DSC_0853.webp',
      storeId: newStore.storeId
    });
  } else if (newStore.storeName === '2nd Street') {
    products.push({
      productName: 'BMW FORMULA 1 RACER JACKET',
      brand: 'BMW',
      price: 29.99,
      description: 'Navy, XL',
      imageUrl: 'public/Images/bmwjacket.jpg',
      storeId: newStore.storeId
    },
    {
      productName: 'YVES SAINT LAURENT LOAFERS',
      brand: 'YSL',
      price: 190.00,
      description: 'EU 40, US 7',
      imageUrl: 'public/Images/yslloafers.webp',
      storeId: newStore.storeId
    },
    {
      productName: 'PRADA CROSS BODY',
      brand: 'PRADA',
      price: 250.00,
      description: 'Black, Two Zip',
      imageUrl: 'public/Images/pradacrossbody.webp',
      storeId: newStore.storeId
    },
    {
      productName: 'ARCTERYX PUFFER VEST',
      brand: 'ARCTYREX',
      price: 140.00,
      description: 'Black Large',
      imageUrl: 'public/Images/arcpuffer.webp',
      storeId: newStore.storeId
    },
    {
      productName: 'GOLF WANG T-SHIRT',
      brand: 'GOLF WANG',
      price: 20.00,
      description: 'Yellow, Large',
      imageUrl: 'public/Images/golfwang.webp',
      storeId: newStore.storeId
    },
    {
      productName: 'OFFWHITE SHORTS',
      brand: 'OFFWHITE',
      price: 90.00,
      description: 'Grey, Large',
      imageUrl: 'public/Images/shorts1245.png',
      storeId: newStore.storeId
    });
  }
  // await Product.bulkCreate(products);
  for (const product of products) {
    await Product.create(product)
  }
}
  
  // Seed Favorites
  let favorites = [
    // { userId: 1, productId: 1 },
    // { userId: 2, productId: 2 },
  ];
  
  for (const favorite of favorites) {
    await Favorites.create(favorite);
  }
    await db.close();