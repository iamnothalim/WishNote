const express = require('express');

const multer = require('multer');

const router = express.Router();
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


router.post('/',upload.single('img'),(req,res)=>{
    try {
        res.json({
            "status": "done",
    })
    } catch (e) {
        console.log(e)
    }
    
} );
module.exports = router;