function matrix(num){
    for(let i = 1; i <= num; i++){
        let row = [];
        for(let j = 1; j <= num; j++){
            row.push(num);
        }
        console.log(row.join(' '));
    }

}
matrix(7);