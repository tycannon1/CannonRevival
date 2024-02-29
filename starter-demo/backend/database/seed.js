
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
    let socialMedia = [
        { userId: 1, platform: 'Instagram', handle: '@ty.cannon' }, // Assuming user1's id is 1
        { userId: 2, platform: 'TikTok', handle: '@tycannonn' },   // Assuming user2's id is 2  
];
for (const social of socialMedia) {
    await SocialMedia.create(social)
}
let stores = [
    { storeName: 'Ricks Retro' },
    { storeName: 'Blue Rinse' },
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
      productName: 'Nike Sweats',
      brand: 'Nike',
      price: 19.99,
      description: 'Nike Sweats',
      storeId: newStore.storeId
    },
    {
      productName: 'Adidas Jacket',
      brand: 'Adidas',
      price: 39.99,
      description: 'Adidas Jacket',
      storeId: newStore.storeId
    });
  } else if (newStore.storeName === 'Blue Rinse') {
    products.push({
      productName: 'Kappa Shirt',
      brand: 'Kappa',
      price: 29.99,
      description: 'Kappa Shirt',
      storeId: newStore.storeId
    },
    {
      productName: 'YSL Sweater',
      brand: 'YSL',
      price: 140.99,
      description: 'YSL Sweater',
      storeId: newStore.storeId
    },
    {
      productName: 'Converse Sneakers',
      brand: 'Converse',
      price: 29.99,
      description: 'Converse Sneakers',
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