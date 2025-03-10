function passwordValidator(password){
    let mistakes = [];
    if(password.length < 6 || password.length > 10){
        mistakes.push('Password must be between 6 and 10 characters');
    }
    const sybolRegex = /^[A-Za-z0-9]+$/;
    if(!sybolRegex.test(password)){
        mistakes.push('Password must consist only of letters and digits');
    }
    const numberRegex = /^(.*\d.*\d.*)$/;
    if(!numberRegex.test(password)){
        mistakes.push('Password must have at least 2 digits')
    }
    

    if(mistakes.length == 0){
        console.log('Password is valid');
    } else{
        for(let mistake of mistakes){
            console.log(mistake);
        }
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');