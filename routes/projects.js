const express = require('express');
const router  = express.Router();
projectController = require('../controllers/project.controller');

router.post('/',projectController.addProject);
router.get('/all',projectController.findAll);
router.get('/p',projectController.findByProperty);
router.get('/count',projectController.count);
router.delete('/:id',projectController.deleteProject);
router.put('/:id',projectController.updateProject);
router.get('/:id',projectController.findOne);
router.delete('/files/:id',projectController.dropProjectFiles);
router.get('/files/:id',projectController.getProjectFiles);
router.get('/files/:id/:name',projectController.downloadFile);


module.exports = router;