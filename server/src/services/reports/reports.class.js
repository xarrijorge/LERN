const { Service } = require('feathers-mongodb');

exports.Reports = class Reports extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('reports');
    });
  }
};
