class Cat{
    constructor(catName, age){
        this.catName = catName;
        this.age = age;
    }
    meaw(){
        console.log(`${this.catName}, age ${this.age} says Meow`);
    }
}

/***
 * @param {Array} arr 
 */
function solve(arr){
    for(let catInfo of arr){
        let catName = catInfo.split(' ')[0];
        let catAge = catInfo.split(' ')[1];
        let cat = new Cat(catName, catAge);
        cat.meaw();
    }
}
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);