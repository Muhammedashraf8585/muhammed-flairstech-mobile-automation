export class HomePage {
  constructor(private driver: WebdriverIO.Browser) {}

  // Locators
  private countryDropdown = "id=com.androidsample.generalstore:id/spinnerCountry";
  private nameField = "id=com.androidsample.generalstore:id/nameField";
  private maleRadio = "id=com.androidsample.generalstore:id/radioMale";
  private femaleRadio = "id=com.androidsample.generalstore:id/radioFemale";
  private letsShopBtn = "id=com.androidsample.generalstore:id/btnLetsShop";

  async selectCountry(country: string) {
    await this.driver.$(this.countryDropdown).click();

    const countryOption = await this.driver.$(
      `android=new UiSelector().text("${country}")`
    );

    await countryOption.click();
  }

  async enterName(name: string) {
    await this.driver.$(this.nameField).setValue(name);
  }

  async selectGender(gender: string) {
    if (gender === "Male") {
      await this.driver.$(this.maleRadio).click();
    } else {
      await this.driver.$(this.femaleRadio).click();
    }
  }

  async clickLetsShop() {
    await this.driver.$(this.letsShopBtn).click();
  }
}   