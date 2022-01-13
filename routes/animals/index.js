const express = require('express');

const router = express.Router(); 
router.get('/', (req,res) => {
    res.json(['john' , 'tom']);
});

module.exports = router;
