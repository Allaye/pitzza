import app from './app';
import {connect} from './db/mongoose';
// require("./db/mongoose");

const connection = connect();

const PORT: number = Number(process.env.PORT) || 3000;



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});