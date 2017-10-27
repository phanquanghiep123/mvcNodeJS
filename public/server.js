_Path     = __dirname + "/";
var require  = require(_Path + '../system/autoload.js');
var autoload = new require();
_App         = null ;
_Response    = null;
_Request     = null;
_Setup       = new autoload.setup();

//--------------------------set path folder------------------------------------------;
_F_controler = _Path + ".." + _Setup._F_controler;
_F_view      = _Path + ".." + _Setup._F_view;
_F_helpper   = _Path + ".." + _Setup._F_helpper;
_F_libraly   = _Path + ".." + _Setup._F_libraly;
_F_https     = _Path + ".." + _Setup._F_https;

//--------------------------!set path folder--------------------------------------------;

_App         = new autoload.express();
_Route       = new autoload.route();
_Http        = new autoload.http();
_Controller  = new autoload.controller();
