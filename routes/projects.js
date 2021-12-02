const express = require('express');
const router  = express.Router();
projectController = require('../controllers/project.controller');

router.post('/',projectController.addProject);


module.exports = router;