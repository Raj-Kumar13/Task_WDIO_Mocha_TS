class ShoppinPage{
    get shoppingPageHeaderElement(){
        return $(".page-heading")
    }

    get agreeCheckBoxElement(){
        return $("#cgv")
    }
    async clickAgreeCheckBox(){
        await this.agreeCheckBoxElement.click()
    }

    get shoppingPageProceedToCheckElement(){
        return $("//button[@name='processCarrier']")
    }
    async clickShoppingPagePTC(){
        await this.shoppingPageProceedToCheckElement.scrollIntoView(false)
        await this.shoppingPageProceedToCheckElement.click()
    }


}
export default new ShoppinPage