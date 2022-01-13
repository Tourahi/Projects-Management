const Project = require('../Project');
const ProjectValidationSchema = require('../validations/Project');
const _ = require('lodash');
const moment = require('moment')

Projectdb = {}

getFiles = (files) => {
  let data = []; 

  _.forEach(_.keysIn(files), (key) => {
      let file = files[key];
      
      //move photo to uploads directory
      file.mv('./uploads/' + file.name);

      data.push({
          name: file.name,
          mimetype: file.mimetype,
          size: file.size
      });
  });
  return data;
}

Projectdb.addOne = async function(req) {
  try{
    let data = getFiles(req.files); 

    req.body.files = data;
    req.body.startDate = moment(req.body.startDate).format('YYYY-MM-DD');
    req.body.endDate = moment(req.body.endDate).format('YYYY-MM-DD');

    const {error} = ProjectValidationSchema.validate(req.body);
    if(error) return {"err": error};

    project = await Project.create(req.body);
    delete project.files;
    delete project._id;
    return project;
  }catch (e){
    return {"err": e};
  }
}

Projectdb.updateOne = async function(req) {
  try{
    let data = getFiles(req.files);
    project = await Project.findById({_id : req.params.id}).lean();
    if(!project) return {"err": "Project does not exist."};
    req.body.files = [...data, ...project.files];

    const {error} = ProjectValidationSchema.validate(req.body);
    if(error) return {"err": error};

    project = await Project.findOneAndUpdate(
      { _id : req.params.id },
      req.body,
      {
        new : true,
        runValidators : true,
      });
    delete project.files;
    delete project._id;
    return project;
  }catch(e){
    return {"err": e};
  }
}

Projectdb.deleteOne = async function(req) {
  try{
    project = await Project.deleteOne({_id : req.params.id});
    delete project.files
    delete project._id
    return project;
  }catch (e){
    return {"err": e};
  }
}

module.exports = Projectdb
