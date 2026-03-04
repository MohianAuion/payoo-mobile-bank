// default

handdleToggle('add-money-section', 'block');

handdleToggle('cashout-section', 'none');
handdleToggle('transfer-money-section', 'none');
handdleToggle('get-bonus-section', 'none');
handdleToggle('pay-bill-section', 'none');
handdleToggle('transaction-section', 'none');


// document.getElementById('add-money-section').style.display = 'block';

// document.getElementById('cashout-section').style.display = 'none';
//      document.getElementById('transfer-money-section').style.display = 'none';
//      document.getElementById('get-bonus-section').style.display = 'none';
//      document.getElementById('pay-bill-section').style.display= 'none';
//       document.getElementById('transaction-section').style.display = 'none';



// cash out

document.getElementById('cashout-btn')
.addEventListener('click', function(){


handdleToggle('cashout-section', 'block');

handdleToggle('add-money-section', 'none');
handdleToggle('transfer-money-section', 'none');
handdleToggle('get-bonus-section', 'none');
handdleToggle('pay-bill-section', 'none');
handdleToggle('transaction-section', 'none');

//     document.getElementById('cashout-section').style.display ='block';
//     document.getElementById('add-money-section').style.display ='none';
//     document.getElementById('transfer-money-section').style.display= 'none';
//     document.getElementById('get-bonus-section').style.display= 'none';
//     document.getElementById('pay-bill-section').style.display= 'none';
//      document.getElementById('transaction-section').style.display = 'none';

   

})


// add money

document.getElementById('add-money-btn')
.addEventListener('click', function(){


     handdleToggle('add-money-section', 'block');

handdleToggle('cashout-section', 'none');
handdleToggle('transfer-money-section', 'none');
handdleToggle('get-bonus-section', 'none');
handdleToggle('pay-bill-section', 'none');
handdleToggle('transaction-section', 'none');


//     document.getElementById('add-money-section').style.display = 'block';

//     document.getElementById('cashout-section').style.display = 'none';
//      document.getElementById('transfer-money-section').style.display = 'none';
//      document.getElementById('get-bonus-section').style.display = 'none';
//      document.getElementById('pay-bill-section').style.display= 'none';
//       document.getElementById('transaction-section').style.display = 'none';

})

// transfer money

document.getElementById('transfer-money-btn')
.addEventListener('click', function(){

     handdleToggle('transfer-money-section', 'block');

handdleToggle('cashout-section', 'none');
handdleToggle('add-money-section', 'none');
handdleToggle('get-bonus-section', 'none');
handdleToggle('pay-bill-section', 'none');
handdleToggle('transaction-section', 'none');


//     document.getElementById('transfer-money-section').style.display = 'block';
//     document.getElementById('add-money-section').style.display = 'none';
//     document.getElementById('cashout-section').style.display = 'none';
//     document.getElementById('get-bonus-section').style.display = 'none';
//     document.getElementById('pay-bill-section').style.display = 'none';
//      document.getElementById('transaction-section').style.display = 'none';

    
    
})


// get bonus


document.getElementById('get-bonus-btn')
.addEventListener('click', function(){

handdleToggle('get-bonus-section', 'block');

handdleToggle('cashout-section', 'none');
handdleToggle('add-money-section', 'none');
handdleToggle('transfer-money-section', 'none');
handdleToggle('pay-bill-section', 'none');
handdleToggle('transaction-section', 'none');



//     document.getElementById('get-bonus-section').style.display = 'block';
//     document.getElementById('add-money-section').style.display = 'none';
//     document.getElementById('cashout-section').style.display = 'none';
//      document.getElementById('transfer-money-section').style.display = 'none';
//       document.getElementById('pay-bill-section').style.display = 'none';
//        document.getElementById('transaction-section').style.display = 'none';

    
    
})

// pay bill

document.getElementById('pay-bill-btn')
.addEventListener('click', function(){

handdleToggle('pay-bill-section', 'block');

handdleToggle('cashout-section', 'none');
handdleToggle('add-money-section', 'none');
handdleToggle('transfer-money-section', 'none');
handdleToggle('get-bonus-section', 'none');
handdleToggle('transaction-section', 'none');


//     document.getElementById('pay-bill-section').style.display = 'block';
//     document.getElementById('add-money-section').style.display = 'none';
//     document.getElementById('cashout-section').style.display = 'none';
//      document.getElementById('transfer-money-section').style.display = 'none';
//      document.getElementById('get-bonus-section').style.display = 'none';
//      document.getElementById('transaction-section').style.display = 'none';

    
    
})

// transaction
document.getElementById('transaction-btn')
.addEventListener('click', function(){

handdleToggle('transaction-section', 'block');

handdleToggle('cashout-section', 'none');
handdleToggle('add-money-section', 'none');
handdleToggle('transfer-money-section', 'none');
handdleToggle('get-bonus-section', 'none');
handdleToggle('pay-bill-section', 'none');


//     document.getElementById('transaction-section').style.display = 'block';
//     document.getElementById('pay-bill-section').style.display = 'none';
//     document.getElementById('add-money-section').style.display = 'none';
//     document.getElementById('cashout-section').style.display = 'none';
//      document.getElementById('transfer-money-section').style.display = 'none';
//      document.getElementById('get-bonus-section').style.display = 'none';

    
    
})


// LogOut btn

document.getElementById('logout-btn')
.addEventListener('click', function(){

     window.location.href = "./index.html";
})
