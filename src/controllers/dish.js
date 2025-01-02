import { v4 as uuidv4 } from "uuid";
import { getAllDishes, saveDish } from "../models/AddDish.js";
export const addDish = (req, res)=>{
    try {
        const {dishName, dishDisc, dishPrice} = req.body;
        const file = req.file;
        if(!file){
            return res.status(400).json({ msg: "No file uploaded." });
        }
        const id = uuidv4();
        const newDish = {id, dishName, dishDisc, dishPrice, dishImage: file.filename};
        saveDish(newDish);
        res.status(201).json({ msg: "Dish added successfully", dish: newDish });
    } catch (error) {
        res.status(500).json({ msg: "Error adding dish", error: error.message });
    }
}

export const getDishes = (req, res)=>{
    try {
        const dishes = getAllDishes()
        res.status(200).json({ msg: "Dishes fetched successfully", dishes });
    } catch (error) {
        res.status(500).json({ msg: "Error fetching dishes", error: error.message });
    }
}