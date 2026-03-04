
document.getElementById('getBonus-btn')
    .addEventListener('click', function (event) {

        event.preventDefault();

        const bonus = document.getElementById('coupon-number').value;
        const mainBalance = getInnerTextById('main-balance');

        // const mainBalance = document.getElementById('main-balance').innerText;
        // const convertedMainBalance = parseFloat(mainBalance);

        if (bonus === 'payooo29') {

            const sum = mainBalance + 700;
            document.getElementById('main-balance').innerText = sum;
            alert(`your bonus ${700}BDT added successfully`)

            const transactionHistory = document.getElementById('transection-history');

        const transPara = document.createElement('p');
        transPara.classList = "border-1 border-red-900 p-4 rounded-sm bg-gray-100 text-red-800 mb-3";
        transPara.innerText = `${700}BDT bonus has been successfully added`;

        transactionHistory.appendChild(transPara);

        }

        
        else {
            alert('your coupon is not valid');
        }

    })