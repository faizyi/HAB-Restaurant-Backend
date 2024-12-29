

export const addDish = (req, res)=>{
    try {
        // const { dishName, dishDisc, dishPrice } = req.body;
        const imageFile = req.file;
        console.log(req.body)
        console.log(imageFile)
        // if(!imageFile) return res.status(400).json({msg: "Image is required"})
    } catch (error) {
        res.status(500).json({ msg: "Error adding dish", error: error.message });
    }
}