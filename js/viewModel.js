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
    },

    Test1: {
      name: 'Test 1',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray()
    },

    Test2: {
      name: 'Test 2',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray()
    },

    Test3: {
      name: 'Test 3',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray()
    },

    ITDirHelper: {
      name: 'IT director helper',
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

  self.posts.employeeDir.underPosts([
    self.posts.Test1,
    self.posts.Test2
  ]);

  self.posts.ITDir.underPosts([
    self.posts.Test3
  ]);

  self.posts.ITDir.helpers([
    self.posts.ITDirHelper
  ]);
});
