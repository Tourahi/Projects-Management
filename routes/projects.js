const express = require('express');
const router  = express.Router();
projectController = require('../controllers/project.controller');

router.post('/',projectController.addProject);
router.get('/all',projectController.findAll);
router.get('/p',projectController.findByProperty);
router.delete('/:id',projectController.deleteProject);
router.put('/:id',projectController.updateProject);
router.get('/:id',projectController.findOne);



module.exports = router;