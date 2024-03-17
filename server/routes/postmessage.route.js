const express = require('express');
const Message = require('../Database/models/messages');

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        // const messageContent = {
        //     message: req.body.message,
        //     name: req.user.name,
        //     userId: req.user._id  
        // };
        const message = new Message({messages: req.body.message});
        await message.save();
        res.status(200).json({
            status: 'success',
            data: {
                message
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message 
        });
    }
});

module.exports = router;
