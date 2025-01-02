import express from "express";
import AdminRoutes from "./src/routes/admin.js"
import DishesRoutes from "./src/routes/dish.js"
import cors from "cors";

import path from "path"
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);


const app = express();
const PORT = 9002;



app.use(express.json());
app.use("/public/uploads", express.static(path.join(__dirName, "public/uploads")));
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "https://hab-restaurant.vercel.app/",
    credentials: true, 
}));

app.get("/", (req, res) => {
    res.json({msg: "Hello World!"});
});
app.use("/admin", AdminRoutes);
app.use("/admin", DishesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})