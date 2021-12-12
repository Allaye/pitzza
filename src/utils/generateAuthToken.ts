import jwt from 'jsonwebtoken';

const generateToken = async (userId: string, token_secret: string) => {
    try{
        return jwt.sign({ userId }, token_secret);
    } catch (err) {
        return err;
    }
}

export = generateToken;