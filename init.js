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
 module.exports = (app,session,mongoStore,mongoose,flash,bodyParser,morgan,fileUpload,cors) =>
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

  app.use(fileUpload({
    createParentPath: true
  }));

  //encoding && json
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended : true, type: 'application/*+json'}));

  app.use(morgan('tiny'));

  //Connect flash
  app.use(flash());

}
