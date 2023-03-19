/**
 * File Name: facade.js
 *
 * Revision History:
 *       Stefan Kovacevic, 2021-04-21 : Created
 */

function centerPage(){
   $("#loginPage").attr('align','center');
}

function addNewUser(){

   if(doValidate_frmAddUser()) {

      var username = $("#txtNewUsername").val();
      var password = $("#txtNewPassword").val();
      var name = $("#txtFirstName").val();
      var lastname = $("#txtLastName").val();
      var address = $("#txtAddress").val();
      var city = $("#txtCity").val();
      var province = $("#txtProvince").val();
      var postalCode = $("#txtPostalCode").val();
      var phoneNumber = $("#txtPhoneNumber").val();
      var email = $("#txtEmail").val();

      var options = [username, password, name, lastname, address, city, province, postalCode, phoneNumber, email];

      function callback() {
         console.info("Success: Record inserted successfully");
      }

      User.insert(options, callback);

      alert("New user added successfully");
      clearloginForm();
      $(location).prop('href', '#loginPage');
      clearAddUserForm();
   }
}

function checkIfUserExists(){
   $("#message").html("");

   var username = $("#txtUsername").val();
   var password = $("#txtPassword").val();

   var options = [];

   function callback(tx, results) {
      var htmlCode = "";

      for (var i = 0; i < results.rows.length; i++) {
         var row = results.rows[i];

         if (username === row['userName']) {

            console.info(`id: ${row['customerID']} userName: ${row['userName']} firstname: ${row['name']} address: ${row['address']} `);

            if (password === row['password']) {

               localStorage.setItem("customerID", row['customerID'])
               alert("Welcome! " + row['name'] + " " + row['lastName']);
               $(location).prop('href', "#homePage");


               return;

            }

            else{

               $("#message").html("Invalid password!");
               return;
            }


         }
      }
      $("#message").html("User doesn't exist!");

   }
   User.selectAll(options,callback);
}
function toggleAddForm(){

   var isCarChecked = $("#radCar").prop("checked");

   if (isCarChecked == true) {

      $("#carDetails").show();
      $("#motorcycleDetails").hide();
      $("#frmAddCarAd").trigger("reset");
      var validator = $("#frmAddCarAd").validate();
      validator.resetForm();
   }
   else{

      $("#motorcycleDetails").show();
      $("#carDetails").hide();

      $("#frmAddMotorcycleAd").data('validator').resetForm();
   }

}

function addCarAdvertisment(){

   if (doValidate_frmAddCarAd()) {


      var customerID = localStorage.getItem("customerID");
      var make = $("#txtMakeCar").val();
      var model = $("#txtModelCar").val();
      var year = $("#txtYearCar").val();
      var kilometers = $("#txtKilometers").val();
      var price = $("#txtPriceCar").val();
      var image = $("#img").val();
      var driveTrain = "";
      if ($("#radFWD").prop("checked")) {

         driveTrain = "Forward Wheel Drive";
      }
      else if($("#radRWD").prop("checked")){
         driveTrain = "Rear Wheel Drive";
      }
      else{
         driveTrain = "All Wheel Drive";
      }
      var transmission = $("#txtTransmission").val();
      var fuelType = $("#skFuelTypeAdd").val();
      var description = $("#txtDescriptionAdd").val();

      var options = [customerID, make, model, year, kilometers, driveTrain, transmission, fuelType, description,image,price];

      function callback() {
         console.info("Success: Record inserted successfully");
      }

      Car.insert(options, callback);
      window.alert("Car Advertisement added succesfully!");
      clearCarForm();


   }
}

function getCarAds() {
   var options = [];
   var lv = $("#advertisementsList");
   lv = lv.empty();
   lv.listview("refresh");

   function callback(tx, results) {
      var htmlCode = "<h1 class='center'>List Of Cars For Sale</h1>";

      for (var i = 0; i < results.rows.length; i++) {
         var row = results.rows[i];

         var image = row['image'];



         console.info(`model: ${row['model']} make: ${row['make']} year: ${row['year']}`);

         htmlCode += "<li><a data-role='button' data-row-carID=" + row['carID'] + " data-row-sellerID=" + row['customerID'] + " href='#'>" +
             "<h1>Car: " + row['year'] + " "  + row['make'] + " " +row['model'] + "</h1>" +
             "<p>Mileage: " + row['kilometers'] + " kilometers" + "</p>" +
             "<p>Description: " + row['description'] + "  </p>" +
             "<p style='font-weight: bold'><i>Price: " + row['price'] + "$" + "</i></p>" +
             "</a></li>";
      }
      var lv = $("#advertisementsList");
      lv = lv.html(htmlCode);
      lv.listview("refresh");


      function clickHandler(){
         localStorage.setItem("carID", $(this).attr("data-row-carID"));
         localStorage.setItem("sellerID", $(this).attr("data-row-sellerID"));
         $(location).prop('href', "#viewAdsInPageCar");
      }

      $("#advertisementsList a").on("click", clickHandler);

   }

   Car.selectAll(options,callback);


}

