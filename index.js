const taskRunner = require('./taskRunner');
const firstPElement = require('./pipes/firstPElement');
const puppeteerPage = require('./puppeteerPage');

const demoUrls = ['https://scrapethissite.com/pages/']

const main = async () => {
    try {
        const data = await taskRunner(demoUrls, puppeteerPage, firstPElement);
        console.log(data);
    } catch (error) {
        console.log('main error',error);
    }
}

main();