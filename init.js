"use strict";

const path = require('path');


/**
 * Bind the middlewares to the app object.
 *
 * @param {object} app app (express object)
 * @param {object} session session
 * @param {object} mongoStore connect-mongo(session)
 * @param {object} mongoose mongoose
 * @param {object} passport passport
 * @param {object} flash flash
 * @param {object} express express
 * @param {object} morgan morgan
 * @param {object} methodOverride methodOverride
 * @param {object} fileUpload fileUpload
 */
 module.exports = (app,session,mongoStore,mongoose,flash,express,morgan,fileUpload) =>
{
  // Sessions
  app.use(
    session({
      secret: 'keyboard cat',
      resave: true,
      saveUninitialized: true,
      store: new mongoStore({ mongooseConnection: mongoose.connection }),
    })
  );

  //encoding && json
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(morgan('tiny'));

  //Connect flash
  app.use(flash());

  //Static folders
  //app.use(express.static(path.join(__dirname , 'public')));

  //fileUpload
//   app.use(fileUpload({
//     createParentPath: true
//   }));
}
