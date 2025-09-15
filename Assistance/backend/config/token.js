const genToken = async (userId)=>{
    try {
        const token = await jwt.sign({userId}, process.env.JWT_SECRET,{
            expiresIn: '10d',
        });
        return token;
    } catch (error) {
       console.log("Error in token generation", error); 
    }
}

export default genToken;