// import { strict as assert } from "assert";

// export class CartPage {
//   constructor(private driver: WebdriverIO.Browser) {}

//   private productName = "id=com.androidsample.generalstore:id/productName";

//   async validateProductDisplayed(expectedProduct: string) {
//     const products = await this.driver.$$(this.productName);

//     let found = false;

//     for (const product of products) {
//       const text = await product.getText();
//       if (text === expectedProduct) {
//         found = true;
//         break;
//       }
//     }

//     assert.equal(found, true, "Product not found in cart");
//   }
// }

import { strict as assert } from "assert";

export class CartPage {
  constructor(private driver: WebdriverIO.Browser) {}

  private productName = "id=com.androidsample.generalstore:id/productName";

  async validateProductDisplayed(expectedProduct: string) {
    await (await this.driver.$(this.productName)).waitForDisplayed({ timeout: 10000 });

    const products = await this.driver.$$(this.productName);

    const productTexts = [];

    for (const product of products) {
      const text = await product.getText();
      productTexts.push(text);
    }

    console.log("Products in cart:", productTexts);

    const isFound = productTexts.includes(expectedProduct);

    assert.equal(isFound, true, `Product "${expectedProduct}" not found in cart`);
  }
}