import { NodeMailgun } from 'ts-mailgun';
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname ,"../../.env") });

let a = path.join(__dirname, "../../.env");
console.log(a);
console.log(__filename)
console.log(process.env.DOMAIN);


const mailer = new NodeMailgun();

export const sendMail = async (data: any, email: string, subject: string) => {
    mailer.apiKey = process.env.MAILGUN_API_KEY as string;
    mailer.domain = process.env.DOMAIN as string;
    mailer.fromEmail = process.env.FROM_EMAIL as string;
    mailer.fromTitle = "Pitzza";

    mailer.init();
    try {
        const receipt = `<h4> you ordered ${data.foodname} <br>
        quantity: ${data.quantity} <br>
        Total: ${data.total} <br>
        Price: ${data.price}</h4>
        comments: ${data.comments}`;
        const response = await mailer.send(email, subject, receipt);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// const data = {
//     subject: "Pitzza",
//     name: "Rice",
//     quantity: 2,
//     total: 200,
//     price: 5
// }

// sendMail(data, "blexstore@gmail.com");