function addMotorcycleAdvertisment() {


   if (doValidate_frmAddMotorcycle()) {


      console.info("form is valid");
      var customerID = localStorage.getItem("customerID");
      var stockNumber = $("#txtStockNumber").val();
      var make = $("#txtMakeMotorcycle").val();
      var model = $("#txtModelMotorcycle").val();
      var year = $("#txtYearMotorcycle").val();
      var kilometers = $("#txtKilometersMotorcycle").val();
      var engineSize = $("#txtEngineSizeMotorcycle").val();
      var description = $("#txtDescriptionAddMotorcycle").val();
      var price = $("#txtPriceMotorcycle").val();

      var options = [customerID, stockNumber, make, model, year, kilometers, engineSize,description,price];

      function callback() {
         console.info("Success: Record inserted successfully");
      }

      Motorcycle.insert(options, callback);
      window.alert("Motorcycle Advertisement added successfully!");
      clearMotorcycleForm();


   }
}


function getMotorcycleAds() {

   var options = [];
   var lv = $("#advertisementsList");
   lv = lv.empty();
   lv.listview("refresh");

   function callback(tx, results) {
      var htmlCode = "<h1 class='center'>List Of Motorcycles For Sale</h1>";

      for (var i = 0; i < results.rows.length; i++) {
         var row = results.rows[i];


         console.info(`model: ${row['model']} make: ${row['make']} year: ${row['year']}`);

         htmlCode += "<li><a data-role='button' data-row-motorcycleID=" + row['motorcycleID'] + " data-row-sellerID=" + row['customerID'] + " href='#'>" +
             "<h1>Motorcycle: " + row['year'] + " "  + row['make'] + " " +row['model'] + "</h1>" +
             "<p>Mileage: " + row['kilometers'] + "</p>" +
             "<p>Description: " + row['description'] + "</p>" +
             "<p style='font-weight: bold'><i>Price: " + row['price'] + "$" + "</i></p>" +
             "</a></li>";
      }
      var lv = $("#advertisementsList");
      lv = lv.html(htmlCode);
      lv.listview("refresh");

      function clickHandler(){
         localStorage.setItem("motorcycleID", $(this).attr("data-row-motorcycleID"));
         localStorage.setItem("sellerID", $(this).attr("data-row-sellerID"));

         $(location).prop('href', "#viewAdsInPageMotorcycle");
      }

      $("#advertisementsList a").on("click", clickHandler);

   }

   Motorcycle.selectAll(options,callback);

}


function viewMoreAdsCar() {

   // var id = $("#txtId").val();
   var id = localStorage.getItem("carID");

   var options = [id];

   function callback(tx, results) {
      var row = results.rows[0];
      console.info(`id: ${row['carID']} make: ${row['make']} model: ${row['model']} year: ${row['year']} price: ${row['price']}`);

      var yearMakeModel = row['year'] + " " + row['make'] + " " + row['model'];
      $("#carYearMakeModelInfo").html("<b>Brand: "+ yearMakeModel+ "</b>");
      $("#kilometersInfo").html("Kilometers: " +row['kilometers']);
      $("#driveTrainInfo").html("Drive Train: " +row['driveTrain']);
      $("#transmissionInfo").html("Transmission: " +row['transmission']);
      $("#fuelTypeInfo").html("Fuel Type: " +row['fuelType']);
      $("#priceInfo").html("Price Info: " +row['price']);
      $("#descriptionInfo").html("Description: " +row['description']);


   }

   Car.select(options, callback);

   var sellerID = localStorage.getItem("sellerID");

   var optionsUser = [sellerID];

   function callbackUser(tx, results) {
      var rowUser = results.rows[0];


      var sellerName = rowUser['name'] + " " + rowUser['lastName'];
      $("#sellerNameCar").html("<b>Name: "+ sellerName+ "</b>");
      $("#sellerCityandProvinceCar").html("City and Province: " +rowUser['city'] + ", " + rowUser['province']);
      $("#sellerPhoneNumber").html("Phone Number: " +rowUser['phoneNumber']);
      $("#sellerEmail").html("Email: " +rowUser['email']);


   }

   User.select(optionsUser, callbackUser);
}

