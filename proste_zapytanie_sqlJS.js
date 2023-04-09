const mysql = require('mysql2/promise');

(async()=> {

    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "fizjonatka",
    });

    const [result] = await conn.execute('SELECT * FROM `sales` WHERE `saleDate` > "2023-01-01" AND saleDate < "2023-01-31";')


    const zmienna = result.filter(element => {
        return element.saleDate > new Date("2023-01-01") && element.saleDate < new Date("2023-01-15")  && element.price > 150 && element.price < 170 && element.serviceType === "Stacjonarna"
    });
    let index = 1;
    console.log("");
    if(zmienna.length > 1){
        console.log(`Imiona i nazwiska ${zmienna.length} osób:`)
    }else{
        console.log(`Imię i nazwisko znalezionej osoby:`)
    }
    console.log("");
    console.log(zmienna.forEach(element => {

        if (element.nameSurname === undefined){
            console.log(null)
        }else{
            console.log("");
            console.log(index++ + ".) " + "'" + element.nameSurname + "'" + " - " + "Wydał: " + element.price + "zł");
            console.log("");
        }
    }));
    await conn.end();

})();


