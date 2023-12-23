# Professional Backend

- This is the professional backend. This series followed by industry standard content.

# What we learned so far from this series?

> ## What is MVC Pattern ?
>
> ### MVC stand for `Module-View-Controller`, its a pattern for software design.Its follow for emphasizes to have actual overview about software business logic & display.This "separation of concerns" provides for a better division of labor and improved maintenance.

### What's the difference between `dev-dependency` and `dependency`?

### devDependency?

     dev-dependency in simple word, we'll use dev-dependency packages through the development process & It will not go to production.

```js
// So how to install any npm package as devDependency? & it's(devDependency) look like into package.json?

// install any packages as devDependency by simply adding a -D flag before the package name. -D flag means devDependency. Or you can install by adding --save-dev. Both of them are work fine

 👉 npm i -D <package_name> // Or
 👉 npm i --save-dev <package_name>


"devDependencies": {    // you will see an property inside package.json like this
    "nodemon": "^3.0.2"
  }

```

### dependency?

     dev-dependency in simple word, we'll use dev-dependency packages through the development process & It will not go to production.
