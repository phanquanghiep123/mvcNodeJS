function setup(argument) {
	// set folder.
	this._F_app       = "/application/";
	this._F_system    = "/system/";
	this._F_config    = "/config/";
	this._F_controler = this._F_app + "controllers/";
	this._F_views     = this._F_app + "views/";
	this._F_helper    = this._F_app + "helper/";
	this._F_library   = this._F_app + "library/";
	this._F_https     = this._F_app + "https/";
	// !set folder.
}
module.exports = setup;