/**
 * File Name: util.js
 *
 * Revision History:
 *       Stefan Kovacevic, 2021-04-21 : Created
 */

function doValidate_frmAddCarAd(){
    // 1. Retrieve the ref of the form
    var f = $("#frmAddCarAd");
    // 2. call validate() function on the form and pass validation rules as an object
    f.validate({
        rules: {
            txtMakeCar:{
                required: true

            },
            txtModelCar:{
                required: true

            },
            txtYearCar:{
                required: true,
                range: [1950, 2021]
            },
            txtKilometers:{
                required: true,
                range: [0, 999999]

            },
            txtTransmission:{
                required: true
            },
            txtPriceCar:{
                required:true,
                range: [0, 999999]
            }
        },
        messages: {
            txtMakeCar:{
                required: "Car make is required"

            },
            txtModelCar:{
                required: "Car model is required"
            },
            txtYearCar:{
                required: "Car year is required",
                range: "Please insert year between 1950-2021"
            },
            txtKilometers:{
                required: "Car Kilometers are required",
                range: "Please enter car kilometers up until 999 999 kms"
            },
            txtTransmission:{
                required: "Car transmission is required"
            },
            txtPriceCar:{
                required:"Price is required",
                range: "Price can only be up to 999 999 $"
            }
        }
    });
    // 3. return valid() on the form
    return f.valid();

}


function doValidate_frmAddMotorcycle(){
    // 1. Retrieve the ref of the form
    var f = $("#frmAddMotorcycleAd");
    // 2. call validate() function on the form and pass validation rules as an object
    f.validate({
        rules: {
            txtStockNumber:{
                required: true
            },
            txtMakeMotorcycle:{
                required: true
            },
            txtModelMotorcycle:{
                required: true
            },
            txtYearMotorcycle:{
                required: true,
                range: [1950,2021]
            },
            txtKilometersMotorcycle:{
                required: true,
                range: [1, 999999]
            },
            txtPriceMotorcycle:{
                required: true
            }

        },
        messages: {
            txtStockNumber:{
                required: "Stock Number is required"
            },
            txtMakeMotorcycle:{
                required: "Motorcycle make is required"
            },
            txtModelMotorcycle:{
                required: "Motorcycle model is required"
            },
            txtYearMotorcycle:{
                required: "Motorcycle year is required",
                range: "Must be within 1950 - 2021"
            },
            txtKilometersMotorcycle:{
                required: "Motorcycle Kilometers are required",
                range: "Must be within 1 - 999 999 kms"
            },
            txtPriceMotorcycle:{
                required: "Motorcycle price is required",
                range: "Must be within 0 - 999 999 $"
            }
        }
    });
    // 3. return valid() on the form
    return f.valid();

}

function doValidate_frmAddCarAdModify(){

    // 1. Retrieve the ref of the form
    var f = $("#frmAddCarAdModify");
    // 2. call validate() function on the form and pass validation rules as an object
    f.validate({
        rules: {
            txtMakeCarModify:{
                required: true

            },
            txtModelCarModify:{
                required: true

            },
            txtYearCarModify:{
                required: true,
                range: [1950, 2021]
            },
            txtKilometersModify:{
                required: true,
                range: [0, 999999]


            },
            txtTransmissionModify:{
                required: true
            },
            txtPriceCarModify:{
                required:true,
                range: [0, 999999]
            }
        },
        messages: {
            txtMakeCarModify:{
                required: "Car make is required"

            },
            txtModelCarModify:{
                required: "Car model is required"
            },
            txtYearCarModify:{
                required: "Car year is required",
                range: "Year can only be between 1950-2021"
            },
            txtKilometersModify:{
                required: "Car Kilometers are required",
                range: "Kilometers must be within 1-999 999 kms"
            },
            txtTransmissionModify:{
                required: "Car transmission is required"
            },
            txtPriceCarModify:{
                required:"Price is required",
                range: "Must be between 0 - 999 999$"
            }
        }
    });
    // 3. return valid() on the form
    return f.valid();


}

function doValidate_frmAddMotorcycleAdModify() {
    // 1. Retrieve the ref of the form
    var f = $("#frmAddMotorcycleAdModify");
    // 2. call validate() function on the form and pass validation rules as an object
    f.validate({
        rules: {
            txtStockNumberModify:{
                required: true
            },
            txtMakeMotorcycleModify:{
                required: true
            },
            txtModelMotorcycleModify:{
                required: true
            },
            txtYearMotorcycleModify:{
                required: true,
                range: [1950,2021]
            },
            txtKilometersMotorcycleModify:{
                required: true,
                range: [1, 999999]
            },
            txtPriceMotorcycleModify:{
                required: true
            }

        },
        messages: {
            txtStockNumberModify:{
                required: "Stock Number is required"
            },
            txtMakeMotorcycleModify:{
                required: "Motorcycle make is required"
            },
            txtModelMotorcycleModify:{
                required: "Motorcycle model is required"
            },
            txtYearMotorcycleModify:{
                required: "Motorcycle year is required",
                range: "Must be within 1950 - 2021"
            },
            txtKilometersMotorcycleModify:{
                required: "Motorcycle Kilometers are required",
                range: "Must be within 1 - 999 999 kms"
            },
            txtPriceMotorcycleModify:{
                required: "Motorcycle price is required",
                range: "Must be within 0 - 999 999 $"
            }
        }
    });
    // 3. return valid() on the form
    return f.valid();

}

