import validator from "validator";

class ValidatorUtil {

     validateEmail(email) {
    if (validator.isEmail(email)) {
       return true;
      } else {
       return false;
      }
    }

    validatePassword(password) {
        
        if (validator.isStrongPassword(password, {
            minLength: 6, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })){
            return true
        }
        else {
            return false
        }
    }

    validateName(name) {
        
        if(name === undefined  || name === null || validator.isEmpty(name, {
            ignore_whitespace:true
        })) {
        return false;
        }
        else {
            return true;
        }
    }
}
export default new ValidatorUtil();

