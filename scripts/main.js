
var form = document.querySelector('#binario__form')
var binario = document.querySelector('.binario__input')
var submitButton = document.querySelector('.transformar__button')
var decimal = document.querySelector('.decimal__output')
var error = document.querySelector('.error__mensage')
var verification = true


submitButton.onclick = function(event) {
    event.preventDefault()

    verifierNumber(binario)
    
    if(verification){
        error.textContent = ''
        decimal.textContent = calculateDecimal(binario.value)
    }

    form.reset()

}

function verifierNumber(num) {

    verification = true
    arrayNumber = num.value.split('')


    arrayNumber.forEach((number) => {
        
        if(!(number == 1 || number == 0)){
            erro()
            return verification = false
        } 
    })
}

function calculateDecimal(value) {
    return value.split('').reverse().reduce(function(x, y, i) {
        return (y === '1') ? x + Math.pow(2, i) : x
    }, 0)
}

function erro(){
    decimal.innerHTML = 'ERRO'
    error.textContent = "Valor de Binário Inválido. Use apenas 0's e 1's"
}