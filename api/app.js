// import express from 'express'; 
// const  app = express();

// app.use("/api/posts",router);

// // app.use("/api/akash", (req,res)=>{
    // //     res.send('it works, !!!')
    // // })

// app.listen(8800, () => {
//     console.log("Server is running")
// })






////phela hmna cd api kenA ha  then npm ini -y , npm install express , node app.js ,
// nodemon app.js eske help sa pura server fir sa restart hota ha 
// but  console-ninja node --watch app.js  -->in which listen changes created by user 
// 




import router from './routes/post.route.js';
import express from 'express';

import  cors from "cors"
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.route.js';
import postRouter from './routes/post.route.js';
import testRoute from './routes/test.route.js'
import userRoute from './routes/user.route.js';


const app = express(); // ya es leya keya ha kyu ke hma data json ke form ma chaiya.
app.use(cors({origin: process.env.CLIENT_URL , credentials: true}));
app.use(express.json())
app.use(cookieParser())
app.use("/api/posts",postRouter);
app.use("/api/auth",authRouter);
app.use("/api/test",testRoute);
app.use("/api/users", userRoute);


app.use("/api/posts", router);

app.listen(8800, () => {
    console.log("Server is running on port 8800");
});
