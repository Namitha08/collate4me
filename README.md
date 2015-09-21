# Collate4me


## Description

Collate4me brings services from all cab companies in india under one roof!
Now, we need not open every app to check for nearest cab for all cab companies. :)
It is a weekend project made for the only purpose of learning. Things I used: AngularJS, ui-router, MongoDB, mongoose, & Nodejs.
## Responsive, bloat free, bootstrap powered single page applicaiton.

Check out the live example @ collate4me.herokuapp.com (at the time of development, will update a permanent one soon)

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

### Installation
1. Clone the repository: `git clone https://github.com/stack-amehta/collate4me.git`
2. Install the dependencies: `npm install`.
3. Run the gulp default task: `gulp`. 
This will build any changes made automatically, and also run a live reload server on [http://localhost:8888](http://localhost:8888).

Ensure your preferred web server points towards the `dist` directory.

### Development
Continue developing the dashboard further by editing the `src` directory. With the `gulp` command, any file changes made will automatically be compiled into the specific location within the `dist` directory.

#### Modules & Packages
By default, Collate4me includes [`ui.bootstrap`](http://angular-ui.github.io/bootstrap/), [`ui.router`](https://github.com/angular-ui/ui-router) and [`ngCookies`](https://docs.angularjs.org/api/ngCookies). 

If you'd like to include any additional modules/packages not included with Collate4me already, add them to your `bower.json` file and then update the `app/index.html` file, to include them in the minified distribution output.

## Credits
* [Ankush Mehta](https://github.com/stack-amehta)