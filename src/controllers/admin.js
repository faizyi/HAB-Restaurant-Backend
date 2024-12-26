import {saveAdmin, getAdmins} from "../models/admin.js";
export const adminSignup = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        const newAdmin = {name, email, password};
        saveAdmin(newAdmin);
        res.status(201).json({ msg: "Admin created successfully", admin: newAdmin });
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const adminLogin = async(req, res) => {
    try {
        const {email, password} = req.body;
        const admin = await getAdmins();
        const adminEmail = admin.find((a) => a.email === email);
        if (!adminEmail) {
            return res.status(401).json({ msg: "Invalid Credentials" });
        }
        if (adminEmail.password !== password) {
            return res.status(401).json({ msg: "Invalid Credentials" });
        }
        res.status(200).json({ msg: "Login successful", admin: adminEmail });
    } catch (error) {
        res.status(500).json({msg: error.message});
        }
    }