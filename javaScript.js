
function ceffect(no)
{
    switch(no)
    {
        case 1:document.querySelector("#about").classList.add("cliked");
        setTimeout(function(){
            document.querySelector("#about").classList.remove("cliked");
        },2000)
        break;
        case 2:document.querySelector("#Skills").classList.add("cliked");
        setTimeout(function(){
            document.querySelector("#Skills").classList.remove("cliked");
        },2000)
        break;
        case 3:document.querySelector("#collaboration").classList.add("cliked");
        setTimeout(function(){
            document.querySelector("#collaboration").classList.remove("cliked");
        },2000)
        break;
        case 4:document.querySelector("#contacts").classList.add("cliked");
        setTimeout(function(){
            document.querySelector("#contacts").classList.remove("cliked");
        },2000)
        break;
    }
}