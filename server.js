import express from "express";
import AdminRoutes from "./src/routes/admin.js"
import DishesRoutes from "./src/routes/dish.js"
import cors from "cors";


const app = express();
const PORT = 9002;




app.use(express.json());
// app.use("/")
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.get("/", (req, res) => {
    res.json({msg: "Hello World!"});
});
app.use("/admin", AdminRoutes);
app.use("/admin", DishesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})