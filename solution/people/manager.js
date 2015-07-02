function Manager(name, contact) {
  this.name = name;
  this.contact = contact;
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property to properties array
  this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove property
  var propertyIndex = this.properties.indexOf(property);
  this.properties.splice(propertyIndex, 1);
};