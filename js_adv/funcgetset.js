function user(email,password){
    this._email=email
    this._password=password

    Object.defineProperty(this,'email',{
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
           this._email=value; 
        }
    })
}
const chai= new user("alkam@gmail","somat")
console.log(chai.email);

// the parameter in the define property depicts what value to be used in this case we used email as a parameter
// so the value that is affected is email and and not _email
