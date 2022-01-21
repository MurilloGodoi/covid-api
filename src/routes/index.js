const CovidRoute = require('./CovidRoute');

module.exports = (app) => {
  app.use(
    CovidRoute
  );
};