function viewMoreAdsMotorcycle(){

   // var id = $("#txtId").val();
   var id = localStorage.getItem("motorcycleID");

   var options = [id];

   function callback(tx, results) {
      var row = results.rows[0];
      console.info(`id: ${row['motorcycleID']} make: ${row['make']} model: ${row['model']} year: ${row['year']} price: ${row['price']}`);

      var yearMakeModel = row['year'] + " " + row['make'] + " " + row['model'];
      $("#motorcycleYearMakeModelInfo").html("<b>Brand: "+ yearMakeModel+ "</b>");
      $("#stockNumberInfo").html("Stock Number: " +row['stockNumber']);
      $("#kilometersMotorcycleInfo").html("Kilometers: " +row['kilometers']);
      $("#engineSizeInfo").html("Engine Size: " +row['engineSize']);
      $("#priceMotorcycleInfo").html("Price: " +row['price']);
      $("#descriptionMotorcycleInfo").html("Description: " +row['description']);


   }

   Motorcycle.select(options, callback);

   var sellerID = localStorage.getItem("sellerID");

   var optionsUser = [sellerID];

   function callbackUser(tx, results) {
      var rowUser = results.rows[0];

      var sellerName = rowUser['name'] + " " + rowUser['lastName'];
      $("#sellerNameMotorcycle").html("<b>Name: "+ sellerName+ "</b>");
      $("#sellerCityandProvinceMotorcycle").html("City and Province: " +rowUser['city'] + ", " + rowUser['province']);
      $("#sellerPhoneNumberMotorcycle").html("Phone Number: " +rowUser['phoneNumber']);
      $("#sellerEmailMotorcycle").html("Email: " +rowUser['email']);


   }

   User.select(optionsUser, callbackUser);
}

function updateCar(){


   var id = localStorage.getItem("carID");

   var options = [id];

   function callback(tx, results) {
      var row = results.rows[0];

      $("#txtMakeCarModify").val(row['make']);
      $("#txtModelCarModify").val(row['model']);
      $("#txtYearCarModify").val(row['year']);
      $("#txtKilometersCarModify").val(row['kilometers']);

      var driveTrain = row['driveTrain'];
      if (driveTrain === "Forward Wheel Drive") {
         $("#radFWDModify").trigger("click");
         $("#radFWDModify").checkboxradio("refresh");
      }
      else if (driveTrain === "Rear Wheel Drive") {
         $("#radRWDModify").trigger("click");
         $("#radRWDModify").checkboxradio("refresh");
      }
      else {

         $("#radAWDModify").trigger("click");
         $("#radAWDModify").checkboxradio("refresh");

      }
      $("#txtTransmissionModify").val(row['transmission']);

      var fuelType = row['fuelType'];

      if (fuelType === "Gasoline") {
         $("#fuelTypeModify").prop("selectedIndex", 0);
         $("#fuelTypeModify").selectmenu("refresh");
      }
      else{
         $("#fuelTypeModify").prop("selectedIndex", 1);
         $("#fuelTypeModify").selectmenu("refresh");
      }

      $("#txtDescriptionModify").val(row['description']);
      $("#txtPriceCarModify").val(row['price']);
      $("#imgModify").val(row['img']);


   }

   Car.select(options, callback);


}

function updateCarAd (){


   if(doValidate_frmAddCarAdModify()){

      var make = $("#txtMakeCarModify").val();
      var model = $("#txtModelCarModify").val();
      var year = $("#txtYearCarModify").val();
      var kilometers = $("#txtKilometersCarModify").val();
      var driveTrain = "";
      if ($("#radFWDModify").prop("checked")) {

         driveTrain = "Forward Wheel Drive";
      }
      else if($("#radRWDModify").prop("checked")){
         driveTrain = "Rear Wheel Drive";
      }
      else{
         driveTrain = "All Wheel Drive";
      }
      var transmission = $("#txtTransmissionModify").val();
      var fuelType = $("#fuelTypeModify").val();
      var description = $("#txtDescriptionModify").val();
      var price = $("#txtPriceCarModify").val();
      var carID = localStorage.getItem("carID");


      var options = [make, model, year, kilometers,
         driveTrain,transmission,fuelType,description, price, carID];
      function callback() {
         console.info("Updated successfully");
      }
      Car.update(options,callback);
      alert("Advertisement updated successfully");

      $(location).prop('href', '#viewAdsInPageCar');
   }
   else{

      console.info("Update is invalid");
   }


}

