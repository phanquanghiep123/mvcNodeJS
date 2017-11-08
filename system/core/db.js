var driver;
switch(_Config.database.driver) {
    case "mysql":
        driver = require("./drivers/mysql");
        break;
    case "mogo":
        driver = require("./drivers/mogo");
        break;
    default:
        driver = require("./drivers/sqlsever");
}
var  Db = driver;
module.exports = Db;