// foo.js
define([
  'wire',
  'test/context'
], function(wire, contextObj) {
  var Foo = function() {
    wire(contextObj).then(
      function (context) {
        console.log('Wired context programmatically', context)
      },
      function(e) {
        // This is never called -- wiring succeeds
        console.log('Wiring failed', e);
      }
    )
  };

  Foo.prototype.throwError = function() {
    // SUCCESS: Error is thrown when method is called
    throw 'Sometimes I feel like no one is listening to me.';
  };


  return Foo;
}, function() {
  // This is still never called -- ReqJS loads everything fine.
  console.log('ReqJS failed to load Foo module dependencies', arguments);
});
