import LandingPage from '../pageobjects/LandingPage'
import AuthenticationPage from '../pageobjects/SignUp/AuthenticationPage'
import CreatePage from '../pageobjects/SignUp/CreateAccountPage'
import MyAccountPage from '../pageobjects/SignUp/MyAccountPage'
import WomenCategoryPage from '../pageobjects/Menu/WomenCategoryPage';
import CartSummaryPage from '../pageobjects/Cart/CartSummaryPage'
import AddressPage from '../pageobjects/Cart/AddressPage';
import ShoppingPage from '../pageobjects/Cart/ShoppingPage'
import PaymentPage from '../pageobjects/Cart/PaymentPage';
import OrderSummaryPage from '../pageobjects/Cart/OrderSummaryPage'
import OrderConfirmationPage from '../pageobjects/Cart/OrderConfirmationPage'


describe("Creating a User and  buying Product,", () => {
    it("create User and select Product add to cart Placing an Order", async () => {
        await LandingPage.openPage();
        await LandingPage.clickSignIn();
        await expect(AuthenticationPage.authenticationHeader).toHaveTextContaining("AUTHENTICATION");
        await AuthenticationPage.emailAddress();
        await AuthenticationPage.createAnAccountElement.click()
        await expect(CreatePage.createPageHeading).toHaveTextContaining("CREATE AN ACCOUNT");
        await CreatePage.genderElement.click();
        await CreatePage.firstNameAndlastName();
        await CreatePage.password();
        await CreatePage.dateOfBirth();
        await CreatePage.click_CheckBoxes();
        await CreatePage.addressF_nameAndL_name();
        await CreatePage.company();
        await CreatePage.address();
        await CreatePage.additional();
        await CreatePage.phoneNumbers();
        await CreatePage.assignAddress();
        await CreatePage.register();
        await expect(MyAccountPage.myAccountElement).toHaveTextContaining("MY ACCOUNT");
        await MyAccountPage.clickOnWomenElement();
        await expect(WomenCategoryPage.womenHeaderElement).toHaveTextContaining("WOMEN");
        await WomenCategoryPage.addToCart()
        await WomenCategoryPage.popUpHeader.waitForDisplayed();
        await expect(WomenCategoryPage.popUpHeader).toBeDisplayed();
        await WomenCategoryPage.clickProceedToCheckout();
        await expect(CartSummaryPage.summaryPageHeaderElement).toHaveTextContaining("SHOPPING-CART SUMMARY")
        await CartSummaryPage.clickCartProceedToCheckButton();
        await expect(AddressPage.AddressPageHeaderElement).toHaveTextContaining("ADDRESSES")
        await AddressPage.clickProceedToCheckoutButtonAddressPage();
        await expect(ShoppingPage.shoppingPageHeaderElement).toHaveTextContaining("SHIPPING")
        await ShoppingPage.clickAgreeCheckBox();
        await ShoppingPage.clickShoppingPagePTC();
        await expect(PaymentPage.paymentPageHeaderElement).toHaveTextContaining("PLEASE CHOOSE YOUR PAYMENT METHOD");
        await PaymentPage.clickPayByBankWire();
        await expect(OrderSummaryPage.orderSummaryPageHeader).toHaveTextContaining("ORDER SUMMARY")
        await OrderSummaryPage.clickConfirmOrder();
        await expect(OrderConfirmationPage.orderConfirmationHeaderElement).toHaveTextContaining("ORDER CONFIRMATION")
        await expect(OrderConfirmationPage.confirmationMessage).toBeDisplayed();












    });

});