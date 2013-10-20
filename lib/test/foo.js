// foo.js
define([
  'wire!test/context'
], function(wiredContext) {
  console.log('ReqJS loaded Foo module and depency with wired context', wiredContext);

  var Foo = function() {
  };

  Foo.prototype.throwError = function() {
    throw 'Sometimes I feel like no one is listening to me.';
  };


  return Foo;
}, function() {
  console.log('ReqJS failed to load Foo module dependencies', arguments);
});
