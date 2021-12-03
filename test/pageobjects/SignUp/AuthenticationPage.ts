import Data from "../../TestData/Data.json";
import faker from 'faker';
class AuthenticationPage{
    get authenticationHeader(){
        return $("//h1[@class='page-heading']");
    }

    get emailElement(){
        return $("//input[@id='email_create']");
    }
    async emailAddress(){
        const email = faker.internet.email();
        console.log(email);
       await this.emailElement.setValue(email);
    }
    get createAnAccountElement(){
        return $("//button[@id='SubmitCreate']")
    }
}
export default new AuthenticationPage