"use strict"

beforeAll(async () => { await page.goto('http://127.0.0.1:5500/www/') }, 10000)


describe('Loading:', () => {
    test('All gods loaded', async () => {
        const elemHandle = await page.$('#godList')
        const godsDisp = await page.evaluate(e => e.childElementCount, elemHandle)
        expect(godsDisp).toBe(96)
    })
})


describe('Roll button:', () => {
    let god;

    beforeAll(async () => {
        await page.click('#btnRoll')
        god = await page.evaluate(() => window.rGod)
    })

    test('God was drawn', async () => {
        expect(god).toBeTruthy()
    })

    test('Drawn god is shown', async () => {
        await expect(page.$eval('#icoFrame', x => x.style.backgroundImage)).resolves.toMatch(god.id)
        await expect(page.$eval('#godName', x => x.innerHTML)).resolves.toMatch(god.name)
        await expect(page.$eval('#godDescription', x => x.innerHTML)).resolves.toMatch(`${god.pantheon} ${god.class}`)
    })
})


describe('Checkbox groupers:', () => {
    let cbxListHandler
    let fatherHandler
    beforeAll(async () => {
        cbxListHandler = await page.$$('input.class')
        fatherHandler = await page.$('input.class.father')
    })

    test('Controls the group', async () => {
        for (let i = 0; i < cbxListHandler.length; i++) {
            await expect(cbxListHandler[i].evaluate(x => x.checked)).resolves.toBe(false)
        }
        await page.click('input.class.father')
        for (let i = 0; i < cbxListHandler.length; i++) {
            await expect(cbxListHandler[i].evaluate(x => x.checked)).resolves.toBe(true)
        }
    })

    test('The children controls the father', async () => {
        await page.click('#Mage')
        await expect(fatherHandler.evaluate(x => x.indeterminate)).resolves.toBe(true)

        await page.click('#Hunter')
        await expect(fatherHandler.evaluate(x => x.indeterminate)).resolves.toBe(true)

        await page.click('#Mage')
        await page.click('#Hunter')
        await expect(fatherHandler.evaluate(x => x.indeterminate)).resolves.toBe(false)
    })
})

describe('Filters logic:', () => {
    async function nGods() {
        return await page.evaluate(() => window.selectedGods.length)
    }

    beforeAll(async () => {
        await page.reload()
    })

    describe('One of each group:', () => {
        test('Class', async () => {
            await page.click('#Mage')
            await expect(nGods()).resolves.toBe(28)
            await page.click('#Mage')
        })
        test('Roles', async () => {
            await page.click('#Mid')
            await expect(nGods()).resolves.toBe(31)
            await page.click('#Mid')
        })
        test('Type', async () => {
            await page.click('#Magical')
            await expect(nGods()).resolves.toBe(45)
            await page.click('#Magical')
        })
        test('Features', async () => {
            await page.click('#Invisible')
            await expect(nGods()).resolves.toBe(7)
            await page.click('#Invisible')
        })
        test('Pantheon', async () => {
            await page.click('#Hindu')
            await expect(nGods()).resolves.toBe(8)
            await page.click('#Hindu')
        })
    })

    describe('By features:', () => {
        test('One feature at time', async () => {
            await page.click('#Healer')
            await expect(nGods()).resolves.toBe(11)
            await page.click('#Healer')

            await page.click('#Escape-Engage')
            await expect(nGods()).resolves.toBe(72)
            await page.click('#Escape-Engage')

            await page.click('#Invisible')
            await expect(nGods()).resolves.toBe(7)
            await page.click('#Invisible')
        })

        test('Combined', async () => {
            await page.click('#Healer')
            await page.click('#Escape-Engage')
            await expect(nGods()).resolves.toBe(5)
            await page.click('#Stance-Switcher')
            await expect(nGods()).resolves.toBe(1)
        })
    })

    test('All combined', async () => {
        await page.reload()

        await page.click('#Hunter')
        await page.click('#Mage')
        await page.click('#Warrior')
        await expect(nGods()).resolves.toBe(61)
        await page.click('#ADC')
        await page.click('#Mid')
        await page.click('#Solo')
        await expect(nGods()).resolves.toBe(59)
        await page.click('#Ranged')
        await expect(nGods()).resolves.toBe(45)
        await page.click('#Healer')
        await page.click('#Escape-Engage')
        await expect(nGods()).resolves.toBe(2)
        await page.click('#Greek')
        await expect(nGods()).resolves.toBe(1)
    })
})