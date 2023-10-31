import mongoose from "mongoose";

async function connectDatabase(){

	mongoose.connect("mongodb+srv://LucasDBispo:FHUo0p4fbeoZ2Lq4@cluster0.oisjzeg.mongodb.net/?retryWrites=true&w=majority");

	return mongoose.connection;

}
//mongodb+srv://LucasDBispo:<password>@cluster0.oisjzeg.mongodb.net/?retryWrites=true&w=majority

export default connectDatabase;