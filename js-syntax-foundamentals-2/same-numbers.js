function sameNumbers(number){
    let array = String(number).split('');
    let sum=Number(array[0]);
    let result=true;
    let firstNum=Number(array[0]);
    for(let i = 1; i<array.length; i++){
        let num = Number(array[i]);
        sum+=num;
        if(num != firstNum){
            result=false;
        }
    }
    console.log(result);
    console.log(sum);
}
