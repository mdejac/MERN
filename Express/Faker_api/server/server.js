const express = require('express');
const app = express();
const port = 8000;

const {faker} = require('@faker-js/faker');

const createUser = () => {
    return {
        password: faker.internet.password(12),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.database.mongodbObjectId()
    }
}

const createCompany = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCode(),
            country: faker.address.countryCode()
        }
    }
}


app.get('/api/users/new', (req, res) => {
    res.json(createUser());
});

app.get('/api/companies/new', (req, res) => {
    res.json(createCompany());
})

app.get('/api/user/company', (req, res) => {
    res.json({user: createUser(), company: createCompany()})
})


app.listen(port, () => console.log(`Listening on port: ${port}`) );