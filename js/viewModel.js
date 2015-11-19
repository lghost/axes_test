ko.applyBindings(new function () {
  var self = this;

  self.posts = {
    genDir: {
      name: 'General director',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray()
    },

    genDirHelper: {
      name: 'Helper of general director'
    },

    employeeDir: {
      name: 'Employee director',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray()
    },

    ITDir: {
      name: 'IT director',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray()
    }
  };

  self.posts.genDir.helpers([
    self.posts.genDirHelper
  ]);

  self.posts.genDir.underPosts([
    self.posts.employeeDir,
    self.posts.ITDir
  ]);

});
