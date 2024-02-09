const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'admin',
    database: 'mini_projeto'
})

module.exports = {
    pool
}