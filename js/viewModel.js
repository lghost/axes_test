/* Custom binding for lines drawing */
ko.bindingHandlers.connections = {
  update: function(element, valueAccessor) {
    var connection = ko.unwrap(valueAccessor());

    // Using jquery.connections to draw lines between divs
    $('#' + connection.parent.id + ', #' + connection.child.id).connections(
      // Handle parent hidding
      connection.parent.collapsed() ? 'remove' : {
        class: connection.class || 'connection'
      }
    );
  }
};

/* Dirty lines dynamic repositioning 
 * (from http://musclesoft.github.io/jquery-connections/) */
setInterval(function() {
  $('connection').connections('update');
}, 100);

ko.applyBindings(new function () {
  var self = this;

  /* Simple posts sctructure */
  self.posts = {
    genDir: {
      name: 'General director',
      helpers: ['genDirHelper', 'genDirHelper2'],
      subPosts: ['employeeDir', 'ITDir']
    },

    genDirHelper: {
      name: 'Helper of general director'
    },

    genDirHelper2: {
      name: 'Second helper of general director'
    },

    employeeDir: {
      name: 'Employee director',
      subPosts: ['Test1', 'Test2']
    },

    ITDir: {
      name: 'IT director',
      helpers: ['ITDirHelper'],
      subPosts: ['Test3']
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

    post.id = 'ID_' + postName;
    post.helpers = post.helpers ? post.helpers.map(function (helperPostName) {
      return self.posts[helperPostName];
    }) : [];
    post.subPosts = post.subPosts ? post.subPosts.map(function (subPostName) {
      return self.posts[subPostName];
    }) : [];
    post.collapsed = ko.observable();
  }
});
