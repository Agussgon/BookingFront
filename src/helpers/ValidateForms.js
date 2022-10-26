export const ValidateFormHelper = (model) => {
    const keys = Object.keys(model);  
    for (let i in keys) {
        if (keys[i] === 'id') continue;
        const el = document.getElementById(keys[i]);
        if (el.required && !el.value) return false;        
    }
    return true;
}



/* agrego validaciones */

export function validateEmail(email) {
    //const arroba= email.split("@");
    //const regexEmail= /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]{0,25}@[a-zA-Z0-9-]{0,25}[.]([a-zA-Z]+){1,10}$ | ^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]{0,25}@[a-zA-Z0-9-]{0,25}(?:\.[a-zA-Z]+){1,10}$/;
    //!regexEmail.test(email.value)
    if(email.value ==='' || email.length<10 || email.length >30 || parseInt(email)   )
     return false
   
}

export function validatePass(pass) {
    //const regexPass = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{6,16}$/
    //!regexPass.test(pass.value)
    if(pass.value ==='' || pass.length < 6 ){ return false}
   
}
