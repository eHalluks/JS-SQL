const mysql = require('mysql2/promise');

(async()=> {

    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fizjonatka",
    });

    const {insertId, affectedRows} = (await conn.execute('INSERT INTO `sales` (saleDate, nameSurname, serviceName, serviceType, price, paymentForm, transactionStatus, paybackStatus, paybackValue, realisationStatus) VALUES("2023-04-23", "Kaja Paczuska", "DSI", "Stacjonarna", 250, "BLIK", "Niezapłacone", "Tak", 0, NULL) ;'))[0];

    console.log(insertId);//current id
    console.log(affectedRows);//1

    await conn.end();
})();

