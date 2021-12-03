class WomenCategoryPage{
    get womenHeaderElement(){
        return $(".title_block")
    }

    get selectedProductElement(){
        return $("//a[@title='Faded Short Sleeve T-shirts' and @class='product-name']")
    }
    get addToCartElement(){
        return $("//div[@class='right-block']/div[@class='button-container']/a/span[text()='Add to cart']");
    }

    async addToCart(){
        await this.selectedProductElement.scrollIntoView(false);
        await this.selectedProductElement.moveTo();
        await this.addToCartElement.click();
    }
    get popUpHeader(){
        return $("//span[@class='cross']/following-sibling::h2");
    }
    get proceedToCheeckOutElement(){
        return $("//a[@title='Proceed to checkout' and @rel='nofollow']")
    }
    async clickProceedToCheckout(){
         await this.proceedToCheeckOutElement.click();
    }
}
export default new WomenCategoryPage