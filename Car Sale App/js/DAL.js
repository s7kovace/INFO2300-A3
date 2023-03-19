/**
 * File Name: DAL.js
 *
 * Revision History:
 *       Stefan Kovacevic, 2021-04-21 : Created
 */
var User = {
    insert : function(options, callback){
        function txFunction(tx){
            var sql =

                "INSERT INTO user(username,password,name,lastName,address,city," +
                "province,postalCode,phoneNumber,email)" +
                " VALUES(?,?,?,?,?,?,?,?,?,?);";


            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Insert transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options, callback){
        function txFunction(tx){
            var sql = "UPDATE user SET password=?,name=?, lastname=?, address=?, city=?,province=?,postalCode=?,phoneNumber=?,email=? WHERE customerID=?;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: update transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);

    },
    delete: function(options, callback){
        function txFunction(tx){
            var sql = "DELETE FROM user WHERE customerID=?;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Delete transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM user WHERE customerID=?;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM user;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    deleteAllCars: function (options, callback){
        function txFunction(tx){

            var sql = "DELETE FROM car WHERE customerID IN(customerID=?);";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    deleteAllMotorcycles: function (options, callback){
        function txFunction(tx){

            var sql = "DELETE FROM motorcycle WHERE customerID IN(customerID=?);";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
}

var Car = {
    insert : function(options, callback){
        function txFunction(tx){
            var sql =

                "INSERT INTO car(customerID,make,model,year,kilometers,driveTrain," +
                "transmission,fuelType,description,image,price)" +
                " VALUES(?,?,?,?,?,?,?,?,?,?,?);";


            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Insert transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options, callback){
        function txFunction(tx){
            var sql = "UPDATE car SET make=?, model=?, year=?, kilometers=?,driveTrain=?,transmission=?,fuelType=?,description=?,price=? WHERE carID=?;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: update transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);

    },
    delete: function(options, callback){
        function txFunction(tx){
            var sql = "DELETE FROM car WHERE carID=?;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Delete transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM car WHERE carID=?;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM car;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
}

var Motorcycle = {
    insert : function(options, callback){
        function txFunction(tx){
            var sql =

                "INSERT INTO motorcycle(customerID,stockNumber,make,model,year,kilometers,engineSize,description,price)" +
                " VALUES(?,?,?,?,?,?,?,?,?);";


            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Insert transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function(options, callback){
        function txFunction(tx){
            var sql = "UPDATE motorcycle SET stockNumber=?, make=?, model=?, year=?, kilometers=?,engineSize=?,description=?,price=? WHERE motorcycleID=?;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: update transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);

    },
    delete: function(options, callback){
        function txFunction(tx){
            var sql = "DELETE FROM motorcycle WHERE motorcycleID=?;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Delete transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM motorcycle WHERE motorcycleID=?;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM motorcycle;";

            tx.executeSql(sql, options, callback, errorHandler );
        }
        function successTransaction(){
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
}
