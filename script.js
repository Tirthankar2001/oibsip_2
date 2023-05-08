// $( document ).ready(function() {
//     const header1=document.getElementById('test');
// console.log(header1);   
// //   });
//   const header1=document.getElementById('test');
//   console.log(header1);   
const glass=document.querySelector('.glass');
 const header1=document.getElementById('test');
 console.log(header1);
 const headertext=document.getElementById('text');
 console.log(headertext);
 const footer=document.querySelector('.footer');
 console.log(footer);

 const tl= new TimelineMax();
//  const mytext=new SplitType('#text')
//  tl.fromTo(header1,1,{height:"0%"},{height:"10%"}).fromTo(header1,2,{width:"0%"},{width:"100%" ,ease :Power2.easeInOut});
// tl.to('.char',{y:0,stagger:0.5,delay:0.2,duration:0.1});

tl.fromTo(glass,4,{y:"-800px"},{y:"0px"});
tl.fromTo(glass,1.2,{width:"100%"},{width:"80%"});



