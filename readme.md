

document.getElementById('pay-bill-btn')
    .addEventListener('click', function (event) {

        // console.log('clicked')
        event.preventDefault();


        const ammount = getInputValueById('pay-bill-ammount');
        console.log(ammount)
        const pin = getInputValueById('pay-bill-pin');
        const mainBalance = getInnerTextById('main-balance');

        // console.log(ammount, pin, mainBalance);

        const accountNumber = document.getElementById('pay-bill-account-number').value;



        // if (accountNumber.length === 11 && pin === 290106) {

        //     const sum = mainBalance - ammount;

        //     document.getElementById("main-balance").innerText = sum;

        //     alert(`${ammount}BDT payment successfully`);

        // }
        // else {

        //     alert('incorrect information');
        // }

 })