"use strict"

beforeAll(async () => { await page.goto('http://127.0.0.1:5500/www/') }, 10000)


describe('Loading:', () => {
    it('All gods loaded', async () => {
        const elemHandle = await page.$('#godList')
        const godsDisp = await page.evaluate(e => e.childElementCount, elemHandle)
        expect(godsDisp).toBe(96)
    })
})

describe('Roll button:', () => {
    let god;

    it('Roll button is working', async () => {
        await page.click('.btnRoll')
        god = await page.evaluate(() => window.rGod)
        expect(god).toBeTruthy()
    })

    it('Draft god is shown', async () => {
        const imgUrl = await page.$eval('#icoFrame', x => x.style.backgroundImage)
        const godName = await page.$eval('#godName', x => x.innerHTML)
        const godDesc = await page.$eval('#godDescription', x => x.innerHTML)

        expect(imgUrl).toMatch(god.id)
        expect(godName).toMatch(god.name)
        expect(godDesc).toMatch(`${god.pantheon} ${god.class}`)
    })
})