class OrderConfirmationPage{
    get orderConfirmationHeaderElement(){
        return $(".page-heading")
    }

    get confirmationMessage(){
        return $("//strong[text()='Your order on My Store is complete.']")  
    }
}
export default new OrderConfirmationPage