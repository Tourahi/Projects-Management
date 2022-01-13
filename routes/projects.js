const express = require('express');
const router  = express.Router();
projectController = require('../controllers/project.controller');

router.post('/',projectController.addProject);
router.delete('/:id',projectController.deleteProject);
router.put('/:id',projectController.updateProject);


module.exports = router;