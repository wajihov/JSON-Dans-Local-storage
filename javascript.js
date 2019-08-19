console.log("Helllooooooooo 12");
function myFunction(){
    console.log("Dans fonction");
    var usernameTxt= document.getElementById("idUsername").value;
    console.log(usernameTxt);
    document.getElementById("repUsername").innerHTML=usernameTxt;
}
function localSt(){
    //localStorage.setItem("aaa", 20);
    var a= localStorage.getItem("aaa");
    console.log(a);
}

var myTab=[]; 
class User {
    constructor(name, lastname, dateBirth, mail, pass){
        this.nom=name;
        this.prenom=lastname;
        this.dateNaissance=dateBirth;
        this.email= mail;
        this.password= pass;
    }
}
function SaveData(){
    var listUsers= JSON.parse(localStorage.getItem("Tableau"));
    if (listUsers==null){
        listUsers=[];
    }
    var user ={ 
    nom:document.getElementById("idFirstName").value,    
    prenom:document.getElementById("idLastName").value,
    dateNaissance:document.getElementById("idDateNaissance").value,
    email:document.getElementById("idMail").value,
    password:document.getElementById("idPassword").value    
    };
    listUsers.push(user);    
    localStorage.setItem("Tableau", JSON.stringify(listUsers));
}

function saveDataa(){
    const user2={
        nom:document.getElementById("idFirstName").value,    
        prenom:document.getElementById("idLastName").value,
        dateNaissance:document.getElementById("idDateNaissance").value,
        email:document.getElementById("idMail").value,
        password:document.getElementById("idPassword").value
    }
    //var MonTableau=[];
    var MonTableau = JSON.parse(localStorage.getItem('users'))||[];
    //MonTableau=[get];
    MonTableau.push(user2);
    
    localStorage.setItem("users", JSON.stringify(MonTableau));
    
    console.log(JSON.stringify(MonTableau));
    //console.log(get);
}

function Annuler(){
    console.log("Efaccer");
    document.getElementById("idFirstName").value="";  
    document.getElementById("idLastName").value="";
    document.getElementById("idDateNaissance").value="";
    document.getElementById("idMail").value="";
    document.getElementById("idPassword").value="";
}

function afficherValeur(){
    var listUsers= JSON.parse(localStorage.getItem("Tableau"))
    var mailtxt=document.getElementById("idMail").value;
    var passwordtxt=document.getElementById("idPass").value;
    console.log("mail : ", mailtxt, " : ", passwordtxt);    
    console.log("le mail est : ", mailtxt);
    var mailTrue= false;
    var passwordTrue= false;
    
    for(x in listUsers){        
        if(listUsers[x].email==mailtxt){
            mailTrue= true;
            if(listUsers[x].password==passwordtxt){
                passwordTrue= true;
                console.log(listUsers[x].dateNaissance, " ", listUsers[x].nom, " ", listUsers[x].prenom );                
                break;
            }
        }                
    }
    if(mailTrue==false)
    console.log("Mail invalide");
    if(passwordTrue==false)
    console.log("password invalid");    
}

function UpDateFunction(){
    var UserUpdate=JSON.parse(localStorage.UserUpdate);
    for(i=0; i<UserUpdate.length; i++){
        
    }
}