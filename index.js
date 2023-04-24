const { chromium } = require('playwright')

;(async function () {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://github.com/MrVega01')
  await page.screenshot({ path: 'myProfile.png' })
  browser.close()
})()
