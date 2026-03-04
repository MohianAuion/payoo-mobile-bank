
const history = [];

document.getElementById('addMoney-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const amount = getInputValueById('ammount');
        history.push(amount);

        const mainBalance = getInnerTextById('main-balance');
        const pin = getInputValueById('pin');


        const accountNumber = document.getElementById('account-number').value;


        if (accountNumber.length === 11 && pin === 290106) {

            const sum = mainBalance + amount;
            document.getElementById('main-balance').innerText = sum;
            alert(`${amount}BDT paid successfully`);


              const transactionHistory = document.getElementById('transection-history');

            for (let value of history) {
                const transPara = document.createElement('p');
                transPara.classList = "border-1 border-red-900 p-4 rounded-sm bg-gray-100 text-red-800 mb-3";
                transPara.innerText = `${value}BDT has been successfully added from account no: ${accountNumber}`;
                transactionHistory.appendChild(transPara);
            }

        }
        else {

            alert('incorrect information')
        }
    })