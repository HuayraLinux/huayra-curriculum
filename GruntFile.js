var grunt = require('grunt');

grunt.initConfig({
  nodewebkit: {
    options: {
        platforms: ['win64','osx64'],
        //platforms: ['osx64'],
        buildDir: './webkitbuilds',
    },  
    src: ['./dist/**/*',
          'node_modules/nedb/**/*',
          'node_modules/moment/**/*',
          'node_modules/temporary/**/*',
          ] 
  },  
});


grunt.loadNpmTasks('grunt-node-webkit-builder');
