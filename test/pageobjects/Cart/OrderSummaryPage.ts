class OrderSummaryPage{
    get orderSummaryPageHeader(){
     return  $(".page-heading")    
    }

    get confirmOrderElement(){
        return $("//button[@class='button btn btn-default button-medium']/span")
    }
    async clickConfirmOrder(){
        await this.confirmOrderElement.click()
    }
}
export default new OrderSummaryPage