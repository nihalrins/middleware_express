// import express from 'express';
// const app=express();

// function myMiddleware(req,res,next){
//      console.log("Middleware is running");
//      next();

// }

// app.use(myMiddleware);

// app.get('/',(req,res)=>{
//      res.send("Homepage")
// })

// app.get('/about',(req,res)=>{
//     res.send("About page");

// })

// app.listen(3000,()=>{
//      console.log("Server running at http://localhost:3000")
// })


//1 
// import express from 'express';
// const app=express();
// app.use((req,res,next)=>{
//      console.log("Request recieved:",req.method, req.url);
//      next();

// })

// app.get('/',(req,res)=>{
//      res.send("Home")
// })

// app.get('/contact',(req,res)=>{
//      res.send("contact")
// });

// app.listen(3000,()=>{
//      console.log("Server running at http://localhost:3000")
// })

// // Middle ware for a specific path

// app.use('/')

// import express from 'express';
// const app=express();

// app.use((req,res,next)=>{
//      console.log("Middleware 1")
//      next();

// });

// app.use((req,res)=>{
//      console.log("Middleware2")
//      next();
// });

// app.use((req,res)=>{
//      res.send("Home")
// })


// app.get('/contact',(req,res)=>{
//      res.send("contact")
// })

// app.listen(3000,()=>{
//      console.log("Server running at http://localhost:3000")
// })

// import express from 'express';
// const app=express();

// app.use(express.urlencoded({extended:true}));


// app.use(express.static('public'));

// app.post('/register',(req,res)=>{
//      const{username,email,password}=req.body;
//      console.log("Username:",username);
//      console.log("Email:",email);
//      console.log("Passwwor:",password);
//      res.send(`
//           <h1>Registration Succesful</h2>
//           <p>Username:${username}</p>
//           <p>Email:${email}</p>
//           `)
// });
// app.listen(3000),()=>{
//      console.log("Server running at http://localhost:3000")
// }


// 


// import express from 'express';
// import adminRouter from './adminRouter.js';


// const app=express();

// app.use('/admin',adminRouter);

// app.listen(3000,()=>{
//      console.log("Server running at http://localhost:3000")
// })


 import express from 'express';

const app= express();

app.get('/', (req, res, next) => {
  const error = new Error('Something went wrong');
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send('Internal server Error');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});



