var yeoman = require('yeoman-generator');
var Base = yeoman.generators.Base;
var Path = require('path');
var fs = require('fs');

function camelCase(name) {
  return name.replace(/-\w/g, function (m) {
    return m.charAt(1).toUpperCase();
  })
}

module.exports = Base.extend({
  constructor: function () {
    Base.apply(this, arguments);
    this.option('port', {type: Number, defaults: '8000'});
    this.option('nrVersion', {type: String, defaults: '0.0.1'});
    this.option('author', {type: String, defaults: ''});
    this.option('pkgName', {type: String, defaults: ''});
    this.option('repoUrl', {type: String, defaults: ''});
  },

  welcome: function () {
    this.appname = this.appname.replace(/\s/g, '-');
    this.AppName = this.appname.charAt(0).toUpperCase() + camelCase(this.appname.slice(1));
    this.log('welcome to generator-tinper-bee: ' + this.appname);
    this.port = this.options.port;
    this.original_repo_url = this.options.repoUrl;
    this.repo_url = this.options.repoUrl||('https://github.com/tinper-bee/'+this.appname);
    this.version = this.options.nrVersion;
    this.author = this.options.author;
    this.packageName = this.options.pkgName || ('bee-' + this.appname);
    // this.tnpm = this.options.tnpm;
  },

  setup: function () {
    var self = this;
    this.src.recurse('.', function (path, root, subdir, filename) {
      var oldPath = path;
      var newPath;


      if (filename === 'gitignore' || filename === 'npmignore') {
        filename = filename === 'gitignore' ? '.gitignore' : '.npmignore';
        newPath = Path.join(Path.dirname(path), filename);
        fs.renameSync(path, newPath);
        path = newPath;
      }
      self.template(path, subdir ? Path.resolve(subdir, filename) : filename);
      if (filename === '.gitignore' || filename === '.npmignore') {
        fs.renameSync(path, oldPath);
      }
    });
    var AppName = this.AppName;
    this.dest.write('src/' + AppName + '.js', [
    "import React, { Component } from 'react'",
    "import ReactDOM from 'react-dom'",

    "class " + AppName + " extends Component {render(){return(<h2>Welcome use tinper-bee</h2> )}}",

    "export default " + AppName + ";"
    ].join('\n'));
    this.dest.write('src/' + AppName + '.scss', '@import "../node_modules/tinper-bee-core/scss/index.scss";');
    this.dest.write('demo/' + AppName + 'Demo.scss', '@import "../src/' + AppName + '.scss";');
    this.dest.write('demo/' + AppName + 'Demo.js', [
      "import " + AppName + "from '../src';",
      "import React, { Component } from 'react'",
      "import ReactDOM from 'react-dom';",
      "class Demo extends Component {render(){return( <" + AppName + "/> )}}",
      "export default Demo;"
    ].join('\n'));
    this.dest.write('demo/index.js', [
    "import Demo from './" + AppName + "Demo';",
    "ReactDOM.render(<Demo/>, document.getElementById('tinperBeeDemo'));"
    ].join('\n'));
  },

  done: function () {
    this.log('done');
  }
});
