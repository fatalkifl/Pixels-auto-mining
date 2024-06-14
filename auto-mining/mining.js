// const puppeteer = require('puppeteer-core');
const puppeteer = require('puppeteer-extra');
const fs = require('fs');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

(async () => {

  const browser = await puppeteer.launch({headless: true,
    args: [
      '--profile-directory=Default',
      '--window-size=500,500',
      '--window-position=0,0',
      '--disable-infobars',
    ],
    userDataDir: config.userDataDir,
    ignoreDefaultArgs: ["--enable-automation",'--disable-extensions'],
    defaultViewport: false,
    executablePath: config.chromeExecutablePath,
    });
    
    function delay(time) {
      return new Promise(function(resolve) { 
          setTimeout(resolve, time)
      });
   }

// █▀▀ █▀▀ █▀▀█ ▀█─█▀ █▀▀ █▀▀█ 
// ▀▀█ █▀▀ █▄▄▀ ─█▄█─ █▀▀ █▄▄▀ 
// ▀▀▀ ▀▀▀ ▀─▀▀ ──▀── ▀▀▀ ▀─▀▀

  const page = await browser.newPage();
  await page.goto('https://play.pixels.xyz');
  console.log("=> " + 'Authenticating...')
  await page.waitForSelector('.Intro_smalllink__nJ3cG', { timeout: 360000 });
  await page.click('.Intro_smalllink__nJ3cG');
  const randomNum = Math.floor(Math.random() * (400 - 50 + 1)) + 50;
  await page.click(`text=World ${randomNum}`);  
  console.log("=> " + `Clicked WORLD [${randomNum}]`)
  await page.waitForSelector('::-p-aria(Land and Bookmarks[role=\\"image\\"])', { timeout: 360000 })
  await delay(5000)


  // █░░ ▄▀█ █▄░█ █▀▄
  // █▄▄ █▀█ █░▀█ █▄▀

// {
//     const landbm = page;
//     await landbm.waitForSelector('::-p-aria(Land and Bookmarks[role=\\"image\\"])')
//     await landbm.click('::-p-aria(Land and Bookmarks[role=\\"image\\"])')
// }  
// {
//     const terrabtn = page;
//     await terrabtn.waitForSelector('#__next > div > div.room-layout > div > div.LandAndTravel_container__WCM6U.commons_uikit__Nmsxg > div.LandAndTravel_customHeader__goUPo > button')
//     await terrabtn.click('#__next > div > div.room-layout > div > div.LandAndTravel_container__WCM6U.commons_uikit__Nmsxg > div.LandAndTravel_customHeader__goUPo > button')
// }
// {
//   await delay(4500);
//   await page.waitForSelector('#__next > div > div.room-layout > div > div:nth-child(1) > div > div.Hud_bottom__P9XWZ > div > div.Hud_itemsTop__cYzyR');
//   await delay(500);
// }
// {
//     const landbm = page;
//     await landbm.waitForSelector('::-p-aria(Land and Bookmarks[role=\\"image\\"])', { timeout: 360000 })
//     await landbm.click('::-p-aria(Land and Bookmarks[role=\\"image\\"])')
// }  
// {
//     const bookmarkbtn = page;
//     await bookmarkbtn.waitForSelector('div.LandAndTravel_container__WCM6U button:nth-of-type(3) > img', { timeout: 360000 })
//     await bookmarkbtn.click('div.LandAndTravel_container__WCM6U button:nth-of-type(3) > img')
// }
// {
//     const gobmbtn = page;
//     await gobmbtn.waitForSelector('div:nth-of-type(1) > button.LandAndTravel_buttonTeleport__Z6fS4')
//     await gobmbtn.click('div:nth-of-type(1) > button.LandAndTravel_buttonTeleport__Z6fS4')
//     await gobmbtn.waitForSelector('::-p-aria(Land and Bookmarks[role=\\"image\\"])', { timeout: 360000 });
//     await delay(5000)
// }
// console.log("=> " + 'Land TP Done')
console.log();
console.log();
console.log();

for (let i = 0; i < 35; i++) {
  const gamecontainer = page;
  await gamecontainer.waitForSelector('#game-container');
  await gamecontainer.click('canvas', 
  {
    offset: { x: 253, y: 123 }
  });
  await gamecontainer.click('canvas', 
  {
    offset: { x: 253, y: 121 }
  });
  await delay(500)
  
  try {
    const gamecontainer = page;
    await page.waitForSelector("#__next > div > div.room-layout > div > div.FarmDetails_FarmDetailsPanel__E_VVC.commons_uikit__Nmsxg.commons_frame__f5hXE.commons_scrollArea__dCnqw.commons_orangeinset__J0Z_n > span > span:nth-child(1)", { timeout: 360000 });
    const currentLand = await page.$eval("#__next > div > div.room-layout > div > div.FarmDetails_FarmDetailsPanel__E_VVC.commons_uikit__Nmsxg.commons_frame__f5hXE.commons_scrollArea__dCnqw.commons_orangeinset__J0Z_n > span > span:nth-child(1)", el => el.textContent);
    
    if (currentLand === "#1350" || currentLand === "#1373") 
    {
      await delay(500)
      console.log("==== " + currentLand +" ====>" + ' Closed Land, Moving next...')
      await gamecontainer.waitForSelector('#__next > div > div.room-layout > div > div.FarmDetails_FarmDetailsPanel__E_VVC.commons_uikit__Nmsxg.commons_frame__f5hXE.commons_scrollArea__dCnqw.commons_orangeinset__J0Z_n > button', { timeout: 360000 });
      await gamecontainer.click('#__next > div > div.room-layout > div > div.FarmDetails_FarmDetailsPanel__E_VVC.commons_uikit__Nmsxg.commons_frame__f5hXE.commons_scrollArea__dCnqw.commons_orangeinset__J0Z_n > button');
      await delay(1000)
      await page.keyboard.down('d')
      await delay(3000)
      await page.keyboard.up('d')
      await page.waitForSelector('::-p-aria(Land and Bookmarks[role=\\"image\\"])', { timeout: 360000 });
      await delay(2000)
      await page.keyboard.down('d')
      await delay(1155)
      await page.keyboard.up('d')
      await delay(150)
      await page.keyboard.down('w')
      await delay(100)
      await page.keyboard.up('w')
      await delay(1000)
      await gamecontainer.click('canvas', 
  {
    offset: { x: 253, y: 123 }
  });
      await gamecontainer.click('canvas', 
  {
    offset: { x: 253, y: 121 }
  });
  await delay(1500)
  const skipNextLand = await page.$eval("#__next > div > div.room-layout > div > div.FarmDetails_FarmDetailsPanel__E_VVC.commons_uikit__Nmsxg.commons_frame__f5hXE.commons_scrollArea__dCnqw.commons_orangeinset__J0Z_n > span > span:nth-child(1)", el => el.textContent);
  console.log("==== " + skipNextLand +" ====>" + " Starting...");
  await delay(500)
  await gamecontainer.waitForSelector('#__next > div > div.room-layout > div > div.FarmDetails_FarmDetailsPanel__E_VVC.commons_uikit__Nmsxg.commons_frame__f5hXE.commons_scrollArea__dCnqw.commons_orangeinset__J0Z_n > button', { timeout: 360000 });
  await gamecontainer.click('#__next > div > div.room-layout > div > div.FarmDetails_FarmDetailsPanel__E_VVC.commons_uikit__Nmsxg.commons_frame__f5hXE.commons_scrollArea__dCnqw.commons_orangeinset__J0Z_n > button');
  await delay(1500)
    }
    else if (currentLand === "#1381")
    {
      console.log("==== " + currentLand +" ====> " + "Last land reached, Starting then close...")

      await gamecontainer.click('canvas', {
        offset: { x: 0, y: 0 }
      });
        await page.keyboard.press('Escape')
        energyCheck();
        await delay(1500);
        await delay(500)
        await page.keyboard.down('w');
        await delay(3000);
        await page.keyboard.up('w');
        await delay(2000);
        for (let i = 0; i < 2; i++) {
          await gamecontainer.click('canvas', {
            offset: { x: 249, y: 94 } // CLICK READY
          });
          await delay(1000)
          await gamecontainer.click('canvas', {
            offset: { x: 207, y: 244 } // CLICK READY
          });
          await delay(1000)
          await gamecontainer.click('canvas', {
            offset: { x: 319, y: 249 } // CLICK READY
          });
          await delay(1500)
          try {
            const itemGain = await page.$eval("#__next > div > div.room-layout > div > div.Notifications_root__T0f32 > div > div.Notifications_textContainer__7WhG8 > span", el => el.textContent);
            console.log("=> Mendapatkan " + itemGain);
          } catch (e) {
            console.log("=> Item undefined (Wrong position)");
          }
          await delay(2000)
        }
      console.log("===============>" + ' EVERYTHING IS DONE, Closing browser...');
      await browser.close();
    }
    else if (currentLand === "#1361")
    {
      console.log("==== " + currentLand +" ====>" + " Starting...");
        await page.keyboard.press('Escape')
        await gamecontainer.click('canvas', {
          offset: { x: 0, y: 0 }
        });
        energyCheck();
        await delay(1500);
        await delay(500)
        await page.keyboard.down('w');
        await delay(3000);
        await page.keyboard.up('w');
        await delay(2000);
        for (let i = 0; i < 2; i++) {
          await gamecontainer.click('canvas', {
            offset: { x: 319, y: 146 } // CLICK READY
          });
          await delay(1000)
          await gamecontainer.click('canvas', {
            offset: { x: 207, y: 244 } // CLICK READY
          });
          await delay(1000)
          await gamecontainer.click('canvas', {
            offset: { x: 319, y: 249 } // CLICK READY
          });
          await delay(1500)
          try {
            const itemGain = await page.$eval("#__next > div > div.room-layout > div > div.Notifications_root__T0f32 > div > div.Notifications_textContainer__7WhG8 > span", el => el.textContent);
            console.log("=> Mendapatkan " + itemGain);
          } catch (e) {
            console.log("=> Item undefined (Wrong position)");
          }
          await delay(2000)
        }

        await page.keyboard.down('s');
        await delay(3000)
        await page.keyboard.up('s');
        await delay(500)
        console.log("===============>" + ' DONE, Moving next...');
        console.log();
        await page.keyboard.down('d')
        await delay(3000)
        await page.keyboard.up('d')
        await page.waitForSelector('::-p-aria(Land and Bookmarks[role=\\"image\\"])', { timeout: 360000 });
        await delay(2000)
        await page.keyboard.down('d')
        await delay(1155)
        await page.keyboard.up('d')
        await delay(150)
        await page.keyboard.down('w')
        await delay(100)
        await page.keyboard.up('w')
        await delay(1000)
        await gamecontainer.click('canvas', 
    {
      offset: { x: 253, y: 123 }
    });
        await gamecontainer.click('canvas', 
    {
      offset: { x: 253, y: 121 }
    });
    await delay(1500)
    const skipNextLand = await page.$eval("#__next > div > div.room-layout > div > div.FarmDetails_FarmDetailsPanel__E_VVC.commons_uikit__Nmsxg.commons_frame__f5hXE.commons_scrollArea__dCnqw.commons_orangeinset__J0Z_n > span > span:nth-child(1)", el => el.textContent);
    console.log("==== " + skipNextLand +" ====>" + " Starting...");
    await delay(500)
    await gamecontainer.waitForSelector('#__next > div > div.room-layout > div > div.FarmDetails_FarmDetailsPanel__E_VVC.commons_uikit__Nmsxg.commons_frame__f5hXE.commons_scrollArea__dCnqw.commons_orangeinset__J0Z_n > button', { timeout: 360000 });
    await gamecontainer.click('#__next > div > div.room-layout > div > div.FarmDetails_FarmDetailsPanel__E_VVC.commons_uikit__Nmsxg.commons_frame__f5hXE.commons_scrollArea__dCnqw.commons_orangeinset__J0Z_n > button');
    await delay(1500)
    }
    else {
      console.log("==== " + currentLand +" ====>" + " Starting...");
      await delay(500)
      await gamecontainer.waitForSelector('div.FarmDetails_FarmDetailsPanel__E_VVC > button', { timeout: 360000 })
      await gamecontainer.click('div.FarmDetails_FarmDetailsPanel__E_VVC > button')
      await delay(500);
      energyCheck();
      await delay(1500);
    }
  } catch (e) {
    console.log("=> Land undefined (Wrong position)");
  }
/*

███╗░░░███╗░█████╗░██╗░░░██╗███████╗
████╗░████║██╔══██╗██║░░░██║██╔════╝
██╔████╔██║██║░░██║╚██╗░██╔╝█████╗░░
██║╚██╔╝██║██║░░██║░╚████╔╝░██╔══╝░░
██║░╚═╝░██║╚█████╔╝░░╚██╔╝░░███████╗
╚═╝░░░░░╚═╝░╚════╝░░░░╚═╝░░░╚══════╝
*/

await executeLand();
async function executeLand(){
  await gamecontainer.click('canvas', {
  offset: { x: 0, y: 0 }
});
  await page.keyboard.down('w');
  await delay(3000);
  await page.keyboard.up('w');
  await delay(500);

/*

░█████╗░██╗░░░░░██╗░█████╗░██╗░░██╗
██╔══██╗██║░░░░░██║██╔══██╗██║░██╔╝
██║░░╚═╝██║░░░░░██║██║░░╚═╝█████═╝░
██║░░██╗██║░░░░░██║██║░░██╗██╔═██╗░
╚█████╔╝███████╗██║╚█████╔╝██║░╚██╗
░╚════╝░╚══════╝╚═╝░╚════╝░╚═╝░░╚═╝
*/

  await gamecontainer.waitForSelector('#game-container')
  await gamecontainer.click('canvas', {
    offset: { x: 213, y: 146 } // CLICK READY
  });
  await delay(1000)
  await gamecontainer.click('canvas', {
    offset: { x: 207, y: 244 } // CLICK READY
  });
  await delay(1000)
  await gamecontainer.click('canvas', {
    offset: { x: 319, y: 249 } // CLICK READY
  });
  await delay(1000) 
  await gamecontainer.click('canvas', {
    offset: { x: 316, y: 146 } // CLICK READY
  });
  await delay(1700)
  try {
    const itemGain = await page.$eval("#__next > div > div.room-layout > div > div.Notifications_root__T0f32 > div > div.Notifications_textContainer__7WhG8 > span", el => el.textContent);
    console.log("=> Mendapatkan " + itemGain);
  } catch (e) {
    console.log("=> Item undefined (Wrong position)");
  }
  await delay(2000)
  await gamecontainer.click('canvas', {
    offset: { x: 213, y: 146 } // CLICK START
  });
  await delay(1000)
  await gamecontainer.click('canvas', {
    offset: { x: 207, y: 244 } // CLICK START
  });
  await delay(1000)
  await gamecontainer.click('canvas', {
    offset: { x: 319, y: 249 } // CLICK START
  });
  await delay(1000) 
  try {
    const itemGain = await page.$eval("#__next > div > div.room-layout > div > div.Notifications_root__T0f32 > div > div.Notifications_textContainer__7WhG8 > span", el => el.textContent);
    console.log("=> [BONUS] " + itemGain);
    } catch (e) {
    console.log("=> [BONUS] No Bonus :(");
    }
  await gamecontainer.click('canvas', {
    offset: { x: 316, y: 146 } // CLICK START
  });
  await delay(400)

console.log("=> " + 'Click Done')

await gamecontainer.click('canvas', {
  offset: { x: 0, y: 0 } // Click at the top-left corner to ensure focus
});
await page.keyboard.down('s');
await delay(3000)
await page.keyboard.up('s');
await delay(500)
console.log("===============>" + ' DONE, Moving next...');
console.log();
await page.keyboard.down('d')
await delay(3000)
await page.keyboard.up('d')
await delay(4500)
await page.waitForSelector('#__next > div > div.room-layout > div > div:nth-child(1) > div > div.Hud_bottom__P9XWZ > div > div.Hud_itemsTop__cYzyR', { timeout: 360000 })
await delay(2000)
await page.keyboard.down('d')
await delay(1155)
await page.keyboard.up('d')
await delay(150)
await page.keyboard.down('w')
await delay(100)
await page.keyboard.up('w')
await delay(500)
}}

async function energyCheck() {
  const gamecontainer = page;
  const energySelector = '#__next > div > div.room-layout > div > div:nth-child(1) > div > div.Hud_top__nZRRz.Hud_left__mQoqW > div > div.Hud_energy__67nU9 > div.commons_balanceDisplay__NSs8e.Hud_filledbar__lT290 > span';

  let energyDisp = await page.$eval(energySelector, el => parseInt(el.textContent));
  if (energyDisp < 50) {
    console.log('=> [ENERGY is low...] : ' + energyDisp);
    
    await delay(1000);
    await page.keyboard.press('3');
    await delay(500);
    
    await gamecontainer.click('canvas', {
      offset: { x: 268, y: 230 }
    });
    await delay(500);
    
    await page.keyboard.press('Escape');
    await delay(1500);

    energyDisp = await page.$eval(energySelector, el => parseInt(el.textContent));
    console.log('=> [ENERGY refilled] : ' + energyDisp);
  }
}


// await delay(3000)
// await browser.close();

})();