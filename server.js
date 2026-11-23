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


import express from 'express';

const app=express();
app.use((req,res,next)=>{
     req.username="Anu";
     next();
})

app.get('/',(req,res)=>{
     res.ssend(`Welcome ${req.username}`);

})

app.listen(3000,()=>{
     console.log("Server running at http://localhost:3000 ")
})



