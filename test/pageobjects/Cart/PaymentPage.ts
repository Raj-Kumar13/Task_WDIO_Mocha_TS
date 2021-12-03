class PaymentPage{

    get paymentPageHeaderElement(){
        return $(".page-heading")
    }
    get payByBankWireElement(){
        return $("//a[@class='bankwire']")
    }

    async clickPayByBankWire(){
        await this.payByBankWireElement.scrollIntoView()
        await this.payByBankWireElement.click()
    }

}
export default new PaymentPage