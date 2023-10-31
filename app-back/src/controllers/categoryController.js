import { category } from "../models/CategoryModel.js";

class categoryController{

	static async getCategories (req, res){
		try {
			const categoryList = await category.find({});
			res.status(200).json(categoryList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Internal Server Error`
			});
		}
	}

	static async getSingleCategory (req, res){
		try{
			const id = req.params.id; 
			const categoryFound = await category.findById(id);
			res.status(200).json(categoryFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Internal Server Error`
			});
		}
	}

	static async addCategory (req, res){
		try{
			const newCategory = await category.create(req.body);
			res.status(201).json({
				message: "New category added successfully.",
				category: newCategory});
		} catch (error){
			res.status(500).json({
				message: `${error.message} - Internal Server Error`
			});
		}
	}

	static async updateCategory (req,res){
		try{
			const id = req.params.id;
			await category.findByIdAndUpdate(id, req.body);
			res.status(200).json({message: "Category updated successfully."});
		}
		catch (error){
			res.status(500).json({
				message: `${error.message} - Internal Server Error`
			});
		}
	}
	
	static async deleteCategory (req, res){
		try{
			const id = req.params.id; 
			await category.findByIdAndDelete(id);
			res.status(200).json({message: "Category deleted successfully;"});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Internal Server Error`
			});
		}
	}

}

export default categoryController;

