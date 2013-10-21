// foo.js
define([
  'wire',
  'test/context'
], function(wire, contextObj) {
  var Foo = function() {
    wire(contextObj).then(
      function (context) {
        // This is called -- wiring succeeds
        console.log('Wired context programmatically', context)

        // -------------
        // FAIL: This error is never thrown.
        // -------------
        throw Error('Ruh-roh...');
      },
      function(e) {
        // This is never called -- wiring succeeds
        console.log('Wiring failed', e);
      }
    )
  };


  return Foo;
}, function() {
  // This is still never called -- ReqJS loads everything fine.
  console.log('ReqJS failed to load Foo module dependencies', arguments);
});
