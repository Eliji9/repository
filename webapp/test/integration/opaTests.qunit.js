/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"congid/congid/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});