function solve(...numbers){
    let count = 0;
    for(num of numbers){
        if(num < 0){
            count++;
        }
    }
    if(count % 2 == 0){
        console.log('Positive');
    } else{
        console.log('Negative');
    }
}