const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{0,10}$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexUsername = /^[A-Za-z0-9][A-Za-z0-9--\s]*$/;
const regexNameAndLastName = /^[a-zA-ZÀ-ÿ\s]{1,25}$/;
const regexLocation = /^[a-zA-ZÀ-ÿ\s]{1,25}$/;
const regexPhone = /^\+\d{2}-\d{3}-\d{3}-\d{4}$/; 
const validations = (values) => {

    let errors = {};
     if (!values.name) {
        errors.name = "Please, insert a name";
    } else if (!regexNameAndLastName.test(values.name)) {
        if (values.name.length > 25) {
            errors.name = 'The name cannot be longer than 25'
        } else {
            errors.name =
                "The name can only have letters and spaces ";
        }
    }

    if (!values.lastName) {
        errors.lastName = "Please, insert a lastName";
    } else if (!regexNameAndLastName.test(values.lastName)) {
        if (values.lastName.length > 25) {
            errors.lastName = 'The lastName cannot be longer than 25'
        }
        else {
            errors.lastName =
                "The LastName can only have letters and spaces";
        }
    }

    if (!values.email) {
        errors.email = "Please, insert a email";
    } else if (!regexEmail.test(values.email)) {
        errors.email = 'Format email invalid';
    }

    if (!values.userName) {
        errors.userName = "Please, insert a userName";
    } else if (values.userName.length >= 8) {
        if (!regexUsername.test(values.userName)) {
            errors.userName = 'The username can only start with letters or numbers';
        }
    }
    else{
        errors.userName = ' Username must contain between 8 and 20 characters '
    }

    if (!values.password) {
        errors.password = "Please, insert a password";
    } else if (!regexPassword.test(values.password)) {
        errors.password = 'Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number, and one special character'
    }

    if (!values.location) {
        errors.location = "Please, insert a location";
    } else if (!regexLocation.test(values.location) || values.location.length > 15) {
        if (values.location.length > 10) {
            errors.location = 'The name cannot be longer than 15'
        } else {
            errors.location =
                "The name can only have letters and spaces ";
        }
    }

    if (!values.age) {
        errors.age = "Please, insert a age";
    } else if (parseInt(values.age)) {
        const ageNum = +values.age;
        if ((ageNum % 1) != 0) {
            errors.age = ' The age cannot be decimal';
        } else {
            if (ageNum > 90 || ageNum < 18) {
                errors.age = 'The Age only of 18-90';
            }
        }
    } else {
        errors.age = 'The Age only number';
    }

    if (!values.genres) {
        errors.genres = "Please, insert a genres";
    }


    if (!values.phone) {
        errors.phone = "Please, insert a phone";
    } else if (!regexPhone.test(values.phone)) {
        errors.phone = 'invalid Format phone';
    } 
    return errors;

}
export default validations;