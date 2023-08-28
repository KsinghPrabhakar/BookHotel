import  Express  from "express";
const router = Express.Router()

router.get("/", (req, res)=>{
    res.send("helllo from auth")
})


export default router 