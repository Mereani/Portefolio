//Effet accordeon en jquery

$(document).ready(function(){
    $("#countdown").click(function(){
    $("#firstprojet").toggle(500);
  });
});
$(document).ready(function(){
    $("#blog").click(function(){
    $("#projetblog").toggle(500);
  });
});

//Survolement des images en js pur

let text = document.getElementById ('text');
 
function on1(){
    document.getElementById('text').innerHTML = "Bonne connaissances" 
};
 function on2(){
    document.getElementById('text').innerHTML = "Bonne bases"
};
 function on3(){
    document.getElementById('text').innerHTML = "Mon JS"
};
function on4(){
    document.getElementById('text').innerHTML = "Mon NodeJS"
    };
 function out(){
    document.getElementById('text').innerHTML = "Survolez les images"
 };
