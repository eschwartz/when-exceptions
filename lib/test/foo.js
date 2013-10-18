define([
  'wire!test/context'
], function(context) {
  var Foo = function() {
    console.log(context);
  };

  Foo.prototype.bar = function() {
    throw 'A loud error';
  };


  return Foo;
});
