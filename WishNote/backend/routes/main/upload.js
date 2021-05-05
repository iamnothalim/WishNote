const express = require('express');

const multer = require('multer');
const path = require('path');

const router = express.Router();

// multer setting
// const upload = multer({
//     storage: multer.diskStorage({
//         // set a localstorage destination
//         destination: (req, file, cb) => {
//             cb(null, 'uploads/');
//         },
//         // convert a file name
//         filename: (req, file, cb) => {
//             cb(null, new Date().valueOf() + path.extname(file.originalname));
//         },
//     }),
// });

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


// router.post('/', upload.single('img'),(req,res)=>{
//     console.log('/api/upload 라우팅 호출');
//     console.log(req.file.filename);
//     console.log('이게 바디',req.user);
//     console.log(req.file.path);
//     res.json({
//         "name": req.file.filename,
//         "path": req.file.path,
//         "status": "done",
//     })
// } );
router.post('/',upload.single('img'),(req,res)=>{
    console.log('/api/upload 라우팅 호출');
    try {
        res.json({
            "status": "done",
    })
    } catch (e) {
        console.log(e)
    }
    
} );
module.exports = router;