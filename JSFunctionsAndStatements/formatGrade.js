/*
Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and description.

· < 3.00 - "Fail"

· >= 3.00 and < 3.50 - "Poor"

· >= 3.50 and < 4.50 - "Good"

· >= 4.50 and < 5.50 - "Very good"

· >= 5.50 - "Excellent
 */
/***
 * @param {Number} grade 
 */
function studentGrade(grade){
    let result = '';
    if(grade < 3.00){
        result = 'Fail';
        grade = 2;
    } else if(grade >= 3.00 && grade < 3.50){
        result = 'Poor';
    } else if(grade >= 3.50 && grade < 4.50){
        result = 'Good';
    } else if(grade >= 4.50 && grade < 5.50){
        result = 'Very good';
    } else if(grade >= 5.50){
        result = 'Excellent';
    }
    if(grade < 3.00){
        console.log(result + ` (${grade})`);
    } else{
        console.log(result + ` (${grade.toFixed(2)})`);
    }
}
studentGrade(3.33);
studentGrade(2.99);