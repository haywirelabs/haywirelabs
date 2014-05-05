module.exports = function(grunt) {
  grunt.initConfig({
    assemble: {
      options: {
        assets: 'assets',
        data: ['config/config.json']
      },
      project: {
        options: {
          layout: 'layouts/default-layout.hbs',
          partials: 'includes/**/*.hbs'
        },
        src: ['content/*.hbs'],
        dest: 'build'
      }
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['newer:assemble']);
};