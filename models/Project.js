const mongoose = require('mongoose');

// v0.0.1
const ProjectSchema = new mongoose.Schema({
  title: {
    type : String,
    required : true,
    trim    : true
  },
  category: {
    type : String,
    required : true
  },
  priority: {
    type : String,
    required : true
  },
  status: {
    type : String,
    default : 'public',
    enum    : ['public' , 'private']
  },
  startDate: {
    type : Date
  },
  endDate: {
    type : Date
  },
  files : [],
},{
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  },
  timestamps: true
});


module.exports = mongoose.model('Poject' , ProjectSchema);