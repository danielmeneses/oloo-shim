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
        Object.prototype.oloo = function() {
            if(!arguments) return null;
            var objArgs = arguments,
                a = arguments[0];
            var o = Object.create(a);
            if(1 < arguments.length){
                var n = arguments[1];
                for(var key in n){
                    if(n.hasOwnProperty(key)){
                        o[key] = n[key];
                    }
                }
            }
            o.parent = a;
            var args = Object.keys(objArgs).map(function(e) {
                return objArgs[e];
            });
            args.splice(0,2);
            if (args.length === 0){
                return o;
            }
            args.unshift(o);
            o = arguments.callee.apply(this, args);
            return o;
        }
    },
    uninstall: function(){
        if( Object.prototype.hasOwnProperty("oloo") ){
            delete Object.prototype.oloo;
        }
    }
}
