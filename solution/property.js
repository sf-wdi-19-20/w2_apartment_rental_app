function Property(address) {
  this.address = address;
  this.units = [];
}

Property.prototype.setManager = function(manager) {
  // set property manager
  this.manager = manager;
};

Property.prototype.getManager = function() {
  // return property manager
  return this.manager;
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant to unit, but first check to make sure
  // property has a manager and tenant has 2 references
  if (unit.available() && this.manager !== null && newTenant.references.length >= 2) {
    unit.tenant = newTenant;
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
  if (unit.tenant === tenantLeaving) {
    unit.tenant = null;
  }
};

Property.prototype.availableUnits = function(){
  // return num of units available
  var availUnits = 0;
  for (var i = 0; i < this.units.length; i += 1) {
    if (this.units[i].available()) {
      availUnits += 1;
    }
  }
  return availUnits;
};

Property.prototype.rentedUnits = function(){
  // return num of rented units
  var rentedUnits = 0;
  for (var i = 0; i < this.units.length; i += 1) {
    if (!(this.units[i].available())) {
      rentedUnits += 1;
    }
  }
  return rentedUnits;
};