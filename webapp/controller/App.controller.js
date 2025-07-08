sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("deltalight.com.mybankdetails.controller.App", {
        onInit() {

            //let oData = { { 'name':'Alex', 'profile':'developer'}, true, "Hello", [] };

            //let oModel = new sap.ui.model.json.JSONModel();

            //oModel.setData(oData);
            //this.getView().setModel(oModel, "oBankDetails");

            this._setGlobalLanguage();

            let oProfileModel = new sap.ui.model.json.JSONModel(
                { profile: sap.ui.require.toUrl("deltalight/com/mybankdetails/images/profile.jpg") }
            );
            this.getView().setModel(oProfileModel);

        },

        onOpenBankDetails: function () {

            if (!this.moreBankDetails) {
                this.moreBankDetails = this.loadFragment({
                    name: "deltalight.com.mybankdetails.view.fragments.MoreDetails"
                });
            }

            this.moreBankDetails.then(function (oDialog) {
                oDialog.open();
            });

        },

        onCloseBankDetails: function () {

            this.byId("moreBankDetails").close();
        },

        _setGlobalLanguage: function () {

            let appLang;
            if (navigator.language == 'es') {
                appLang = "i18n_es";

            } else if (navigator.language == 'en') {
                appLang = "i18n";
            } else {
                appLang = "i18n";
            }

            let i18nModel = this.getOwnerComponent().getModel(appLang);
            this.getOwnerComponent().setModel(i18nModel, "i18n");

        }
    });
});