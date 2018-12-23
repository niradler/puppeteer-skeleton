const puppeteer = require('puppeteer');

const run = async(urls = [], pPipe = null, cPipe = null) => {
    try {
        const data = [];
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        for (const i in urls) {
            await page.goto(urls[i]);
            if(pPipe) await pPipe(page);
            if(cPipe) {
                const d = await page.evaluate(cPipe);
                data.push(d);
            }
        }

        await browser.close()
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = run;