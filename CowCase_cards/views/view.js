import Cows from "../utils/guitarClass.js";

export default class View {
    constructor(controller) {
        const self = this;
        const snSearchForm = document.getElementById("snSearchForm");
        const registrationField = document.getElementById("registrationField");
        const searchPanel = document.getElementById("searchPanel");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const registrationnumber = document.getElementById("registrationnumber");
        const breed = document.getElementById("breed");
        const boothnumber = document.getElementById("boothnumber");
        const birthday = document.getElementById("birthday");
        const production = document.getElementById("production");
        const showAllCowsButton = document.getElementById("showAllCowsButton");
        const CowDialogForm = document.getElementById("CowDialogForm");
        const addCowButton = document.getElementById("addCowButton");
        const CowDialog = document.getElementById("CowDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenRegistrationField = document.getElementById("hiddenRegistrationField")
        const confirmDialog = document.getElementById("confirmDialog")
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");

        self.controller = controller;

        showAllCowsButton.onclick = function() {
            self.controller.showAllCows();
        }

        snSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.snSearch(registrationField.value);
        }

        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const optimalCow = new Cows(registrationnumber.value, breed.value, boothnumber.value, birthday.value, production.value);
            console.log(optimalCow)
            self.controller.search(optimalCow);
            searchPanel.classList.remove("searchPanelAnim");
        }

        panelText.onclick = function () {
            searchPanel.classList.add("searchPanelAnim");
        }

        closeCross.onclick = function () {
            searchPanel.classList.remove("searchPanelAnim");
        }

        // Dialog eventhandler 
        // Showmodal får knappen til at blive vist
        addCowButton.onclick = function () {
            CowDialogForm.reset();
            CowDialog.showModal();
        }

        // Knappen sættes til at kunne lukkes 
        cancelButton.onclick = function () {
            CowDialog.close();
        }
        
        // når formen er submittet, bliver informationen fra formen sendt til en metode (som ikke er lavet endnu) som et objekt
        CowDialog.onsubmit = function () {
            self.controller.newCow( {
                registrationnumber: document.getElementById("registrationnumberfield").value,
                breed: document.getElementById("breedfield").value,
                boothnumber: document.getElementById("boothnumberfield").value,
                birthday: document.getElementById("birthdayfield").value,
                production: document.getElementById("productionfield").value,
            }) 
        }

        searchResult.onclick = function (e) {
            if (e.target.nodeName === "BUTTON") {
                hiddenRegistrationField.value = e.target.id;
                confirmDialog.showModal();
            }
        }

        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confirmDialogForm.onsubmit = function () {
            self.controller.deleteCow(hiddenRegistrationField.value);
            self.controller.showAllCows();
        }
    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML=""; //resets result output element
        element.insertAdjacentHTML("beforeend", template);
    }

    snackbar(snackmessage) {
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackmessage;
        snackbar.className = "show";
        setTimeout(function () {
            snackbar.clas = snackbar.className.replace("show","");
        },3000);
    }

}