module.exports = {
    install: function(){
        // oloo pattern - tinny shim
        Object.prototype.oloo = function(o1, o2){
            if( o1 && typeof o1 === "object" ){
                // create new object
                var o0 = Object.create(o1);

                // copy props to the created object
                if( o2 && typeof o2 === "object" ){
                    // copy all props to the brand new obj
                    for( var key in o2 ){
                        if(o2.hasOwnProperty(key)){
                            o0[key] = o2[key];
                        }
                    }
                }
                // set parent reference
                o0.parent = o1;
                return o0;
            }

            return null;
        }
    },
    uninstall: function(){
        if( Object.prototype.hasOwnProperty("oloo") ){
            delete Object.prototype.oloo;
        }
    }
}
