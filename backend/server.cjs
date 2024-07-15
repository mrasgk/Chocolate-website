const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'Chocolato' 
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
    connection.release();
});

app.post('/checkout', (req, res) => {
    const { cart, paymentMethod, cardDetails, customerInfo } = req.body;

    const sql = `INSERT INTO checkout (Name, Address, City, Zip, Email, Phone, Card, Exper_Date, CVV)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        customerInfo.fullName,
        customerInfo.address,
        customerInfo.city,
        customerInfo.zipCode,
        customerInfo.email,
        customerInfo.phone,
        cardDetails.cardNumber,
        cardDetails.expirationDate,
        cardDetails.cvv
    ];

    pool.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error inserting into database:', err);
            res.status(500).json({ success: false, error: err.message });
            return;
        }

        console.log('Order placed successfully:', results);
        res.status(200).json({ success: true });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
