function sumDigits(number){
    let array = String(number).split('');
    let result=0;
    for(let i=0; i< array.length;i++){
        let char = Number(array[i]);
        result+=char;
    }
    console.log(result);
}
