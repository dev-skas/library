function check(){
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;

    if(uname.trim()=="" ){
        document.getElementById("error").innerText="You can't leave  Username field blank";
        document.getElementById("error").removeAttribute("hidden",true);
        return false
    

    }else  if(pwd.trim()=="" ){
        document.getElementById("error").innerText="You can't leave  Password field blank";
        document.getElementById("error").removeAttribute("hidden",true);
        return false
    }else{
        return true
    }

    
}

function validate(){
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;
    var repwd = document.getElementById("repwd").value;
    if(uname.trim()=="" ){
        document.getElementById("error").innerText="You can't leave  Username field blank";
        document.getElementById("error").removeAttribute("hidden",true);
        return false
    

    }else  if(pwd.trim()=="" ){
        document.getElementById("error").innerText="You can't leave  Password field blank";
        document.getElementById("error").removeAttribute("hidden",true);
        return false

     }else  if(repwd.trim()=="" ){
        document.getElementById("error").innerText="You can't leave  retype field blank";
        document.getElementById("error").removeAttribute("hidden",true);
        return false
     }
    else if (pwd !== repwd){
        document.getElementById("error").innerText=" Password not match";
        document.getElementById("error").removeAttribute("hidden",true);
        return false
    }else{   
        document.getElementById("error").setAttribute("hidden",true);

        return true

    }

}

function addbook(){
    var name = document.getElementById("name").value;
    var authorName = document.getElementById("authorName").value;
    var Category = document.getElementById("Category").value;
    var year = document.getElementById("year").value;
    var about = document.getElementById("about").value;


    if(name.trim()==""||authorName.trim()==""|| Category.trim()==""||year.trim()==""||about.trim()==""){
        alert("You can't leave field blank");
        return false

    }else{
        return true
    }
}

function addauthor(){
    var authorName = document.getElementById("authorName").value;
    var Country = document.getElementById("Country").value;
    var DOB = document.getElementById("DOB").value;
    var about = document.getElementById("about").value;


    if(DOB.trim()==""||authorName.trim()==""||about.trim()==""||Country.trim()==""){
        alert("You can't leave field blank");
        return false

    }else{
        return true
    }
}

