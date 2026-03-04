


// input-value function

function getInputValueById(id){

    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;

}

// inner-text function

function getInnerTextById(id){

    const text = document.getElementById(id).innerText;
    const convertedText = parseFloat(text);
    return convertedText;

}

// handdle-toggle function

function handdleToggle(id, status){
   document.getElementById(id).style.display = status;

}
