import connectDatabase from "./config/dbConnect.js";
import express from "express";
import routes from "./routes/index.js";

const connection = await connectDatabase();


/*connection.on("error", (error) => 
{console.error("Connection Error", error);
});*/

connection.once("open", ()=>{
	console.log("Connection with database established successfully.");
});

const app = express();
routes(app);

export default app;
