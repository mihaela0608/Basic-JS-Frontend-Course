/***
 * @param {Array} arr 
 */
function solve(arr){
    let employeeArr = [];
    for(let personalInfo of arr){
        let employee = {name: personalInfo, number: personalInfo.length};
        employeeArr.push(employee);
    }
    for(let employee of employeeArr){
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}
solve([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);