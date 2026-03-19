// import { remote } from "webdriverio";

// export async function createDriver() {
//   return await remote({
//     path: "/wd/hub",
//     port: 4723,
//     capabilities: {
//         platformName: 'Android',
//         'appium:deviceName': 'emulator-5554',
//         'appium:automationName': 'UiAutomator2',
//         'appium:app': 'D:\\General-Store.apk',
//          'appium:autoGrantPermissions': true,
//   'appium:noReset': true,
//   'appium:fullReset': false,
//   'appium:newCommandTimeout': 1000,
//         'appium:appWaitActivity': '*',
//         'appium:appWaitDuration':100000
//       }
//   });
// }
import { remote } from "webdriverio";

export async function createDriver() {
  return await remote({
    hostname: "localhost",
    port: 4723,
    path: "/", // ✅ مهم جدًا
    capabilities: {
      platformName: "Android",
        'appium:deviceName': 'emulator-5554',
      "appium:automationName": "UiAutomator2",
        'appium:app': 'D:\\General-Store.apk',
                 'appium:autoGrantPermissions': true,
  'appium:noReset': true,
  'appium:fullReset': false,

    },
  });
}