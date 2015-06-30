var Manager = require('./people/manager'),
    Reference = require('./people/reference'),
    Tenant = require('./people/tenant');

var Property = require('./property');
    Unit = require('./unit');

// start apartment module to export later
var App = {};

// add people to module
App.Manager = Manager;
App.Reference = Reference;
App.Tenant = Tenant;

// add property and unit to module
App.Property = Property;
App.Unit = Unit;

module.exports = App;