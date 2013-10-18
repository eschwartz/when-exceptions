define([
  'wire!test/context'
], function(context) {
  var Foo = function() {
    console.log(context);
  };

  Foo.prototype.bar = function() {
    console.log('about to throw an error.....')

    throw 'Sometimes I feel like no one is listening to me.';
  };


  return Foo;
});
