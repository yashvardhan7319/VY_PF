const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  
  try {
    const response = await page.goto('http://localhost:4173/VY_PF/', { waitUntil: 'networkidle0' });
    console.log('STATUS:', response.status());
    const content = await page.content();
    console.log('CONTENT LENGTH:', content.length);
  } catch (err) {
    console.log('PUPPETEER ERROR:', err.toString());
  }
  
  await browser.close();
})();
