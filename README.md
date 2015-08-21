# oloo-shim
This is a really simple shim for working with oloo but in more understandble way. It provides access to the parent object, this way you can name methods the same if you like and this grants more readability of the code.

<h2>Intall</h2>
<pre>npm install oloo-shim --save</pre>
<h2>Complete example</h2>
<pre>
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

</pre>
