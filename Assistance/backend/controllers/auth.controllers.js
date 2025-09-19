import genToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// ------------------- SIGNUP -------------------

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password should be at least 6 characters" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const token = await genToken(newUser._id);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
            sameSite: "strict",
            secure: false, // set to true in production with HTTPS
        });

        res.status(201).json({
            message: "User created successfully",
            user: newUser,
        });

    } catch (error) {
        res.status(500).json({ message: "Sign-up error", error: error.message });
    }
};

// ------------------- LOGIN -------------------

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password!" });
        }

        const token = await genToken(existingUser._id);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
            sameSite: "strict",
            secure: false,
        });

        res.status(200).json({
            message: "Login successful",
            user: existingUser,
        });

    } catch (error) {
        res.status(500).json({ message: "Login error", error: error.message });
    }
};

// logout .... login means token save in cookies

export const logout= async (req,res)=>{
    try {
       res.clearCookie("token")
       return res.status(200).json({message:"logout successful"})  
    //    The .json() function in Express expects one argument — usually a JavaScript object — like:
// {key:value} pair
} catch (error) {
        res.status(500).json({ message: "Logout error", error: error.message });
        
    }
}
