// export class ProductsPage {
//   constructor(private driver: WebdriverIO.Browser) {}

//   private productName = "id=com.androidsample.generalstore:id/productName";
//   private cartIcon = "id=com.androidsample.generalstore:id/appbar_btn_cart";

//   async addProductToCart(product: string) {
//     const products = await this.driver.$$(this.productName);

//     for (const item of products) {
//       const text = await item.getText();

//       if (text === product) {
//         // نطلع للـ parent ونجيب الزر منه
//         const parent = await item.parentElement();
//         const addBtn = await parent.$('//android.widget.TextView[@text="ADD TO CART"]');

//         await addBtn.click();
//         return; // أهم من break
//       }
//     }

//     throw new Error(`Product "${product}" not found`);
//   }

//   async goToCart() {
//     const cart = await this.driver.$(this.cartIcon);
//     await cart.waitForDisplayed();
//     await cart.click();
//   }
// }

export class ProductsPage {
  constructor(private driver: WebdriverIO.Browser) {}

  private productName = 'id=com.androidsample.generalstore:id/productName';
  private cartIcon = 'id=com.androidsample.generalstore:id/appbar_btn_cart';
  private addToCartBtn = '//android.widget.TextView[@text="ADD TO CART"]';

  async addAnyProductToCart(): Promise<string> {
    const firstProduct = await this.driver.$(this.productName);
    await firstProduct.waitForDisplayed({ timeout: 10000 });

    const productText = await firstProduct.getText();
    console.log("Selected product:", productText);

    const firstAddButton = await this.driver.$(this.addToCartBtn);
    await firstAddButton.click();

    return productText;
  }

  async goToCart() {
    const cart = await this.driver.$(this.cartIcon);
    await cart.waitForDisplayed({ timeout: 5000 });
    await cart.click();
  }
}