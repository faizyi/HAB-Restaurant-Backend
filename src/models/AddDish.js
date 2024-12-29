import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)

const dataFilePath = path.join(__dirName, "../data/dish.json");

if(!fs.existsSync(dataFilePath)){
    try {
        fs.writeFile(dataFilePath, JSON.stringify([]))
    } catch (error) {
        console.error("Error initializing the dish file:", err);
    }
}


export const saveDish = (dish)=>{
    try {
        const dishes = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"))
        dishes.push(dish);
        fs.writeFileSync(dataFilePath, JSON.stringify(dishes, null, 2))
    } catch (error) {
        console.error('Error saving dish:', error);
    }
}


export const getAllDishes = ()=>{
    try {
        const dishes = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"))
        return dishes
    } catch (error) {
        console.error('Error reading dishes:', error);
        return [];
    }
}