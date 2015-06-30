### NOTE TO TEAM:

This is not a lab. I'm thinking the students can pair-program on this exercise for Wednesday afternoon's module to get practice on relationships in OOP.

==========

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

You can use the node REPL (in your terminal) to test your app. If you don't have node installed yet, you can <a href="https://nodejs.org/download" target="_blank">download it here</a>.

* Open the node REPL and `require('./main.js')`

```js
$ node
> var app = require('./main.js')
```

* Create a `Manager` object.

```js
> var Manager = app.Manager;
> var john = new Manager("John Doe", "123-4567");
> john.contact
"123-4567"
```

You can do the same thing to test `app.Tenant`, `app.Reference`, `app.Property`, and `app.Unit`.
