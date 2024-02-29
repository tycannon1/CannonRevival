import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

export const db = await connectToDB('postgresql:///thrift');

class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        modelName: 'user',
        sequelize: db,
    }
);

class SocialMedia extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
  }
  
  SocialMedia.init(
    {
      platform: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      handle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      modelName: 'socialMedia',
      sequelize: db,
    },
  );
  
  class Favorites extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
  }
  
  Favorites.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      modelName: 'favorites',
      sequelize: db,
    },
  );
  
 class Store extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
  }
  
  Store.init(
    {
      storeId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      storeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      modelName: 'store',
      sequelize: db,
    },
  );
  
  class Product extends Model {
    [util.inspect.custom]() {
      return this.toJSON();
    }
  }
  
  Product.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      modelName: 'product',
      sequelize: db,
    },
  );

  //Table Relationships
  
  User.hasMany(SocialMedia, { foreignKey: 'userId' });
  SocialMedia.belongsTo(User, { foreignKey: 'userId' });
  
  User.hasMany(Favorites, { foreignKey: 'userId' });
  Favorites.belongsTo(User, { foreignKey: 'userId' });
  
  Favorites.belongsTo(Product, { foreignKey: 'productId' });
  Product.hasMany(Favorites, { foreignKey: 'productId' });
  
  Product.belongsTo(Store, { foreignKey: 'storeId' });
  Store.hasMany(Product, { foreignKey: 'storeId' });

  export {User, Favorites, Product, Store, SocialMedia};