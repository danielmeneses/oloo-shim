require("./app.js").install();

var o1 = {
    firstname: null,
    init: function(firstname){
        this.setFirstname(firstname);
        return this;
    },
    setFirstname: function(name){
        this.firstname = name;
    }
};

var o2 = Object.oloo( o1, {
    lastname: null,
    init: function(firstname, lastname){
        this.parent.init(firstname); // access parent with same name
        this.lastname = lastname;
        return this;
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
