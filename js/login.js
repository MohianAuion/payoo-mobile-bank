
document.getElementById('login-btn')
    .addEventListener('click', function (event) {

        event.preventDefault();

        const accountNumber = document.getElementById('account-number').value;
        const convertedAccountNumber = parseInt(accountNumber);

        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin);

        if (accountNumber.length === 11) {
            if (convertedPin === 290106) {
                window.location.href = "./main.html";
            }
            else {
                alert('please enter your valid pin number')
            }
        }
        else {
            alert('please enter your valid account number')
        }


    }

    )