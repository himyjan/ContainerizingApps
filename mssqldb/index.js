const sql  = require('mssql');

const config = {
    user: 'sa',
    password: 'super_strong_password',
    server: 'localhost',
    database: 'testdb',
    options: {
        enableArithAbort: true
    }
}

const run = async() => {
    const pool = await sql.connect(config);
    try {
        console.log('Connection Opening...');
        pool = await sql.connect(config);
        const { recordset } = await sql.query('select * from users;');

        console.log(recordset);
    } catch (err) {
        console(err);
    } finally {
        await pool.close();
        console.log('Connection closed');
    }
}

run();