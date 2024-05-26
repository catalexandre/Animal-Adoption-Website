const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 5342;
const app = express();
const loginFile = path.join(__dirname, 'login.txt');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('Animal_Adoption');
});

app.get('/Animal_Adoption', (req, res) => {
    res.render('Animal_Adoption');
});

app.get('/Available_Pets', (req, res) => {
    res.render('Available_Pets');
});

app.get('/Find_A_Cat', (req, res) => {
    res.render('Find_A_Cat');
});

app.get('/Find_A_Dog', (req, res) => {
    res.render('Find_A_Dog');
});

app.get('/Dog_Care', (req, res) => {
    res.render('Dog_Care');
});

app.get('/Cat_Care', (req, res) => {
    res.render('Cat_Care');
});

app.get('/Give_Away_Pet', (req, res) => {
    res.render('Give_Away_Pet');
});

app.get('/Contact_Us', (req, res) => {
    res.render('Contact_Us');
});

app.get('/Disclaimer', (req, res) => {
    res.render('Disclaimer');
});

app.get('/Create_Account', (req, res) => {
    res.render('Create_Account');
});

app.get('/Login', (req, res) => {
    res.render('Login');
});

app.get('/Logout', (req, res) => {
    res.render('Logout');
});

app.post('/Create_Account', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username == "" || password == "") {
        return res.send('Please enter a username and password');
    }

    validateUsername(username, (isUsernameValid) => {
        if (!isUsernameValid) {
            return res.send('Username already taken or invalid, please enter another');
        }

        if (!validatePassword(password)) {
            return res.send('Password does not meet the criteria');
        }

        fs.appendFile(loginFile, `${username}:${password}\n`, (err) => {
            if (err) {
                console.error('Error writing to login file:', err);
                return res.send('Error creating account. Please try again later.');
            }
            console.log(`New account created: ${username}`);
            res.send('Account successfully created. You can now log in.');
        });
    });
});

function validateUsername(username, callback) {
    const usernameRegex = /^[a-zA-Z0-9]+$/;

    fs.readFile(loginFile, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return callback(true);
            }
            console.error('Error reading file:', err);
            callback(false);
            return;
        }

        if (data.includes(`${username}:`)) {
            callback(false);
        } else if (!usernameRegex.test(username)) {
            callback(false);
        } else {
            callback(true);
        }
    });
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
    return passwordRegex.test(password);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});