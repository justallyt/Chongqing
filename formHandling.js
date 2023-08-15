
/* Form Validation and Handling */
const nameEl = document.querySelector('#name')
const emailEl = document.querySelector('#email')
const companyEl = document.querySelector('#company')
const phoneEl = document.querySelector("#phone")
const message = document.querySelector('#message')

const form = document.querySelector('#enroll-form')
/* Utility functions */
       const isRequired = val => val === '' ? false : true

       const isEmailValid = (email) => {
               const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               return regex.test(email)
       }
      const isPhoneValid = (phone) => {
            var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
            return regex.test(phone);
      }
// end of utilities

//Error Handling  
    const showError = (input, message) => {
            const formField = input.parentElement;
            formField.classList.remove('success');
            formField.classList.add('error')

            const error = formField.querySelector('small');
            error.innerText = message;
    }
    const showSuccess = (input) => {
            const formField = input.parentElement;

            formField.classList.remove('error');
            formField.classList.add('success');

            const error = formField.querySelector('small');
            error.innerText = ''
    }
 
    //validate full name input
    const checkName = () => {
            let valid = false;
            const user_name = nameEl.value.trim();

            if(!isRequired(user_name)){
                   showError(nameEl, 'Please enter your name.')
            }else{
                   showSuccess(nameEl);
                   valid = true;
            }
            return valid;
    }
    //validate email input
    const checkEmail = () => {
            let valid = false;
            const email_address = emailEl.value.trim();

            if(!isRequired(email_address)){
                    showError(emailEl, 'Please enter your email')
            }else if (!isEmailValid(email_address)){
                    showError(emailEl, 'Please enter a valid email address')
            }else{
                   showSuccess(emailEl);
                   valid = true;
            }
            return valid;
    }

    //validate company input
    const checkCompany = () => {
            let valid = false;
            const company_name = companyEl.value.trim();

            if(!isRequired(company_name)){
                   showError(companyEl, 'Please enter the company you represent')
            }else{
                   showSuccess(companyEl);
                   valid = true
            }
            return valid;
    }
    const checkPhoneNumber = () => {
            let valid = false;
          
            const phone_number = phoneEl.value.trim();

            if(!isRequired(phone_number)){
                   showError(phoneEl, 'Please enter a phone number')
            }else if(!isPhoneValid(phone_number)){
                    showError(phoneEl, 'Please enter a valid phone number')
            }else{
                   showSuccess(phoneEl);
                   valid = true
            }
            return valid;
    }


form.addEventListener('input', (e) => {
        switch(e.target.id){
              case 'name' :
                    checkName();
                    break;
              case 'email': 
                      checkEmail();
                      break;
               case 'company':
                      checkCompany();
                      break;
                case 'phone':
                    checkPhoneNumber();
                    break;
        }
})


//Submit Form
$(document).ready(() => {
    $('#enroll-form').submit(function(e){
        e.preventDefault();
        
       //validate forms
       let isNameOkay = checkName(),
              isEmailOkay = checkEmail(),
              isCompanyOkay = checkCompany(),
              isPhoneOkay = checkPhoneNumber();

       let isEverythingOkay = isNameOkay && isEmailOkay && isCompanyOkay && isPhoneOkay;
       
       if(isEverythingOkay){
           $.ajax({
               type: "POST",
               url: 'sendmail.php',
               data: $(this).serialize(),
               success: data => $('#result').html(data).fadeIn()
           }).done(function(){
               $(this).find("input").val("");
               $("#enroll-form").trigger('reset');
               setTimeout(()=> {
                   $('#result').fadeOut();
               }, 3000)
           })
       }
    })
})


