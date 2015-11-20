ko.applyBindings(new function () {
  var self = this;

  self.posts = {
    genDir: {
      name: 'General director',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray(),
      collapsed: ko.observable()
    },

    genDirHelper: {
      name: 'Helper of general director'
    },

    employeeDir: {
      name: 'Employee director',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray(),
      collapsed: ko.observable()
    },

    ITDir: {
      name: 'IT director',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray(),
      collapsed: ko.observable()
    },

    Test1: {
      name: 'Test 1',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray(),
      collapsed: ko.observable()
    },

    Test2: {
      name: 'Test 2',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray(),
      collapsed: ko.observable()
    },

    Test3: {
      name: 'Test 3',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray(),
      collapsed: ko.observable()
    },

    ITDirHelper: {
      name: 'IT director helper',
      helpers: ko.observableArray(),
      underPosts: ko.observableArray(),
      collapsed: ko.observable()
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

  self.posts.Test3.helpers([
    self.posts.ITDirHelper
  ]);
});
