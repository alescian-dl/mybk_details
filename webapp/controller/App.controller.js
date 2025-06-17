sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("deltalight.com.mybankdetails.controller.App", {
        onInit() {

            if (navigator.language == 'es') {
                let i18nModel = this.getOwnerComponent().getModel("i18n_es");

                this.getOwnerComponent().setModel(i18nModel, "i18n");
            }
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