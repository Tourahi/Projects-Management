const Project = require('../models/Project');


const projectController = {};

// @desc  Add/Adding a project
// @route POST projects/
projectController.addProject = async (req, res) => {
    try {
        Project.create(req.body);
        res.status(200).json({msg: "New project is added"});
    } catch (error) {
        res.status(400).json({err : error.details[0].message});
    }
}


module.exports = projectController;