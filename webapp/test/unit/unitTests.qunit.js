/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"deltalight/com/mybankdetails/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