function updateMotorcycle(){
   var id = localStorage.getItem("motorcycleID");

   var options = [id];

   function callback(tx, results) {
      var row = results.rows[0];

      $("#txtStockNumberModify").val(row['stockNumber']);
      $("#txtMakeMotorcycleModify").val(row['make']);
      $("#txtModelMotorcycleModify").val(row['model']);
      $("#txtYearMotorcycleModify").val(row['year']);
      $("#txtKilometersMotorcycleModify").val(row['kilometers']);
      $("#txtEngineSizeMotorcycleModify").val(row['engineSize']);
      $("#txtDescriptionAddMotorcycleModify").val(row['description']);
      $("#txtPriceMotorcycleModify").val(row['price']);


   }

   Motorcycle.select(options, callback);
}


function updateMotorcycleAd() {


   if(doValidate_frmAddMotorcycleAdModify()){

      var stockNumber = $("#txtStockNumberModify").val();
      var make = $("#txtMakeMotorcycleModify").val();
      var model = $("#txtModelMotorcycleModify").val();
      var year = $("#txtYearMotorcycleModify").val();
      var kilometers = $("#txtKilometersMotorcycleModify").val();
      var engineSize = $("#txtEngineSizeMotorcycleModify").val();
      var description = $("#txtDescriptionAddMotorcycleModify").val();
      var price = $("#txtPriceMotorcycleModify").val();
      var motorcycleID = localStorage.getItem("motorcycleID");


      var options = [stockNumber,make, model, year, kilometers,
         engineSize,description,price, motorcycleID];

      function callback() {

         console.info("Updated successfully");
      }

      Motorcycle.update(options,callback);
      alert("Advertisement updated successfully");

      $(location).prop('href', '#viewAdsInPageMotorcycle');
   }
   else{

      console.info("Update is invalid");
   }

}

function showUsers(){
   var options = [];
   var lv = $("#userList");
   lv = lv.empty();
   lv.listview("refresh");

   function callback(tx, results) {
      var htmlCode = "<h1 class='center'>List Of Users</h1>";

      for (var i = 0; i < results.rows.length; i++) {
         var row = results.rows[i];


         console.info(`name: ${row['name']} lastName: ${row['lastName']} id: ${row['customerID']}`);

         htmlCode += "<li><a data-role='button' data-row-customerIDUpdate=" + row['customerID'] +" href='#'>" +
             "<h1>Name : " + row['name'] + " "  + row['lastName'] + "</h1>" +
             "<p>CustomerID: " + row['customerID'] + "</p>" +
             "<p>Username : " + row['userName'] + "</p>" +
             "<p>Phone Number: " + row['phoneNumber'] + "</p>" +
             "<p>Email: " + row['email'] + "</p>" +
             "</a></li>";
      }
      var lv = $("#userList");
      lv = lv.html(htmlCode);
      lv.listview("refresh");

      function clickHandler(){
         localStorage.setItem("updateCustomerID", $(this).attr("data-row-customerIDUpdate"));

         $(location).prop('href', "#registerUserModify");
      }

      $("#userList a").on("click", clickHandler);

   }

   User.selectAll(options,callback);

}


function clearAddUserForm(){

      $("#txtNewUsername").val("");
      $("#txtNewPassword").val("");
      $("#txtFirstName").val("");
      $("#txtLastName").val("");
      $("#txtAddress").val("");
      $("#txtCity").val("");
      $("#txtProvince").val("");
      $("#txtPostalCode").val("");
      $("#txtPhoneNumber").val("");
      $("#txtEmail").val("");
}

function clearloginForm(){
   $("#txtUsername").val("");
   $("#txtPassword").val("");
   $("#message").html("");
}

function updateUsers(){
   var id = localStorage.getItem("updateCustomerID");

   var options = [id];

   function callback(tx, results) {
      var row = results.rows[0];

      $("#txtNewUsernameModify").val(row['userName']);
      $("#txtNewPasswordModify").val(row['password']);
      $("#txtFirstNameModify").val(row['name']);
      $("#txtLastNameModify").val(row['lastName']);
      $("#txtAddressModify").val(row['address']);
      $("#txtProvinceModify").val(row['province']);
      $("#txtCityModify").val(row['city']);
      $("#txtPostalCodeModify").val(row['postalCode']);
      $("#txtPhoneNumberModify").val(row['phoneNumber']);
      $("#txtEmailModify").val(row['email']);


   }

   User.select(options, callback);
}

