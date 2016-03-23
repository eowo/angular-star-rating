# angular-star-rating
Simple star rating directive for AngularJS

# Demo
[http://eowo.github.io/angular-star-rating](http://eowo.github.io/angular-star-rating)

# Install
You can download all necessary angular-star-rating files manually or install it with bower:

```
$ bower install --save angular-star-rating
```

# Dependencies
This directive uses [Material icons](https://design.google.com/icons/).
The easiest way to set up icon fonts:

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

# Load
To use the directive, include the angular-star-rating's javascript file in your web page:

```
<script src="angular-star-rating.js"></script>
```

# Add module dependency
```
angular.module('yourApp', ['angular-star-rating']);
```

# Directive attributes
- **read-only** - {Boolean} (defaults to false)
- **size** - {Number} (defaults to 5)

# Usage

Read-only mode:
```
<rating read-only="true" ng-model="modelVar"></rating>
```

Validation:
```
<rating ng-model="modelVar" ng-required="true"></rating>
```

Size:
```
<rating size="10" ng-model="modelVar"></rating>
```
