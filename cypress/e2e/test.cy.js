import { LandingPage } from "../../page-object/ladning-page";
import { SignUpPage } from "../../page-object/sign-up-page";

describe('Registration testing', () => {
    const landingPage = new LandingPage();
    const signUpPage = new SignUpPage();

    beforeEach(() => {
    })

    it('should check user registration with valid data', () => {
        signUpPage.userRegistration();
    })
})