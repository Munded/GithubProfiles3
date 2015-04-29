module.exports = function(grunt){

  grunt.initConfig({
    
    jshint:{
      all: ['Gruntfile.js', 'js/*.js', 'test/*.js', 'test/**/*.js']
    },
    watch:{
      files: ['<%= jshint.all %>'],
      tasks: ['jshint']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

  // grunt.loadNpmTasks('grunt-protractor-runner');

  // grunt.registerTask('default', ['protractor']);

};