window.sr = new ScrollReveal()

sr.reveal('.navbar', {
    delay: 1000
});
sr.reveal('.baba', {
    delay: 1000
});
sr.reveal('.container', {
    //  delay:1000
    distance: "60px"
});
sr.reveal('.btn', {
    delay: 1300,
    opacity: 0,
    origin: "top",
    distance: "60px"

});

//$(window).scroll(function () {
  //  if ($(window).scrollTop()) {
 //       $('.navbar').addClass('sticky');
 //   } else {
 //       $('.navbar').removeClass('sticky');
 //   }
//});


let btnAll=document.querySelector('#all');
let btnPackaging=document.querySelector('#packaging');
let btnMockup=document.querySelector('#mockup');
let btnTypography=document.querySelector('#typography');
let btnPhotography=document.querySelector('#photography');
let items=document.querySelectorAll('.portfolio-item');

btnAll.addEventListener('click',function(){

    for(let i=0; i<items.length; i++){  
        let id=items[i].getAttribute('id')

        if(id!=""){
            items[i].parentElement.style.display="block"
        }
    } 
})

btnPackaging.addEventListener('click',function(){
    for(let i=0; i<items.length; i++){  
        let id=items[i].getAttribute('id')

        if(id!="2"){
            items[i].parentElement.style.display="none"
        }else{
            items[i].parentElement.style.display="block"
        }

    }
})

btnMockup.addEventListener('click',function(){
    for(let i=0; i<items.length; i++){  
        let id=items[i].getAttribute('id')
        if(id!="3"){
            items[i].parentElement.style.display="none"
        }else{
            items[i].parentElement.style.display="block"
        }

    }
})

btnTypography.addEventListener('click',function(){
    for(let i=0; i<items.length; i++){  
        let id=items[i].getAttribute('id')
        if(id!="4"){
            items[i].parentElement.style.display="none"
        }else{
            items[i].parentElement.style.display="block"
        }

    }
})

btnPhotography.addEventListener('click',function(){
    for(let i=0; i<items.length; i++){  
        let id=items[i].getAttribute('id')
        if(id!="1"){
            items[i].parentElement.style.display="none"
        }else{
            items[i].parentElement.style.display="block"
        }

    }
});


$(".portfolio-item").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    }
});