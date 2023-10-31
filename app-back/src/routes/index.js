import express from "express";
import categories from "./categoryRoutes.js";

const routes = (app) =>{
	app.route("/").get((req, res) => res.status (200).send( "App Your Menu"));

	app.use(express.json(), categories); 
};

export default routes;

