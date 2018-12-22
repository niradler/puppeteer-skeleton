const puppeteerPage = (page) => {
    const random = (n) => parseInt(Math.random() * Math.pow(10,n)) 

    return page.screenshot({path: `./cache/${random(4)}.png`});
}

module.exports = puppeteerPage;