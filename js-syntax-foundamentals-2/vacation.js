function vacation(people, type, day){
    let totalPrice='';
    let perPerson='';
    switch(type){
        case 'Students':
            switch(day){
                case 'Friday':
                    perPerson=8.45;
                    break;
                case 'Saturday':
                    perPerson=9.80;
                    break;
                case 'Sunday':
                    perPerson=10.46;
                    break;
            }
            totalPrice = perPerson * people;
            if(people >= 30){
                totalPrice = totalPrice - (totalPrice * 0.15);
            }
            break;
        case 'Business':
            switch(day){
                case 'Friday':
                    perPerson=10.90;
                    break;
                case 'Saturday':
                    perPerson=15.60;
                    break;
                case 'Sunday':
                    perPerson=16;
                    break;
            }
            totalPrice = perPerson * people;
            if(people >= 100){
                totalPrice = totalPrice - (perPerson * 10);
            }
            break;
        case 'Regular':
            switch(day){
                case 'Friday':
                    perPerson=15;
                    break;
                case 'Saturday':
                    perPerson=20;
                    break;
                case 'Sunday':
                    perPerson=22.50;
                    break;
            }
            totalPrice = perPerson * people;
            if(people >= 10 && people<=20){
                totalPrice = totalPrice - (totalPrice * 0.05);
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
