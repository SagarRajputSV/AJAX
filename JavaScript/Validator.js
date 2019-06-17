const btn = document.getElementById("btn");
const animalcontent = document.getElementById("animal-Info");

btn.addEventListener("click",()=>{
    const xhrobj = new XMLHttpRequest();
    xhrobj.open('GET',"https://learnwebcode.github.io/json-example/animals-1.json");
    xhrobj.onload =function()
    {        
        dataloaded = JSON.parse(xhrobj.responseText);
        ChangeAnimalElement(dataloaded);
    }

    xhrobj.send();

});

function ChangeAnimalElement(dataloaded)
{
   const htmlstring= "Hello sagar";

   animalcontent.insertAdjacentHTML('beforeend',htmlstring);
}



