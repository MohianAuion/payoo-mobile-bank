
document.getElementById('transferMoney-btn')
    .addEventListener('click', function (event) {

        event.preventDefault();



        const ammount = getInputValueById('transfer-money-ammount');
        const pin = getInputValueById('transfer-money-pin');
        const mainBalance = getInnerTextById('main-balance');

        const agentNumber = document.getElementById('tm-agent-number').value;


        if (ammount > mainBalance) {

            alert('insufficiant account balance');

            return;

        }



        if (agentNumber.length === 11 && pin === 290106) {

            const sum = mainBalance - ammount;

            document.getElementById("main-balance").innerText = sum;

            alert(`${ammount}BDT transfered successfully`);


            const transactionHistory = document.getElementById('transection-history');

        const transPara = document.createElement('p');
        transPara.classList = "border-1 border-red-900 p-4 rounded-sm bg-gray-100 text-red-800 mb-3";
        transPara.innerText = `${ammount}BDT has been successfully transfered from account no: ${agentNumber}`;

        transactionHistory.appendChild(transPara);


        }
        else {

            alert('incorrect information');
        }

    })
