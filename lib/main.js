require.config({
  packages: [
    // Configure wire packages
    // See https://github.com/pieter-vanderwerff/backbone-require-wire
    // for an example of using ReqJs with Wire
    {
      name: 'wire',
      location: 'vendor/wire',
      main: 'wire'
    },
    {
      name: 'when',
      location: 'vendor/when',
      main: 'when'
    },
    {
      name: 'meld',
      location: 'vendor/meld',
      main: 'meld'
    }
  ]
});

require(['test/foo'], function(Foo) {
  var foo = new Foo();
}, function() {
  // This is never called -- ReqJS AMD loading succeeds
  console.log('RequireJS failed to load main.js dependencies', arguments);
});
