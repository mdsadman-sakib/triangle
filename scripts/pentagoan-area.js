function calculatePentagonArea(){
    const periMeter = getInputValueById('Pentagon-perameter');
    const apoThem = getInputValueById('Pentagon-apothem');

    const area = 0.5 * periMeter * apoThem;

    setInnerText('pentagon-Area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}


function setInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}