function updateUser(){

   if(doValidate_frmAddUserModify()){

      var username = $("#txtNewUsernameModify").val();
      var password= $("#txtNewPasswordModify").val();
      var name = $("#txtFirstNameModify").val();
      var lastname = $("#txtLastNameModify").val();
      var address = $("#txtAddressModify").val();
      var city = $("#txtCityModify").val();
      var province = $("#txtProvinceModify").val();
      var postalCode = $("#txtPostalCodeModify").val();
      var phoneNumber = $("#txtPhoneNumberModify").val();
      var email = $("#txtEmailModify").val();
      var customerID = localStorage.getItem("updateCustomerID");


      var options = [password, name, lastname, address,
         city,province, postalCode,phoneNumber,email, customerID];


      function callback() {

         console.info("User Updated successfully");
      }

      User.update(options,callback);
      alert("User updated successfully");

      $(location).prop('href', '#modifyUsers');
   }
   else{

      console.info("Update is invalid");
   }
}

function deleteUserAndAds(){

   var customerID = localStorage.getItem("customerID");
   var updateCustomerID = localStorage.getItem("updateCustomerID");
   if (customerID === updateCustomerID) {

      alert("You cannot delete an active User!");
   }
   else{
      if (confirm("Really want to delete user?")) {
         try{
            console.info("Dropping user....")
            var id = localStorage.getItem("updateCustomerID");
            var options = [id];

            function callback() {
               console.info("Record deleted successfully");

            }

            User.delete(options, callback);

            console.info("Dropping car ads....")
            var id2 = localStorage.getItem("updateCustomerID");
            var options2 = [id2];

            function callback2() {
               console.info("Record deleted successfully");

            }

            User.deleteAllCars(options2, callback2);


            console.info("Dropping car ads....")
            var id3 = localStorage.getItem("updateCustomerID");
            var options3 = [id3];

            function callback3() {
               console.info("Record deleted successfully");

            }

            User.deleteAllMotorcycles(options3, callback3);
         }
         catch (e){
            console.error("Error: (Fatal) Error in deleting User");
         }

         window.alert("User and all their ads are deleted!")
         $(location).prop('href', '#modifyUsers');

      } else {

      }


   }
}

function clearCarForm(){
   $("#txtMakeCar").val("");
   $("#txtModelCar").val("");
   $("#txtYearCar").val("");
   $("#txtKilometers").val("");
   $("#radFWD").trigger("");
   $("#radFWD").checkboxradio("refresh");

   $("#txtTransmission").val("");

   $("#skFuelTypeAdd").prop("selectedIndex", 0);
   $("#skFuelTypeAdd").selectmenu("refresh");


   $("#txtDescriptionAdd").val("");
   $("#txtPriceCar").val("");
   $("#img").val("");
}

function clearMotorcycleForm(){

   $("#txtStockNumber").val("");
   $("#txtMakeMotorcycle").val("");
   $("#txtModelMotorcycle").val("");
   $("#txtYearMotorcycle").val("");
   $("#txtKilometersMotorcycle").val("");
   $("#txtEngineSizeMotorcycle").val("");
   $("#txtDescriptionAddMotorcycle").val("");
   $("#txtPriceMotorcycle").val("");
}

function deleteCarAd(){

   var customerID = localStorage.getItem("customerID");
   var sellerID = localStorage.getItem("sellerID");
   var carID = localStorage.getItem("carID");

   if (customerID !== sellerID) {
      alert("You cannot delete an advertisement that you did not create!")
   }

   else {

      if (confirm("Really want to delete ad?")) {
         var options = [carID];

         function callback() {
            console.info("Record deleted successfully");
            $(location).prop('href', '#viewAdsPage');

         }

         alert("Ad deleted successfully");
         Car.delete(options, callback);
      }
      else{

      }

   }
}

function deleteMotorcycleAd(){
   var customerID = localStorage.getItem("customerID");
   var sellerID = localStorage.getItem("sellerID");
   var motorcycleID = localStorage.getItem("motorcycleID");

   if (customerID !== sellerID) {
      alert("You cannot delete an advertisement that you did not create!")
   }

   else {

      if (confirm("Really want to delete ad?")) {
         var options = [motorcycleID];

         function callback() {
            console.info("Record deleted successfully");
            $(location).prop('href', '#viewAdsPage');

         }

         alert("Ad deleted successfully");
         Motorcycle.delete(options, callback);
      }

   }
}
