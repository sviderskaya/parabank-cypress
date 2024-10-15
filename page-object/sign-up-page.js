import { LandingPage } from "./ladning-page";
import { faker } from "@faker-js/faker";

export class SignUpPage extends LandingPage {
    firstNameInput = '[id="customer.firstName"]';
    lastNameInput = '[id="customer.lastName"]';
    addressInput = '[id="customer.address.street"]';
    cityInput = '[id="customer.address.city"]';
    stateInput = '[id="customer.address.state"]';
    zipCodeInput = '[id="customer.address.zipCode"]';
    phoneInput = '[id="customer.phoneNumber"]';
    ssnInput = '[id="customer.ssn"]';
    usernameInput = '[id="customer.username"]';
    passwordInput = '[id="customer.password"]';
    confirmPasswordInput = '[id="repeatedPassword"]';
    confirmRegisterBtn = '[value="Register"]';
    successMessage = '[id="rightPanel"]'

    userRegistration() {
        const radnomFirstName = faker.person.firstName();
        const randomLastName = faker.person.lastName();
        const randomAddress = faker.address.streetAddress();
        const randomCity = faker.address.city();
        const randomState = faker.address.state();
        const randomZipCode = faker.address.zipCode();
        const randomPhoneNumber = faker.phone.number();
        const randomSSN = `${faker.number.int({ min: 100, max: 999 })}-${faker.number.int({ min: 10, max: 99 })}-${faker.number.int({ min: 1000, max: 9999 })}`;
        const randomUsername = `${faker.internet.userName()}8u&TT12`;
        const randomPassword = faker.internet.password();

        cy.visit('/')
        cy.get(this.registerBtn).contains('Register').click();
        cy.get(this.firstNameInput).type(radnomFirstName);
        cy.get(this.lastNameInput).type(randomLastName);
        cy.get(this.addressInput).type(randomAddress);
        cy.get(this.cityInput).type(randomCity);
        cy.get(this.stateInput).type(randomState);
        cy.get(this.zipCodeInput).type(randomZipCode);
        cy.get(this.phoneInput).type(randomPhoneNumber);
        cy.get(this.ssnInput).type(randomSSN);
        cy.get(this.usernameInput).type(randomUsername);
        cy.get(this.passwordInput).type(randomPassword);
        cy.get(this.confirmPasswordInput).type(randomPassword);
        cy.get(this.confirmRegisterBtn).click();
        cy.get(this.successMessage).contains('Your account was created successfully. You are now logged in.').should('be.visible');
    }
}