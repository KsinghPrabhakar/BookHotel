import  Express  from "express";
const router = Express.Router()

// create

router.post("/", async (req, res)=>{
    const newHotel = new Hotel(req.body)
    try {
        
    } catch (error) {
        res.status(500).json(error)
    }
})


export default router 