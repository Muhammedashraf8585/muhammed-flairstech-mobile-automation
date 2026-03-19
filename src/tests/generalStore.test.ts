// import { createDriver } from "../utils/driver";
// import { HomePage } from "../pages/HomePage";
// import { ProductsPage } from "../pages/ProductsPage";
// import { CartPage } from "../pages/CartPage";
// import userData from "../data/userData.json";

// describe("General Store App Test", function () {
//    this.timeout(60000);
//   let driver: WebdriverIO.Browser;

//   before(async () => {
//     driver = await createDriver();
//   });

//   after(async () => {
//     await driver.deleteSession();
//   });

//   it("should complete purchase flow successfully", async () => {
//     const home = new HomePage(driver);
//     const products = new ProductsPage(driver);
//     const cart = new CartPage(driver);

//     await home.selectCountry(userData.country);
//     await home.enterName(userData.name);
//     await home.selectGender(userData.gender);
//     await home.clickLetsShop();

//     await products.addProductToCart(userData.product);
//     await products.goToCart();

//     await cart.validateProductDisplayed(userData.product);
//   });
// });

import { createDriver } from "../utils/driver";
import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import userData from "../data/userData.json";

describe("General Store App Test", function () {
  this.timeout(60000);

  let driver: WebdriverIO.Browser;

  before(async () => {
    driver = await createDriver();
  });

  after(async () => {
    if (driver) {
      await driver.deleteSession();
    }
  });

  it("should complete purchase flow successfully", async () => {
    const home = new HomePage(driver);
    const products = new ProductsPage(driver);
    const cart = new CartPage(driver);

    await home.selectCountry(userData.country);
    await home.enterName(userData.name);
    await home.selectGender(userData.gender);
    await home.clickLetsShop();

    // ✅ dynamic product
    const selectedProduct = await products.addAnyProductToCart();

    await products.goToCart();

    await cart.validateProductDisplayed(selectedProduct);
  });
});