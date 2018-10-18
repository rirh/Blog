var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path').resolve(__dirname, '..')



/* post users listing. */
router.get('/image', async (req, res, next) => {
    fs.readFile(`${path}/public/images/${req.query.name}`, 'binary', (err, file) => {
        if (err) {
            console.log(err)
        } else {
            res.writeHead(200, {
                'Content-Type': 'image/jpeg'
            })
            res.write(file, 'binary')
            res.end()
        }
    })


})

module.exports = router;
