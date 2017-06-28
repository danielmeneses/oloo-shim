# oloo-shim
This is a really simple shim for working with OLOO (Objects Linked to Other Objects) a Kyle Simpson's JS pattern for handling objects relations by delegating behaviors between objects.
<br>I've created this shim because i think it helps dealing with some problems about the JS language it self, not the pattern. This package provides access to the parent object, something that is not natively available and this way you can extend methods by accessing the parent method, at the same it also grants more readability of the code.
<br><br> For a complete explanation of OLOO pattern you should really go <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch6.md#delegation-theory">here</a>.<br>This is a very usefull pattern and i really advise you to take a look. Also try this shim, is this way i like to work with OLOO and maybe you will too.

<h2>Install</h2>
<pre>npm install oloo-shim --save</pre>
<h2>Complete example</h2>

```javascript
require("oloo-shim").install();

var o1 = {
    firstname: null,
    init: function(firstname){
        this.setFirstname(firstname);
    },
    setFirstname: function(name){
        this.firstname = name;
    }
};

var o2 = Object.oloo( o1, {
    lastname: null,
    init: function(firstname, lastname){
        this.parent.init(firstname); // access parent function with same name
        this.lastname = lastname;
    },
    setLastname: function(name){
        this.lastname = name;
    }
});

var o3 = Object.oloo(o2, {
    getFullname: function(){
        return this.firstname+" "+this.lastname;
    }
});

var o4 = Object.oloo(o3);
o4.init("Daniel", "Meneses");
console.log( o4.getFullname() );
```

<h2>You can actually chain any number of objects:</h2> (thanks to @semkaraman)
```javascript
var o2 = Object.oloo({
    firstname: null,
    init: function(firstname){
        this.setFirstname(firstname);
    },
    setFirstname: function(name){
        this.firstname = name;
    }
}, {
    lastname: null,
    init: function(firstname, lastname){
        this.parent.init(firstname); // access parent function with same name
        this.lastname = lastname;
    },
    setLastname: function(name){
        this.lastname = name;
    }
}, {
    lastname: null,
    init: function(firstname, lastname){
        this.parent.init(firstname); // access parent function with same name
        this.lastname = lastname;
    },
    setLastname: function(name){
        this.lastname = name;
    }
}, {
    getFullname: function(){
        return this.firstname+" "+this.lastname;
    }
});
```
