import { db, User, SocialMedia, Favorites, Product } from './model.js'


const user1 = await User.findByPk(1, {
    include: [
        {
            model: Favorites, 
            include: { 
                model: Product 
            }
        }, 
        {
            model: SocialMedia
        }
    ]
})

// const u1sm = await SocialMedia.findAll({
//     where: {
//         userId: 1
//     }
// })

// const userFavorites = await Favorites.findAll({
//     where: {
//       userId: 1
//     },
//     include: {
//       model: Product
//     }
//   })

console.log(user1)

user1.favorites.forEach((fav) => console.log(fav.product))
// console.log(u1sm)
// console.log(userFavorites)


await db.close()