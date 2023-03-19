/**
 * File Name: database.js
 *
 * Revision History:
 *       Stefan Kovacevic, 2021-04-21 : Created
 */

//global database object
var db;


//general purpose error handler
function errorHandler(error) {
    console.error("SQL error: " + error.message);
}
var DB = {
    createDatabase: function () {
        var shortName = "finalProjectDB";
        var version = "1.0";
        var displayName = "finalProjectDB";
        var dbSize = 2 * 1024 * 1024;
        console.info("Creating database ...");

        function dbCreateSuccess() {
            console.info("Success: Database created successfully");
        }

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },
    createTables: function () {
        function txFunction(tx) {
            console.info("Creating table: user");
            var sql = "CREATE TABLE IF NOT EXISTS user(" +
                "customerID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "userName VARCHAR(20)," +
                "password VARCHAR(50)," +
                "name VARCHAR(20)," +
                "lastName VARCHAR(50)," +
                "address VARCHAR(50)," +
                "city VARCHAR(50)," +
                "province VARCHAR(50)," +
                "postalCode VARCHAR(50)," +
                "phoneNumber VARCHAR(50)," +
                "email VARCHAR(50));";

            var options = [];

            function success() {
                console.info("User table created successfully");
            }

            tx.executeSql(sql, options, success, errorHandler);

            //Creating table "car"
            console.info("Creating table: car");
            var sql = "CREATE TABLE IF NOT EXISTS car(" +
                "carID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "customerID VARCHAR(20)," +
                "make  VARCHAR(20) NOT NULL," +
                "model VARCHAR(40)," +
                "year VARCHAR(40)," +
                "kilometers VARCHAR(40)," +
                "driveTrain VARCHAR(40)," +
                "transmission VARCHAR(40)," +
                "fuelType VARCHAR(40)," +
                "description VARCHAR(100)," +
                "image VARCHAR(100)," +
                "price VARCHAR(20));";

            var options = [];

            function successTableCar() {
                console.info("Car Table created successfully");
            }

            tx.executeSql(sql, options, successTableCar, errorHandler);

            //Creating table "motorcycle"
            console.info("Creating table: motorcycle");
            var sql = "CREATE TABLE IF NOT EXISTS motorcycle(" +
                "motorcycleID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "customerID  VARCHAR(20) NOT NULL," +
                "stockNumber VARCHAR(40)," +
                "make VARCHAR(40)," +
                "model VARCHAR(40)," +
                "year VARCHAR(40)," +
                "kilometers VARCHAR(40)," +
                "engineSize VARCHAR(20)," +
                "description VARCHAR(20)," +
                "price VARCHAR(40));";

            var options = [];

            function successTableMotorcycle() {
                console.info("Motorcycle Table created successfully");
            }

            tx.executeSql(sql, options, successTableMotorcycle, errorHandler);

            //Drop table Vehicle Type to avoid duplicated
            console.info("Dropping table: vehicleType");

            var sql = "DROP TABLE IF EXISTS vehicleType;";
            var options = [];

            function success() {
                console.info("Table type dropped successfully");
            }
            tx.executeSql(sql, options, success, errorHandler);

            //Create Table Vehicle Type
            console.info("Creating table: vehicleType");
            var sql = "CREATE TABLE IF NOT EXISTS vehicleType( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "typeName VARCHAR(20) NOT NULL);";

            var options = [];

            function successTableVehicleType() {
                console.info("Vehicle Type Table created successfully");
            }

            tx.executeSql(sql, options, successTableVehicleType, errorHandler);

            //Inserting values into type
            console.info("Inserting type: Car");
            var sql = "INSERT INTO vehicleType(typeName) VALUES('Car');";

            var options = [];

            function valueInserted() {
                console.info("Value inserted");
            }
            tx.executeSql(sql, options, valueInserted, errorHandler);

            console.info("Inserting type: Motorcycle");
            var sql = "INSERT INTO vehicleType(typeName) VALUES('Motorcycle');";

            var options = [];

            tx.executeSql(sql, options, valueInserted, errorHandler);
        }

        function successCallback() {
            console.info("Success: Create table transaction successful");
        }


        db.transaction(txFunction, errorHandler, successCallback);
    },
    dropTables: function () {
        function txFunction(tx) {
            console.info("Dropping table: user");
            var sql = "DROP TABLE IF EXISTS user;";
            var options = [];

            function success() {
                console.info("Table dropped successfully");
            }

            tx.executeSql(sql, options, success, errorHandler);

            console.info("Dropping table: car");
            var sql = "DROP TABLE IF EXISTS car;";
            var options = [];

            function successCarTable() {
                console.info("Table type dropped successfully");
            }
            tx.executeSql(sql, options, successCarTable, errorHandler);

            console.info("Dropping table: motorcycle");
            var sql = "DROP TABLE IF EXISTS motorcycle;";
            var options = [];

            function successMotorcycleTable() {
                console.info("Table motorcycle dropped successfully");
            }
            tx.executeSql(sql, options, successMotorcycleTable, errorHandler);

            console.info("Dropping table: vehicleType");
            var sql = "DROP TABLE IF EXISTS vehicleType;";
            var options = [];

            function successVehicleTypeTable() {
                console.info("Vehicle Type talbe dropped successfully");
            }

            tx.executeSql(sql, options, successVehicleTypeTable, errorHandler);


        }

        function successCallback() {
            console.info("Success: Drop table transaction successful");
        }

        db.transaction(txFunction, errorHandler, successCallback);
    }
};

