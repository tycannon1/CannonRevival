// express, morgan, express-session, ViteExpress
//imports
import express from "express"
import morgan from "morgan"
import session from "express-session"
import ViteExpress from "vite-express"


//Create Express Instance
const app = express()


//set up middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "secretString",
    saveUninitialized: false,
    resave: false,
  })
);

import { handlerFunctions } from "./controller.js";

app.get("/api/session-check", handlerFunctions.sessionCheck);
app.post("/api/login", handlerFunctions.login);
app.get("/api/logout", handlerFunctions.logout);
app.get("/api/products", handlerFunctions.getAllProducts)
app.get("/api/stores", handlerFunctions.getAllStores)
app.post("/api/add-to-favorites", handlerFunctions.addToFavorites);
app.post("/api/remove-from-favorites", handlerFunctions.removeFromFavorites);
app.get("/api/user/favorites", handlerFunctions.getAllFavorites);
app.post("/api/signup", handlerFunctions.signup)
app.post("/api/update-profile", handlerFunctions.updateProfile);
app.post("/api/social-media", handlerFunctions.saveSocialMediaHandle);


//Routes

//Run the server
ViteExpress.listen(app, 1999, () => 
{console.log("Server Running On http://localhost:1999")})

