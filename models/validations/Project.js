const Joi = require('joi');
const moment = require('moment')

const ProjectValidationSchema = Joi.object({
    title     : Joi.string().alphanum().required(),
    category  : Joi.string().alphanum().required(),
    priority  : Joi.string().alphanum().required(),
    status    : Joi.string().alphanum().required(),
    startDate : Joi.date(),
    endDate   : Joi.date(),
    files: Joi.array()
});


module.exports = ProjectValidationSchema