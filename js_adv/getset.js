class getset{
    constructor(email,password)
    {
        this.email=email
        this.password=password
    }

    get password(){
        return `${this._password}shah`
    }
    set password(value){
        this._password=value
    }
}
const new1= new getset("alkama@gmail.com","hola")
console.log(new1.password);
