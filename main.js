const start = () => {
    // Get the value from input f(x)
    const a = parseInt(document.getElementById('3').value)
    const b = parseInt(document.getElementById('2').value)
    const c = parseInt(document.getElementById('1').value)
    const M = parseInt(document.getElementById('M').value)

    // Starting and ending point of the function
    const start = parseInt(document.getElementById('start').value)
    const end = parseInt(document.getElementById('end').value)

    // Derrivation to get f'(x)
    const newA = a*3
    const newB = b*2
    const newC = c*1

    // Solving the equation with f'(x) = 0
    const delta = newB**2 - 4*newA*newC
    const x1 = (-newB - Math.sqrt(delta))/ (2*newA)
    const x2 = (-newB + Math.sqrt(delta))/ (2*newA)
    console.table(delta, x1, x2)
    
    const resultArr = [start, end, x1 ,x2]

    // Check if x1 and x2 met the requirement
    if ( x1 <= start && x1 >= end ) {
        resultArr.splice(resultArr.indexOf('x1'), 1)
    }
    if ( x2 <= start && x2 >= end ) {
        resultArr.splice(resultArr.indexOf('x2'), 1)
    }

    // The final result
    const finalResult = []
    resultArr.forEach(element => {
        const result = a*(element**3) + b*(element**2) + c*(element) + M
        finalResult.push(result)
    });
    console.log(finalResult)

    // Print out the result
    const max = Math.max(...finalResult);
    const min = Math.min(...finalResult);
    console.log(`Function got max = ${max} and min = ${min}`)

    document.getElementById('result').innerHTML = `Function got max = ${max} and min = ${min}`
}