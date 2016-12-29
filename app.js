module.exports = {
    install: function(){
        
        // polyfill for Object.create in case browser doesn't support the method
        if(!Object.create){
            Object.prototype.create = function(obj, descriptor){
                function F() {}
                F.prototype = obj;
                var newObj = new F();
                // add obj descriptor if browser supports it and it's passed as arg
                if( Object.defineProperties && descriptor ){
                    Object.defineProperties(newObj, descriptor);
                }
                return newObj;
            }
        }
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
