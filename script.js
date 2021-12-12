/*     Auto Write Text Name */ 

const text="JACK BENJAMIN HERZ";
const h1 = document.getElementById("h1");

let index = 0;
let end = 0;

function fancyText(){

    h1.innerText = text.slice(0, index);
    if(end==0){
        index++;
    }

    if(index>text.length+500){
        end=1;
    }

    if(end==1){
        index--;
    }

    if (index==1){
        end=0;
    }
    
}

setInterval(fancyText, 100);

/*   Carousel  */

const imgs=document.getElementById("imgs");
const img=document.querySelectorAll("#imgs img");

let index2=0;

function carousel(){
    index2++
    if (index2>img.length-1){
        index2=0;
    }

    imgs.style.transform=`translateX(${index2*-75}vw)`
}

setInterval(carousel, 3000);
