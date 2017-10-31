_Path     = __dirname + "/";
var _require  = require(_Path + '../system/autoload.js');
var _autoload = new _require();
_App         = null ;
_Response    = null;
_Request     = null;
_Setup       = new _autoload.setup();

//--------------------------set path folder------------------------------------------;
_F_controler = _Path + ".." + _Setup._F_controler;
_F_view      = _Path + ".." + _Setup._F_view;
_F_helpper   = _Path + ".." + _Setup._F_helpper;
_F_libraly   = _Path + ".." + _Setup._F_libraly;
_F_https     = _Path + ".." + _Setup._F_https;

//--------------------------!set path folder--------------------------------------------;

_App         = new _autoload.express();
_Phoenix     = new _autoload.phoenix();
_Route       = new _autoload.route();
_Http        = new _autoload.http();
_Controller  = new _autoload.controller();
//-----------------------------------------------Add custom route---------------------------------;
require(_F_https + "route.js");
//-----------------------------------------------!Add custom route---------------------------------;