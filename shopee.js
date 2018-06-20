const puppeteer = require('puppeteer');


//設定倒數計時             年,(n-1)月,日,時,分
var timeout = new Date(2018, 5, 21, 11, 59, 50).getTime() - new Date().getTime();
function delay() {
    return new Promise(function (reolve) {
        setTimeout(reolve, timeout);
    })
};
// console.log('timeout', timeout);

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: 'C:/Users/User/AppData/Local/Chromium/User Data'
    });
    // const launch = new Date();
    // console.log('launch : ', launch);

    //先開好chromium，放至指定時候後再開啟網頁
    await delay();

    const page = await browser.newPage();

    //預設頁面寬度800*600太難看，可在此處調整
    await page.setViewport({ width: 1366, height: 768 });

    // var startTime = new Date();
    //延長線測試頁面
    // await page.goto('https://shopee.tw/AZOMA-Lightning-%E7%8E%AB%E7%91%B0%E9%87%91-1M-%E5%85%85%E9%9B%BB%E5%82%B3%E8%BC%B8%E7%B7%9A-%E8%98%8B%E6%9E%9C%E7%B7%9A-Apple-iPhone%E7%B7%9A-%E5%85%85%E9%9B%BB%E7%B7%9A-iOS-i.7974134.480882883');
    //這才是mac book的
    await page.goto('https://shopee.tw/product/7974134/748342639/');
    while (await page.$('.btn-buynow:disabled')) {
        await page.goto('https://shopee.tw/product/7974134/748342639/');
    }


    // console.log('Page : ', startTime);
    // console.log('page - launch :', startTime.getTime() - launch.getTime());

    //TODO click buttom and go on

    //點選直接購買按鈕
    await page.waitForSelector('.btn-buynow');
    await page.click('.btn-buynow');
    // console.log('click : ', new Date());
    // var endTime = new Date();
    // console.log('click - page : ', endTime.getTime() - startTime.getTime());

    //去買單
    // var checkoutTime = new Date();
    await page.waitForSelector('.cart-page-footer__checkout .shopee-button-solid.shopee-button-solid--primary');
    while (await page.$('.cart-page-footer__checkout .shopee-button-solid.shopee-button-solid--primary')) {
        // console.log('cart :', new Date().getTime() - checkoutTime.getTime());
        await page.click('.cart-page-footer__checkout .shopee-button-solid.shopee-button-solid--primary');
    }

    //下訂單
    // var orderTime = new Date();
    await page.waitForSelector('.checkout-order-summary__action .stardust-button.stardust-button--primary.stardust-button--large.checkout-order-summary__place-order-button');
    while (await page.$('.checkout-order-summary__action .stardust-button.stardust-button--primary.stardust-button--large.checkout-order-summary__place-order-button')) {
        // console.log('orderTime', orderTime);
        await page.click('.checkout-order-summary__action .stardust-button.stardust-button--primary.stardust-button--large.checkout-order-summary__place-order-button');
    }
    // await browser.close();
})();