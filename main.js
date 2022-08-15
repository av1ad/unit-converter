const convertBtn = document.getElementById("convert-btn")
const numberInput = document.getElementById("number-input")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = numberInput.value

    lengthEl.textContent = `${baseValue} meter = ${round(baseValue * meterToFeet)} feet`
    volumeEl.textContent = `${baseValue} liter = ${round(baseValue * literToGallon)} gallons`
    massEl.textContent = `${baseValue} kilos = ${round(baseValue * kiloToPound)} lbs`
})

function round(num) {
    return +(Math.round(num + "e+2") + "e-2")
}