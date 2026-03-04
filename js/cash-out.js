



document.getElementById('cashOut-btn')
    .addEventListener('click', function (event) {

        event.preventDefault();



        const ammount = getInputValueById('cash-out-ammount');
        const pin = getInputValueById('cashOut-pin');
        const mainBalance = getInnerTextById('main-balance');

        const agentNumber = document.getElementById('agent-number').value;


        if (ammount > mainBalance) {

            alert('insufficiant account balance');

            return;

        }


        if (agentNumber.length === 11 && pin === 290106) {

            const sum = mainBalance - ammount;

            document.getElementById("main-balance").innerText = sum;

            alert(`${ammount}BDT cash out successfully`);

        }
        else {

            alert('incorrect information');
        }

        const transactionHistory = document.getElementById('transection-history');

        const transPara = document.createElement('p');
        transPara.classList = "border-1 border-red-900 p-4 rounded-sm bg-gray-100 text-red-800 mb-3";
        transPara.innerText = `${ammount}BDT has been successfully cash out from account no: ${agentNumber}`;

        transactionHistory.appendChild(transPara);



        // const cashOutAmmount =document.getElementById('cash-out-ammount').value;
        // const convertedCashOutAmmount = parseInt(cashOutAmmount);

        // const cashOutPin = document.getElementById('cashOut-pin').value;
        // const convertedCashOutPin = parseInt(cashOutPin);

        // const mainBalance = document.getElementById('main-balance').innerText;
        // const convertedMainBalance = parseInt(mainBalance);

        // const agentNumber = document.getElementById('agent-number').value;


        //  if(agentNumber.length === 11 ){


        // if (convertedCashOutPin === 290106) {

        //             const sum = convertedMainBalance - convertedCashOutAmmount;
        //             document.getElementById("main-balance").innerText = sum;
        //             // console.log(accountNnumber.length)
        //             alert(`${cashOutAmmount}BDT cash out successfully`)

        //         }
        //         else {
        //             alert('please enter valid pin number');
        //         }

        //  }

        //  else{

        //     alert('please enter valid agent number');
        //  }




    })