import axios from 'axios';
import Noty from 'noty';
console.log('Hello from app js');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

// JavaScript to toggle the dropdown
const profileButton =  document.getElementById('profileButton');
var dropdown = document.getElementById('profileDropdown');
if(profileButton){
   profileButton.addEventListener('click', function () {
      var dropdown = document.getElementById('profileDropdown');
      dropdown.classList.toggle('hidden');
    });
}

// // Close the dropdown when clicking outside of it
if(dropdown){
   document.addEventListener('click', function (event) {
      if (!event.target.closest('#profileButton') && !event.target.closest('#profileDropdown')) {
          dropdown.classList.add('hidden');
      }
    });
}




//-------------------------------------------------------------------toggle effect sidebar---------------------

//-------------------------------------------------------------------------------------------------------------





//----------------------------------------------------------------------------------------------------adminafeeats dropdown button---------------------------------

// function selectOption(option) {
//   alert('Selected: ' + option);
  
 
  // Add your logic here to handle the selected option
// }

// document.getElementById('dropdownButton').addEventListener('click', function() {
//   document.getElementById('dropdown').classList.toggle('hidden');
//   console.log(document.getElementById('dropdown'));
// });


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//     document.getElementById('email1').addEventListener('input', function() {
//       const label = document.querySelector('label[for="email1"]');
//       if (this.value.length > 0) {
//         label.style.display = 'none';
//       } else {
//         label.style.display = 'block';
//       }
//     });

//     document.getElementById('password1').addEventListener('input', function() {
//         const label = document.querySelector('label[for="password1"]');
//         if (this.value.length > 0) {
//           label.style.display = 'none';
//         } else {
//           label.style.display = 'block';
//         }
//       });
      
//       document.getElementById('name1').addEventListener('input', function() {
//         const label = document.querySelector('label[for="name1"]');
//         if (this.value.length > 0) {
//           label.style.display = 'none';
//         } else {
//           label.style.display = 'block';
//         }
//       });
//       document.getElementById('mobile').addEventListener('input', function() {
//         const label = document.querySelector('label[for="mobile"]');
//         if (this.value.length > 0) {
//           label.style.display = 'none';
//         } else {
//           label.style.display = 'block';
//         }
//       });


//------------------------------------------------------------------------------------------------------------
 
let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');
const removeButtons = document.querySelectorAll('.remove-button');
// Update Cart
function updateCart(item){
    // using axios for request sand
    axios.post('/update-cart',item).then(res => {
       cartCounter.innerText = res.data.totalQty;
       new Noty({
        type:'success',
        timeout:1000,
        progressBar:false,
        text:'Item added to cart 😋'
       }).show();
    }).catch(err =>{
      new Noty({
        type:'error',
        timeout:1000,
        progressBar:false,
        text:'Something went wrong 😔',
       }).show();
    })
}

// add To cart 
addToCart.forEach((btn) => {
   btn.addEventListener('click',(e) => {
    console.log(e);
    let item = JSON.parse(btn.dataset.item);
    updateCart(item);
    console.log(item);
   })
})



//----------------------------------------------------------------

//remove product 
// removeButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     const productId = button.dataset.item;
//     console.log(productId);
//     // Use Axios to send a request to your server to remove the product
//     axios.post('/remove-product', { productId })
//       .then(response => {
//         // Handle success, e.g., update the UI
//         console.log(response.data);
//       })
//       .catch(error => {
//         // Handle error
//         console.error(error);
//       });
//   });
// });


const orderPlaced = document.getElementById('order-placed');
if(orderPlaced){
orderPlaced.addEventListener('click', function() {
   // Simulate order placement (you can replace this with your actual logic)
   // For demonstration purposes, let's assume the order is placed successfully
   // You would replace this with your actual order placement logic

   // console.log('hello everyone');

   // simulateOrderPlacement();
 fetchUserWalletBalance('useId')
      .then((walletBalance) => {
        const totalPrice = req.session.cart.totalPrice; // Replace this with your actual logic to calculate the total order price
        if (user.Wallet >= totalPrice) {
          // User has enough money, proceed with order placement
          simulateOrderPlacement();
        } else {
          // User doesn't have enough money, display an error or take appropriate action
          console.error('Insufficient funds in the wallet');
        }
      })
      .catch((error) => {
        console.error('Error fetching user wallet balance:', error);
      });
  
 });
}
 function simulateOrderPlacement() {
   // Hide the empty box
   document.getElementById('empty-box').style.display = 'none';
 
   // Show the order placed notification
   document.getElementById('order-placed-notification').style.display = 'block';
 }