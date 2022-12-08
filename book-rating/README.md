# BookRating

## Angular NDBX

* Global Angular UI library for the Allianz Digital Brand Experience and Expert
* https://ngx-ndbx.frameworks.allianz.io/guides/getting-started
* Requires access to the Allianz GitHub Enterprise. (not public!)


## Aquila Components

* White label Allianz Angular components
* https://allianz.github.io/ng-aquila/welcome
* public


Breaks :-(
```
npm install @aposin/ng-aquila
```


### Manual way:
https://allianz.github.io/ng-aquila/guides/getting-started

```
npm install @aposin/ng-aquila --force
npm install @angular/cdk
```

### Add base styles

Add the styles to the `angular.json`.
```
"architect": {
  "build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
      // ...
      "styles": [
        // ...
        "node_modules/@aposin/ng-aquila/css/normalize.css",
        "node_modules/@aposin/ng-aquila/themes/aposin.css"
      ]
    }
  }
}
```

Or this file from GitHub 😎
https://ngx-ndbx.frameworks.allianz.io/assets/ndbx.css

Add the background color of the default theme to your styles file:

```
body {
    background: #0f2a3d;
}
```
