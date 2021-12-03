import Data from "../TestData/Data.json";
class LandingPage {
   async openPage(){
        await browser.url("http://automationpractice.com/index.php");
        await browser.maximizeWindow();
    }
    async clickSignIn(){
        const  clickElement = $("//a[@class='login']")
        await clickElement.click();
    }

}

export default  new LandingPage