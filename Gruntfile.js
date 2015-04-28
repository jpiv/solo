module.exports = function(grunt) {

  grunt.initConfig({
    
    watch: {
      options: {},
      files: ["app/views/*.js", "app/models/*.js"],
      tasks: ['concat','uglify']
    },

    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src: ["app/views/*.js", "app/models/*.js"],
        dest: "app/build/built.js"
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      target: {
        files: {
          'app/build/built.min.js': "app/built.js"
        }
      }
    }

  });

  // Don't worry about this one - it just works. You'll see when you run `grunt`.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-notify');

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};
