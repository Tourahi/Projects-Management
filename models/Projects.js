const mongoose = require('mongoose');

// v0.0.1
const ProjectSchema = new mongoose.Schema({
    title: {
    type : String,
    required : true,
    trim    : true
    },
    status: {
      type : String,
      default : 'public',
      enum    : ['public' , 'private']
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
