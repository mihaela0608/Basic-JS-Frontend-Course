function price(time, age){
    let result= '';
    if(age >=0 && age<=18){
        if(time == 'Weekday'){
            result=12;
        } else if(time == 'Weekend'){
            result=15;
        } else if( time == 'Holiday'){
            result = 5;
        }
    } else if(age > 18 && age<=64){
        if(time == 'Weekday'){
            result=18;
        } else if(time == 'Weekend'){
            result=20;
        } else if( time == 'Holiday'){
            result = 12;
        }
    } else if(age>64 && age <= 122){
        if(time == 'Weekday'){
            result=12;
        } else if(time == 'Weekend'){
            result=15;
        } else if( time == 'Holiday'){
            result = 10;
        }
    } else{
        result='Error!';
    }

    if(typeof(result) == 'number'){
        console.log(`${result}$`);
    } else{
        console.log(result);
    }
}
