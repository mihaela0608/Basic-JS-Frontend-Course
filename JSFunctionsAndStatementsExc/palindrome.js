function palindrome(nums){
    for(let number of nums){
        number = String(number);
        if(number == number.split('').reverse().join('')){
            console.log(true);
        } else{
            console.log(false);
        }
    }
}
palindrome([123,323,421,121]);