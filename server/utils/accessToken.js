import jwt from "jsonwebtoken";

const accessToken = (id, isAdmin) => {
    return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
        expiresIn: "3d",
    });
};

export default accessToken;
