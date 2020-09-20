// Kata1 
    function add (a,b) {
        return a + b
    }

// Kata2 
    function multiply (c,g) {
        let sum = 0
        for (let index = 0; index < g; index++) {
            sum = add(c,sum)
        }
        return sum
    }
// Kata3 
    function power(a,c) {
        if (c == 0) {
            return 1
        }
        else {
            let sum =a
            for (let index = 0;index < c-1; index++ ) {
                sum =multiply(sum,a)
            }
            return sum
        }
    }
// Kata4
function factorial(a) {
    let sum = a 
    while (a > 1) {
        a --  
        sum = multiply (sum,a)
    }
    return sum
}
// Kata5 (bonus)
function fibonacci(x) {
    let sum = [0 , 1] 
    let y = 0 
    if (x < 0) {
        return false
    }
    else {
        while (y < x) {
            sum.push(add(sum[y] , sum[y + 1])) 
            y++
        }
    }
    return sum[x - 1]
}