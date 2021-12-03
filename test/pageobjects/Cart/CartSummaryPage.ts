class CartSummaryPage{

    get summaryPageHeaderElement(){
        return $("#cart_title")
    }

    get cartProceedToCheckoutElement(){
        return $(".button.btn.btn-default.standard-checkout.button-medium");
    }
    async clickCartProceedToCheckButton(){
        await this.cartProceedToCheckoutElement.scrollIntoView(false)
        await this.cartProceedToCheckoutElement.click();
    }
}
export default new CartSummaryPage