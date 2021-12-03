class AddressPage{
    get AddressPageHeaderElement(){
        return $(".page-heading");
    }

    get addressPageProceedToCheckoutElement(){
        return $("//button[@name='processAddress']")
    }
    async clickProceedToCheckoutButtonAddressPage(){
        await this.addressPageProceedToCheckoutElement.scrollIntoView(false)
        await this.addressPageProceedToCheckoutElement.click();
    }

}
export default new AddressPage