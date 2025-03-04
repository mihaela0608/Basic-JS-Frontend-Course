function info(name, age, grade){
    let finalGrade = grade.toFixed(2);
    let info = `Name: ${name}, Age: ${age}, Grade: ${finalGrade}`;
    console.log(info);
}
info('Ivana', 19, 3.5);