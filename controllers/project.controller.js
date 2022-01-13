const Projectdb = require('../models/api/Project.js');


const projectController = {};


// @desc  Add/Adding a project
// @route POST project/
projectController.addProject = async (req, res) => {
    try {
        req.body = JSON.parse(req.body["body"]);
        prj = await Projectdb.addOne(req);
        if(prj.err) return res.status(400).json({err : prj.err});
        res.status(200).json({Project: prj});
    } catch (error) {
        res.status(400).json({err : error.details[0].message});
    }
}

// @desc  Delete/deletting a project
// @route DELETE project/:id
projectController.deleteProject = async (req, res) => {
    try {
        prj = await Projectdb.deleteOne(req);
        if(prj.err) return res.status(400).json({err : prj.err});
        res.status(200).json({Project: prj});
    }catch (error) {
        res.status(400).json({err : error.details[0].message});
    }
}

// @desc  Update/updatting a project
// @route PUT project/:id
projectController.updateProject = async (req, res) => {
    try {
        req.body = JSON.parse(req.body["body"]);
        prj = await Projectdb.updateOne(req);
        if(prj.err) return res.status(400).json({err : prj.err});
        res.status(200).json({Project: prj});
    }catch (error) {
        res.status(400).json({err : error.details[0].message});
    }
}


// @desc  Find/finding a project
// @route GET project/:id
projectController.findOne = async (req, res) => {
    try {
        prj = await Projectdb.findOne(req);
        if(prj.err) return res.status(400).json({err : prj.err});
        res.status(200).json({Project: prj});
    }catch (error) {
        res.status(400).json({err : error});
    }
}

// @desc  Find/finding all projects
// @route GET project/all
projectController.findAll = async (req, res) => {
    try {
        prj = await Projectdb.findAll(req);
        if(prj.err) return res.status(400).json({err : prj.err});
        res.status(200).json({Projects: prj});
    }catch (error) {
        res.status(400).json({err : error.details[0].message});
    }
}

// @desc  Find/finding all projects
// @route GET project/?p
projectController.findByProperty = async (req, res) => {
    try {
        prj = await Projectdb.findByProperty(req);
        if(prj.err) return res.status(400).json({err : prj.err});
        res.status(200).json({Projects: prj});
    }catch (error) {
        res.status(400).json({err : error.details[0].message});
    }
}

module.exports = projectController;