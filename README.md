# Error Handling with WireJs

---


See Wire JS [issue #137](https://github.com/cujojs/wire/issues/137)

---

I'm running into an into an issue where thrown errors are being caught -- and seemingly released into the ether -- within the Wire JS Promise library (`when`).

It took a few tries to reproduce, as the original application was fairly complex. But I have a sample now up at [eschwartz/when-exceptions](https://github.com/eschwartz/when-exceptions). Run `index.html` and check your console -- expected behavior is to have an error thrown to the console.

The sample is dead simple -- a `Foo` module loads in a wired context. The `Foo#bar` method throws an error. The application pulls in `Foo` with RequireJS, instantiates it, and invokes the `bar` method. 

But the error gets caught inside of the `when` library, here:

```javascript
// when.js line 408
function near(proxy, inspect) {
		return new Promise(function (type, args, resolve) {
			try {
				resolve(proxy[type].apply(proxy, args));
			} catch(e) {
				resolve(rejected(e));  // Oh no... my error!!!
			}
		}, inspect);
	}
```

I am using the most recent versions of wire, when, and meld.


What's happening here? I wouldn't expect errors in this situation to be caught. Can I hook into the promise being referenced in the `near` method? Can I avoid this situation entirely, and let my errors be thrown?


I'm having a lot of fun with this library, so I hope this can be fixed, or worked-around. Thanks!