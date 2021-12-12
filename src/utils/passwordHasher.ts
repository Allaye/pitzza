import bcrypt from 'bcrypt';


const hashPassword = async(password: string, salt: number = 10): Promise<string> => {
    try {
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw error;
    }
};

export = hashPassword;