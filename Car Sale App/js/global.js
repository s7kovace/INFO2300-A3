
/**
 * File Name: global.js
 *
 * Revision History:
 *       Stefan Kovacevic, 2021-04-21 : Created
 */
function loginPage_pageShow() {
    $("#message").html(" ");
    $("#txtUsername").val("");
    $("#txtPassword").val("");
    centerPage();
}

function btnAddUser_Click() {

    addNewUser();

}

function btnSignIn_Click() {
    checkIfUserExists();
}


function radCarOrMotorcycle_Click() {
    toggleAddForm();
}


function btnAddCarAd_Click() {
    addCarAdvertisment();
}

function viewAds_Pageshow() {
    $("#btnDisplayCars").click();
}

function btnDisplayCars_Click() {

    $("#btnDisplayMotorcycles").removeClass("ui-btn-active ui-state-persist");
    $("#btnDisplayCars").addClass("ui-btn-active ui-state-persist");
    getCarAds();

}


function btnDisplayMotorcycles_Click() {

    $("#btnDisplayCars").removeClass("ui-btn-active ui-state-persist");
    $("#btnDisplayMotorcycles").addClass("ui-btn-active ui-state-persist");
    getMotorcycleAds();
}


function btnAddMotorcycleAd_Click() {
    addMotorcycleAdvertisment();
}


function viewAdsInPageCar_PageShow() {
    viewMoreAdsCar();
}

function viewAdsInPageMotorcycle_PageShow() {
    viewMoreAdsMotorcycle();
}

function btnUpdate_Click() {

    $(location).prop('href', '#updateCarInformation');

}

function updateCarInformation_PageShow() {

    updateCar();
}
function updateMotorcycleInformation_PageShow(){
    updateMotorcycle();
}
function btnCancel_Click() {
    $(location).prop('href', '#viewAdsPage');
}

function btnAddAdModify_Click() {
    updateCarAd();
}


function btnAddMotorcycleAdModify_Click() {
    updateMotorcycleAd();
}

function btnUpdateMotorcycle_Click() {
    $(location).prop('href', '#updateMotorcycleInformation');
}

function modifyUsers_PageShow() {
    showUsers();
}


function registerUser_PageShow() {
    clearAddUserForm();
}

function btnGoBack_Click() {
    $(location).prop('href', '#loginPage');
}

function registerUserModify_PageShow() {
    updateUsers();
}

function btnGoBackLoginModify_Click() {

    $(location).prop('href', '#modifyUsers');
}


function btnUpdateUser_Click() {
    updateUser();
}

function btnDeleteModifyUser_Click() {
    deleteUserAndAds();
}

function btnDelete_Click() {
    deleteCarAd();
}

function btnDeleteMotorcycleClick() {
    deleteMotorcycleAd();
}

function signOut(){
    if (confirm("Really want to sign out?")) {

        window.alert("You have been signed out!");
        $(location).prop('href', '#loginPage');
    }
}

function init() {

    $("#test").on("click", test);
    $("#loginPage").on("pageshow", loginPage_pageShow);
    $("#btnAddUser").on("click", btnAddUser_Click);
    $("#btnSignIn").on("click", btnSignIn_Click);
    $("#btnAddAd").on("click", btnAddCarAd_Click);
    $("[name=radCarOrMotorcycle]").on("click", radCarOrMotorcycle_Click);
    $("#viewAdsPage").on("pageshow", viewAds_Pageshow);
    $("#btnDisplayCars").on("click", btnDisplayCars_Click);
    $("#btnDisplayMotorcycles").on("click", btnDisplayMotorcycles_Click);
    $("#btnAddMotorcycleAd").on("click", btnAddMotorcycleAd_Click);
    $("#viewAdsInPageCar").on("pageshow", viewAdsInPageCar_PageShow);
    $("#viewAdsInPageMotorcycle").on("pageshow", viewAdsInPageMotorcycle_PageShow);
    $("#updateCarInformation").on("pageshow", updateCarInformation_PageShow);
    $("#updateMotorcycleInformation").on("pageshow", updateMotorcycleInformation_PageShow);
    $("#btnUpdate").on("click", btnUpdate_Click);
    $("#btnUpdateMotorcycle").on("click", btnUpdateMotorcycle_Click);
    $("#btnCancel").on("click", btnCancel_Click);
    $("#btnCancelMotorcycle").on("click", btnCancel_Click);
    $("#btnAddAdModify").on("click", btnAddAdModify_Click);
    $("#btnAddMotorcycleAdModify").on("click", btnAddMotorcycleAdModify_Click);
    $("#modifyUsers").on("pageshow", modifyUsers_PageShow);
    $("#registerUser").on("pageshow", registerUser_PageShow);
    $("#btnGoBackLogin").on("click", btnGoBack_Click);
    $("#registerUserModify").on("pageshow", registerUserModify_PageShow);
    $("#btnGoBackLoginModify").on("click", btnGoBackLoginModify_Click);
    $("#btnAddUserModifyUser").on("click", btnUpdateUser_Click);
    $("#btnDeleteModifyUser").on("click", btnDeleteModifyUser_Click);
    $("#btnDelete").on("click", btnDelete_Click);
    $("#btnDeleteMotorcycle").on("click", btnDeleteMotorcycleClick);



}

function test(){

    $("#mainContent").show();
    $("#loginPage").hide();
}
function initDB(){
    try {
        DB.createDatabase();
        if (db) {
            console.info("Creating tables ... ");
            DB.createTables();
        }
        else {
            console.error("Error: Cannot create tables, Database does not exist!");
        }

    } catch (e) {
        console.error("Error: (Fatal) Error in initDB(), Can not proceed");
    }
}
$(document).ready(function () {
    init();
    initDB();
});
