import genToken from "../config/token";
import user from "../models/user.model";
import bcrypt from "bcryptjs";


const signUp=  async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const existingUser = await user.findOne({email});
        if(existingEmail){
            return res.status(400).json({message:"Email already exists"});
        }

// length of password should be more than 6
        if(password.length < 6){
            return res.status(400).json({message:"Password should be at least 6 characters"});
        }
// hash the password baby
        const hashedPassword = await bcrypt.hash(password, 10);

        const Newuser =await user.create({
            name, password:hashedPassword, email

        })

        // generate token kiya
        const token=await genToken(Newuser._id);

        // pass token to cookies
        res.cookie("token",token, {
            httpOnly:true,
            maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days,
            sameSite:"strict"  ,
            secure:false
        })

        res.status(201).json({message:"User created successfully", Newuser});

    } catch (error) {
        res.status(500).json({message:"sign-up error", error});
    }
}


const Login=  async (req, res) => {
    try {
        const { email, password} = req.body;
        const user = await user.findOne({email});
        if(!user){
            return res.status(400).json({message:"user not exists"});
        }

// length of password should be more than 6
        if(password.length < 6){
            return res.status(400).json({message:"Password should be at least 6 characters"});
        }
// hash the password baby
        const hashedPassword = await bcrypt.hash(password, 10);

        const Newuser =await user.create({
            name, password:hashedPassword, email

        })

        // generate token kiya
        const token=await genToken(Newuser._id);

        // pass token to cookies
        res.cookie("token",token, {
            httpOnly:true,
            maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days,
            sameSite:"strict"  ,
            secure:false
        })

        res.status(201).json({message:"User created successfully", Newuser});

    } catch (error) {
        res.status(500).json({message:"sign-up error", error});
    }
}