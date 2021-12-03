import Data from '../../TestData/Data.json'
class MyAccountPage{
    get myAccountElement(){
        return $("//h1[text()='My account']");
    }
    get womenElement(){
        return $("//a[@title='Women']")
    }
    async clickOnWomenElement(){
      await this.womenElement.click();
    }
}
export default new MyAccountPage