function doValidate_frmAddUser() {
    // 1. Retrieve the ref of the form
    var f = $("#newUserForm");
    // 2. call validate() function on the form and pass validation rules as an object
    f.validate({
        rules: {

            txtNewUsername:{
                required: true,
                // userNameCheck: true
            },
            txtNewPassword:{
                required: true
            },
            txtFirstName:{
                required: true,
                minlength: 2,
                maxlength: 15
            },
            txtLastName:{
                required: true,
                minlength: 2
            },
            txtAddress:{
                required: true
            },
            txtCity:{
                required: true

            },
            txtProvince:{
                required: true
            },
            txtPostalCode:{
                required: true,
                postalCodeCheck: true
            },
            txtPhoneNumber:{
                required: true,
                phoneNumberCheck: true
            },
            txtEmail:{
                required: true,
                email: true
            }
        },
        messages: {

            txtNewUsername:{
                required: "Username is required",
                // userNameCheck: "Username exists"
            },
            txtNewPassword:{
                required: "Password is required"
            },
            txtFirstName:{
                required: "First Name is required",
                minlength: "First Name must be at least 2 characters long",
                maxlength: "First Name cannot be more that 15 characters long"
            },
            txtLastName:{
                required: "Last Name is required"
            },
            txtAddress:{
                required: "Address is required"
            },
            txtCity:{
                required: "City is required"
            },
            txtProvince:{
                required: "Province is required"
            },
            txtPostalCode:{
                required: "Postal Code is required",
                postalCodeCheck: "Enter valid postal code format (N1N 1N1)"
            },
            txtPhoneNumber:{
                required: "Phone Number is required",
                phoneNumberCheck: "Enter valid phone number format (111-111-1111)"
            },
            txtEmail:{
                required: "Email is required",
                email: "Please enter a valid email"
            }
        }
    });
    // 3. return valid() on the form
    return f.valid();
}

function doValidate_frmAddUserModify() {
    // 1. Retrieve the ref of the form
    var f = $("#newUserFormModify");
    // 2. call validate() function on the form and pass validation rules as an object
    f.validate({
        rules: {

            txtNewUsernameModify:{
                required: true,
                // userNameCheck: true
            },
            txtNewPasswordModify:{
                required: true
            },
            txtFirstNameModify:{
                required: true,
                minlength: 2,
                maxlength: 15
            },
            txtLastNameModify:{
                required: true,
                minlength: 2
            },
            txtAddressModify:{
                required: true
            },
            txtCityModify:{
                required: true

            },
            txtProvinceModify:{
                required: true
            },
            txtPostalCodeModify:{
                required: true,
                postalCodeCheck: true
            },
            txtPhoneNumberModify:{
                required: true,
                phoneNumberCheck: true
            },
            txtEmailModify:{
                required: true,
                email: true
            }
        },
        messages: {

            txtNewUsernameModify:{
                required: "Username is required",
            },
            txtNewPasswordModify:{
                required: "Password is required"
            },
            txtFirstNameModify:{
                required: "First Name is required",
                minlength: "First Name must be at least 2 characters long",
                maxlength: "First Name cannot be more that 15 characters long"
            },
            txtLastNameModify:{
                required: "Last Name is required"
            },
            txtAddressModify:{
                required: "Address is required"
            },
            txtCityModify:{
                required: "City is required"
            },
            txtProvinceModify:{
                required: "Province is required"
            },
            txtPostalCodeModify:{
                required: "Postal Code is required",
                postalCodeCheck: "Enter valid postal code format (N1N 1N1)"
            },
            txtPhoneNumberModify:{
                required: "Phone Number is required",
                phoneNumberCheck: "Enter valid phone number format (111-111-1111)"
            },
            txtEmailModify:{
                required: "Email is required",
                email: "Please enter a valid email"
            }
        }
    });
    // 3. return valid() on the form
    return f.valid();
}

jQuery.validator.addMethod("postalCodeCheck",
    function (value, element){
        var r = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        return this.optional(element) || r.test(value);
    },
    "Enter valid postal code format"

);

jQuery.validator.addMethod("phoneNumberCheck",
    function (value, element){
        var r = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return this.optional(element) || r.test(value);
    },
    "Enter valid phone number format"

);



