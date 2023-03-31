

// Instantiating DOM
let email = document.getElementById('email'); // Object for email
let pass1 = document.getElementById('pass1'); // Object for password 1
let pass2 = document.getElementById('pass2'); // Object for password 2
let button = document.getElementById('butt'); // Object for the submit button
let mName = document.getElementById('mName'); // Object for the Middle name
let fName = document.getElementById('fName'); // Objecct for the First name
let sName = document.getElementById('sName'); // Object for the Lastname
let dob = document.getElementById('dob'); // Object for the Date of Birth
let sex = document.getElementById('sex'); // Object for Gender
let pNum = document.getElementById('pNum'); // Object for Phone number
let addrss = document.getElementById('addrss'); // Object for Address
let nation = document.getElementById('nation'); // Object for Nationality
let lang = document.getElementById('lang'); // Object for Language.
/*
 * The function below helps to verify every
 * inputs from the client and show/activates the 
 * submit button if all inputs are valid.
 */
function detailsCheck() {

    let fN = false, mN = false, sN = false, em = false, ps=false, db=false, se=false, pN=false, ad=false, na=false, la=false; // Initializing the condition variables to false.

    /*
     * The syntax below helps to take
     * the value entered into the email section
     * by the client, converts to an array and 
     * check for the presence of the @ symbol
     * and the dot (.).
     */
    let emailT = email.value.split("");
    let syb = false, dot = false;
    for (let i = 0; i < emailT.length;i++) {
        if (emailT[i] == '@') {
            syb = true;
        }
        else if (emailT[i] == '.') {
            dot = true;
        }
    }
    if (syb !== true && dot !== true) { // turns the email text input border color to red if condition not satisfied
        button.style.display = 'none'
        email.style.borderColor = `red`;
        email.style.borderStyle = `solid`;
    }
    else {// turns the email text input border color to black if condition satisfied
        email.style.borderColor = `black`;
        em = true;
    }
    /*
     * The below lines of code performs the same
     * actions as shown in the immediat conditional
     * statements above
     */
    if (pass1.value.length < 8 || pass2.value.length < 8) {
        pass1.style.borderColor = `red`;
        pass1.style.borderStyle = `solid`;
        pass2.style.borderColor = `red`;
        pass2.style.borderStyle = `solid`;
        button.style.display = 'none'
    }
    else {
        pass2.style.borderColor = `black`;
        pass1.style.borderColor = `black`;
        ps = true;
    }
    if (fName.value == "") {
        fName.style.borderColor = `red`;
        fName.style.borderStyle = `solid`;
        button.style.display = 'none'
    }
    else {
        fName.style.borderColor = `black`;
        fN = true;
    }
    if (sName.value =="") {
        sName.style.borderColor = `red`;
        sName.style.borderStyle = `solid`;
        button.style.display = 'none'
    }
    else {
        sName.style.borderColor = `black`;
        sN = true;
    }
    if (mName.value == "") {
        mName.style.borderColor = `red`;
        mName.style.borderStyle = `solid`;
        button.style.display = 'none'
    }
    else {
        mName.style.borderColor = `black`;
        mN = true;
    }
    if (dob.value == "") {
        dob.style.borderColor = `red`;
        dob.style.borderStyle = `solid`;
        button.style.display = 'none'
    }
    else {
        dob.style.borderColor = `black`;
        db = true;
    }
    if (sex.value == "") {
        sex.style.borderColor = `red`;
        sex.style.borderStyle = `solid`;
        button.style.display = 'none'
    }
    else {
        sex.style.borderColor = `black`;
        se = true;
    }
    if (pNum.value == "") {
        pNum.style.borderColor = `red`;
        pNum.style.borderStyle = `solid`;
        button.style.display = 'none'
    }
    else {
        pNum.style.borderColor = `black`;
        pN = true;
    }
    if (addrss.value == "") {
        addrss.style.borderColor = `red`;
        addrss.style.borderStyle = `solid`;
        button.style.display = 'none'
    }
    else {
        addrss.style.borderColor = `black`;
        ad = true;
    }
    if (nation.value == "") {
        nation.style.borderColor = `red`;
        nation.style.borderStyle = `solid`;
        button.style.display = 'none'
    }
    else {
        nation.style.borderColor = `black`;
        na = true;
    }
    if (lang.value == "") {
        lang.style.borderColor = `red`;
        lang.style.borderStyle = `solid`;
        button.style.display = 'none'
    }
    else {
        lang.style.borderColor = `black`;
        la = true;
    }

    // CHECKING ALL COMPONENT'S STATUS
    if (sN == true && fN == true && mN == true && em == true && ps == true && db==true && se==true && pN==true && ad==true && na==true && la==true) {
        button.style.display = "block"; // Activates the Submit button
    }
}