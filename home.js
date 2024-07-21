const quote=document.querySelector(".quote");
const aurthor=document.querySelector(".aurthoe");
const apiurl ="https://api.quotable.io/random";


async function getQuote(api){

    const response =await fetch(api);
    var data = await response.json();
    quote.innerHTML=data.content;
    aurthor.innerHTML=data.author;
}

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=`+quote.innerHTML + "    by: --  "+aurthor.innerHTML,"Tweet Window","width=500,height=300");
}


