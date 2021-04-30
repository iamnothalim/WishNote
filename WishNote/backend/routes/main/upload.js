const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// multer setting
const upload = multer({
    storage: multer.diskStorage({
        // set a localstorage destination
        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },
        // convert a file name
        filename: (req, file, cb) => {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        },
    }),
});

router.post('/', upload.single('img'),(req,res)=>{
    console.log('/api/upload 라우팅 호출');
    console.log(req.file.filename);
    console.log(req.file.path);
    //fs.unlink(req.file.path);
    res.send({
        "name": req.file.filename,
        "status": "done",
    })

} );

module.exports = router;