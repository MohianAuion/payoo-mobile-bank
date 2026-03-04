

document.getElementById('payBill-btn')
    .addEventListener('click', function (event) {

        event.preventDefault();


        const payBillAmmount = getInputValueById('payBill-ammount');
        const mainBalance = getInnerTextById('main-balance');
        const payBillPin = getInputValueById('payBill-pin');


        const billerAccountNumber = document.getElementById('biller-account-number').value;


        if(payBillAmmount > mainBalance ){

            alert('insufficiant account balance');

            return;
           
        }


        if (billerAccountNumber.length === 11 && payBillPin === 290106) {

            const sum = mainBalance - payBillAmmount;
            document.getElementById('main-balance').innerText = sum;
            alert(`${payBillAmmount}BDT paid successfully`);


            const transactionHistory = document.getElementById('transection-history');

        const transPara = document.createElement('p');
        transPara.classList = "border-1 border-red-900 p-4 rounded-sm bg-gray-100 text-red-800 mb-3";
        transPara.innerText = `${payBillAmmount}BDT has been successfully paid from account no: ${billerAccountNumber}`;

        transactionHistory.appendChild(transPara);


        }
        else {

            alert('incorrect information')
        }




        // const payBillAmmount = document.getElementById('payBill-ammount').value;
        // const convertedPayBillAmmount = parseFloat(payBillAmmount);

        // const mainBalance = document.getElementById('main-balance').innerText;
        // const convertedMainBalance = parseFloat(mainBalance);

        // const payBillPin = document.getElementById('payBill-pin').value;
        // const convertedPayBillPin = parseInt(payBillPin);

        // const billerAccountNumber = document.getElementById('biller-account-number').value;



        // if(billerAccountNumber.length === 11 && convertedPayBillPin === 290106){

        //  const sum = convertedMainBalance - convertedPayBillAmmount;
        //  document.getElementById('main-balance').innerText = sum;
        //  alert(`${payBillAmmount}BDT paid successfully`);

        // }
        // else{

        //     alert('incorrect information')
        // }



    })

