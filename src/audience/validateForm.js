export default function validateInfo(values) {
    let errors = {};
    let phone="^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$"
  
    if (!values.name.trim()) {
      errors.name = 'name required';
    } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        errors.name = 'invalid';}


        if(!values.username.trim()){
            errors.name="User Name Required";

        }//else if (!/^[A-Za-z]+/.test(values.username.trim())) {
          //  errors.username = 'Enter a valid name';}


            //for email
            if (!values.email) {
                errors.email = 'Email required';
              } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = ' invalid';
              }


              //for password
              if (!values.password) {
                errors.password = 'Password is required';
              } else if (values.password.length < 6) {
                errors.password = 'Password needs to be 6 characters or more';
              }
              //for confirm password
              if (!values.confirmpassword) {
                errors.confirmpassword = 'Confirm your password';
              } else if (values.confirmpassword !== values.password) {
                errors.confirmpassword = 'Passwords do not match';
              }

              if(!values.phoneno){
                  errors.phoneno="Enter your phone number"
              }else if(!phone.test(values.phone)){
                  errors.phoneno="Valid"
              }

              if(!values.profession){
                  errors.profession='Enter your Profession'
              }//else if (!/^[A-Za-z]+/.test(values.profession.trim())) {
               // errors.profession = 'Text Only';
            //}

            if(!values.interest){
                errors.profession="Please select one"
            }
            return errors;

}