ko.applyBindings(new function () {
  var self = this;

  /* Simple posts sctructure */
  self.posts = {
    genDir: {
      name: 'General director',
      helpers: ['genDirHelper'],
      underPosts: ['employeeDir', 'ITDir']
    },

    genDirHelper: {
      name: 'Helper of general director'
    },

    employeeDir: {
      name: 'Employee director',
      underPosts: ['Test1', 'Test2']
    },

    ITDir: {
      name: 'IT director',
      helpers: ['ITDirHelper'],
      underPosts: ['Test3']
    },

    Test1: {
      name: 'Test 1'
    },

    Test2: {
      name: 'Test 2'
    },

    Test3: {
      name: 'Test 3'
    },

    ITDirHelper: {
      name: 'Helper of IT director'
    }
  };

  /* Data preparing */
  for (var postName in self.posts) {
    var post = self.posts[postName];

    post.helpers = ko.observableArray(post.helpers ? post.helpers.map(function (helperPostName) {
      return self.posts[helperPostName];
    }) : []);
    post.underPosts = ko.observableArray(post.underPosts ? post.underPosts.map(function (underPostName) {
      return self.posts[underPostName];
    }) : []);
    post.collapsed = ko.observable();
  }
});
