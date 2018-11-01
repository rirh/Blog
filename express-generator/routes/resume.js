const express = require('express');
const router = express.Router();
const Resume = require('../lib/schema/resume');
const encode = require('../util/enbody');

// 标语范文
/* GET index listing. */

router.get('/', async (req, res, next) => {
    const resume = new Resume({});
    const find = async () => {
        const findData = await Resume.find();
        if (findData.length) {
            return findData;
        } else {
            await resume.save();
            await find();
        }
    };
    const data = await find();

    if (data.length) {
        res.json(encode(true, data));
    } else {
        res.status(500).json(encode(false));
    }
});

module.exports = router;
