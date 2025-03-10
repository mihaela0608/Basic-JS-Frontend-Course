function inRange(char1, char2){
   let num1 = char1.charCodeAt(0);
   let num2 = char2.charCodeAt(0);
   let start = 0;
   let end = 0;
   if(num2 > num1){
        start = num1;
        end = num2;
   } else{
        start = num2;
        end = num1;
   }
   let arr = [];
   for(let i = start + 1; i< end; i++){
        arr.push(String.fromCharCode(i));
   }
   console.log(arr.join(' '));
}
inRange('#',':');