/**
 * 
 * @param {Array} arr 
 */
function solve(arr){
    /*
    Write a function that:

· Records a car number for every car that enters the parking lot

· Removes a car number when the car goes out

· Input will be an array of strings in format [direction, carNumber]

Print the output with all car numbers which are in the parking lot sorted in ascending by number.

If the parking lot is empty, print: "Parking Lot is Empty".
     */
    
    let cars = [];
    for(let info of arr){
        let command = info.split(', ')[0];
        let number = info.split(', ')[1];

        if(command == 'IN' && cars.indexOf(number) < 0){
            cars.push(number);
        } else if(command == 'OUT' && cars.indexOf(number) > -1){
            cars.splice(cars.indexOf(number), 1);
        }
    }
    cars.sort((a, b) => a.localeCompare(b));
    if(cars.length > 0){
        for(let car of cars){
            console.log(car);
        }
    } else{
        console.log('Parking Lot is Empty');
    }
    
}

solve(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'IN, CA9999TT',
    
    'IN, CA2866HI',
    
    'OUT, CA1234TA',
    
    'IN, CA2844AA',
    
    'OUT, CA2866HI',
    
    'IN, CA9876HH',
    
    'IN, CA2822UU']);

solve(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'OUT, CA1234TA']);