const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
 
  readline.question('Digite o valor em binário', binario => {

    var binarioStr = binario.split('')

    binarioStr.forEach((eachNumber) => {

        if(!(eachNumber == 1 || eachNumber == 0)){
            console.log("Valor não permitido. Use apenas 0's e 1's")
            process.exit()
        }
    })

    function binToDec(num) {
        return num.split('').reverse().reduce(function(x, y, i) {
            return (y === '1') ? x + Math.pow(2, i) : x;
        }, 0);
    }

    var decimalNumber = binToDec(binario)

    console.log(binario)
    console.log(decimalNumber)

    readline.close()
  })