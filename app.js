document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('Order'); // Use the correct ID "Order"
    const orderdiv = document.getElementById('OrderSection'); // Use the correct ID "OrderSection"
  
    button.addEventListener('click', () => {
      // Toggle the "Order" class on the orderdiv
      orderdiv.classList.toggle("Order");
    });
  });
//   document.addEventListener('DOMContentLoaded',()=>{
//     const note=document.getElementById('demo');
//     const but=document.getElementById('check');
//     but.addEventListener('click',function(){
        
//         if(note.innerHTML=="မဂ်လာပါ"){
//             note.innerHTML="hello";
//         }else{
//             note.innerHTML="မဂ်လာပါ";
//         }
//     });
    
// });
  