# Apartment Rental App

Your goal in this application is to use Object-Oriented Programming (OOP) to model relationships between people, properties, and units.

## Objects & Relationships

We have five types of objects in this application:

* `Manager`
* `Tenant`
* `Reference`
* `Property`
* `Unit`

#### Manager - Relationships

A `manager` has many `properties`.

#### Tenant - Relationships

A `tenant` has many `references`.

#### Property - Relationships

A `property` has many `units`. A `property` should always have a `manager` before `tenants` can move in. A `tenant` should have two `references` before they can move in to a `unit`.

#### Unit - Relationships

A `unit` belongs to one `property` and has one `tenant`.

## Getting Started

To get started on this app, break the problem into smaller pieces. We suggest choosing one constructor to start with (maybe `Manager` or `Tenant`), then implementing that constructor's attributes, prototype methods, and relationships.

## Testing Your App

To test one of your constructors, paste it into a snippet in the Chrome Dev Tools. Also paste any prototype methods you set up for your constructor. **Note:** You may want to paste in constructor functions for multiple objects since your objects interact with each other (i.e. `Manager` and `Property`).

* Paste your `Manager` constructor into a snippet.

```js
function Manager(name, contact) {
  // set name and contact

  this.properties = [];
}
```

* Create a new instance of `Manager`

```js
var john = new Manager("John Doe", "123-4567");
john.contact
123-4567
```

You can do the same thing to test `Tenant`, `Reference`, `Property`, and `Unit`.

## Extra Challenge

When implementing relationships in this app (i.e. adding a `property` to a `manager`'s list of properties), think about how you could check to make sure the object you're adding is the type of object you're expecting. You wouldn't want to add an instance of `Tenant` to a manager's list of properties! Look at the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof" target="_blank">instanceof</a> operator, and use it to perform validations on objects before adding them to a collection.
