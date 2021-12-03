import Data from "../../TestData/Data.json";
import faker from 'faker';
class CreatePage{

    first_Name = faker.name.firstName()
    last_Name = faker.name.lastName()

    get createPageHeading(){
        return $("//h1[text()='Create an account']")
    }
    get genderElement(){
        return $("//input[@value='1' and @id ='id_gender1']")
    }
    get firstNameElement(){
        return $("#customer_firstname");
    }
    get lastNameElement(){
        return $("#customer_lastname")
    }
    async firstNameAndlastName(){
       await  this.firstNameElement.setValue(this.first_Name);
       await this.lastNameElement.setValue(this.last_Name);
    }

    get passwordElement(){
        return $("//input[@id='passwd']");
    }
    async password(){
      await this.passwordElement.setValue(faker.internet.password(8));
    }
    get  daysElement(){
        return $("//select[@id='days']")
    }
    
    get  monthsElement(){
        return $("//select[@id='months']")
    }
   
    get yearsElement(){
        return $("//select[@id='years']")
    }
   

    async dateOfBirth(){
        await this.daysElement.selectByAttribute("value",Data.DateOfBirth.Day);
        await this.monthsElement.selectByAttribute("value",Data.DateOfBirth.month)
        await this.yearsElement.selectByAttribute("value",Data.DateOfBirth.years)
    }
    get newsLetterCheckBoxElement(){
        return $("//input[@type='checkbox' and @id='newsletter']")
    }
   
    get CheckBox2Element(){
        return $("//input[@type='checkbox' and @id='optin']")
    }
    async click_CheckBoxes(){
        await this.newsLetterCheckBoxElement.click();
        await this.CheckBox2Element.click();  
    }
    get address_LastNameElement(){
        return $("[id='lastname']")
    }
    get address_FirstNameElement(){
        return $("[id='firstname']")
    }
    async addressF_nameAndL_name(){
        await this.address_FirstNameElement.setValue(this.first_Name)
        await this.address_LastNameElement.setValue(this.last_Name);
    }
    get companyElement(){
        return $("[id='company']")
    }
    async company(){
        await this.companyElement.setValue(Data.company)
    }
    get addressElement(){
        return $("[id='address1']")
    }
    
    get address1Element(){
        return $("[id='address2']")
    }
   
    get cityElement(){
        return $("[id='city']")
    }
    
    get stateElement(){
        return $("//select[@id='id_state']");
    }
   
    get postalCodeElement(){
        return $("[id='postcode']");
    }
    
    get countryElement(){
        return $("[id='id_country']")
    }
    async address(){
        await this.addressElement.setValue(Data.Address.address1)
        await this.address1Element.setValue(Data.Address.address2);
        await this.cityElement.setValue(Data.Address.City);
        await this.stateElement.selectByVisibleText(Data.Address.state)
        await this.postalCodeElement.setValue(Data.Address.PostalCode)
        await this.countryElement.selectByVisibleText("United States")
    }
    
    

    get additionalElement(){
        return $("//textarea[@name='other']") ;   
    }
    async additional(){
        await this.additionalElement.setValue(Data.AdditionalInfo)
    }

    get homePhoneElement(){
        return $("//input[@name='phone']")
    }
    
    get mobilePhoneElement(){
        return $("//input[@name='phone_mobile']")
    }
    async phoneNumbers(){
        await this.homePhoneElement.setValue(Data.PhoneNumber)
        await this.mobilePhoneElement.setValue(Data.PhoneNumber)
    }
   
    get assignAddressElement(){
        return $("//input[@name='alias']")
    }

    async assignAddress(){
        await this.assignAddressElement.setValue(Data.AliasAddress)
    }

    get registerElement(){
        return $("//button[@name='submitAccount']")
    }
    async register(){
        await this.registerElement.click();
    }

}
export default new CreatePage