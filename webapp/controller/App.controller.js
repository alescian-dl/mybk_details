sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("deltalight.com.mybankdetails.controller.App", {
        onInit() {
        },

        onOpenBankDetails: function () {

            if (!this.moreBankDetails) {
                this.moreBankDetails = this.loadFragment({
                    name: "deltalight.com.mybankdetails.view.fragments.MoreDetails"
                });
            }
            this.moreBankDetails.then(function (oDialog) {
                oDialog.open();
            })
        },

        onCloseBankDetails: function () {

            this.byId("moreBankDetails").close();
        }
    });
});