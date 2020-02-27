var title = document.getElementById("title").innerHTML;
console.log(title);
function generate()
{
    var name = document.getElementById("name").innerHTML;
    var age = document.getElementById("age").innerHTML;
    var UID = name+"_"+age;
    document.getElementById("user").innerHTML=UID;
}
