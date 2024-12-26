import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const dataFilePath = path.join(__dirName, "../data/admins.json");

if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
}


export const saveAdmin = (admin) => {
    try {
        const admins = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
        admins.push(admin);
        fs.writeFileSync(dataFilePath, JSON.stringify(admins, null, 2));
    } catch (error) {
        console.log(error);
    }
}

export const getAdmins = () => {
    try {
        const admins = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
        return admins;
    } catch (error) {
        console.log(error);
    }
}


