const mysql = require('mysql2/promise');

(async()=> {

    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fizjonatka",
    });

    //opcja 1
    // const answer = await conn.execute('UPDATE `sales` SET `transactionStatus` = "Niezapłacone" WHERE `nameSurname` = "Gracjan Kowalski" AND `saleDate` = "2023-03-03";');
    //
    // console.log(answer[0].affectedRows); //1

    //opcja 2

    const {affectedRows} = (await conn.execute('UPDATE `sales` SET `transactionStatus` = "Zapłacone" WHERE `nameSurname` = "Gracjan Kowalski" AND `saleDate` = "2023-03-03";'))[0];

    console.log(affectedRows); //1

    await conn.end();
})();
