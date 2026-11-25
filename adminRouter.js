import express from 'express';

const router=express.Router();

router.use((req,res,next)=>{
    console.log('Admin router middleware');
    next();
});

router.get('/dashboard',(req,res)=>{
    res.send("Admin profile");

});

router.get('/profile',(req,res)=>{
    res.send("Admin profile");

});

export default router;