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

    //const regexEmail= /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]{0,25}@[a-zA-Z0-9-]{0,25}[.]([a-zA-Z]+){1,10}$ | ^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]{0,25}@[a-zA-Z0-9-]{0,25}(?:\.[a-zA-Z]+){1,10}$/;
     const regexEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if(email.value ==='' || !regexEmail.test(email.value) || parseInt(email)   )
     return false
   
}

export function validatePass(pass) {
    //const regexPass = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{6,16}$/
    //!regexPass.test(pass.value)
    if(pass.value ==='' || pass.length < 6 ){ return false}
   
}
