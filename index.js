
const puppeteer = require('puppeteer');




// const scrapeInfiniteScrollItems = async (page) => {
//   while (true) {
//     previousHeight = await page.evaluate("document.body.scrollHeight");
//     await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
//     await page.waitForFunction(
//       `document.body.scrollHeight > ${previousHeight}`
//     );
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//   }
// }

(async function () {
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('https://www.flashscore.co.uk/football/france/ligue-2/results/');
  // await page.click('#onetrust-accept-btn-handler')
  // scrapeInfiniteScrollItems(page)
  await page.waitForTimeout(1000);
  const element = await page.$('#onetrust-accept-btn-handler');
  await page.waitForTimeout(1000);
  const events = await page.$('.adsenvelope  ');
  await page.evaluate(events => events.remove(), events);
  
  await page.waitForTimeout(1000);
  await page.evaluate(element => element.click(), element);
  await page.waitForTimeout(1000);
  const element2 = await page.$('.event__more--static');
  await page.evaluate(element => element.click(), element2);
  await page.waitForTimeout(1000);
  // const element3 = await page.$('.event__more--static');
  // await page.evaluate(element => element.click(), element3);
  // await page.waitForTimeout(2000);
  // const element6 = await page.$('.event__more--static');
  // await page.evaluate(element => element.click(), element6);
  // await page.waitForTimeout(3000);
  // const element7 = await page.$('.event__more--static');
  // await page.evaluate(element => element.click(), element7);
  // await page.waitForTimeout(3000);
  

  const data = await page.evaluate(async function() {

    const events = document.querySelectorAll('.event__match ');
    const array = [];
    // await page.waitForTimeout(2000);


    for ( let i = 0; i <16; i++) {
      // const country = events[i].querySelector('.breadcrumb__link').innerText;
      // const league = events[i].querySelector('.event__title--name').innerText;
      const homeTeam = events[i].querySelector('.event__participant--home').innerText;
      const awayTeam = events[i].querySelector('.event__participant--away').innerText;
      const homeGoals = events[i].querySelector('.event__score--home').innerText;
      const awayGoals = events[i].querySelector('.event__score--away').innerText;
      let homeHalfTimeGoals = events[i].querySelector('.event__part--home').innerText;
      homeHalfTimeGoals = homeHalfTimeGoals.charAt(1)
      let awayHalfTimeGoals = events[i].querySelector('.event__part--away').innerText;
      // const jsHandle = await events[i].getProperty("id")
      // let match = events[i].querySelector('.event__match ');
      // let path = [];
      // path.push(match.id)
      // let newPath = path.map((x, i) => i> 3)
      awayHalfTimeGoals = awayHalfTimeGoals.charAt(1)
      const totalGoals = (+homeGoals + +awayGoals);
      const halfTimeGoals = +homeHalfTimeGoals + +awayHalfTimeGoals;
      const secondHalfGoals = totalGoals - halfTimeGoals
      let btts = 0;
      // let path = document.querySelector("#g_1_tfzLo9sb")
      // let newPath = []
      // let pathKey
      
      // for(let i = 4; i < path.length; i++) {
      //   newPath.push(path[i])
      //   pathKey = newPath.toString()
      //   console.log(pathKey);
      // }
      
      
     

      if (homeGoals > 0 && awayGoals > 0) {
        btts = 1
      }
    //   (async function () {
    //     const browser = await puppeteer.launch({headless : false});
    //     const page = await browser.newPage();
    //     await page.goto('https://www.flashscore.co.uk/match/`${pathKey}/#/match-summary/match-summary');

    // })
    
      // events[i].click()
      
      // const team = events[i].querySelector('.matchReportPreviewLabel ').innerHTML;

      // console.log(team);
      
      // const puppeteer = require('puppeteer');
      // const browser = await puppeteer.launch({headless : false});
      // const page = await browser.newPage();
      // const events6 = await page.$('.#detail > div.tabs.tabs__detail--nav > div > a:nth-child(4)  ');
      // await page.evaluate(event => event.click(), events6);
      // document.querySelector("#detail > div.tabs.tabs__detail--nav > div > a:nth-child(4)")
      
      // await page.goto(`https://www.flashscore.co.uk/match/${jsHandle}/#/match-summary/match-summary`);
      
    // await page.goto(`https://www.flashscore.co.uk/match/${newPath}/#/match-summary/match-summary`);


      

      // const team = events[i].querySelector('.participant__participantName ');

      // const page = await browser.newPage();
  //     await page.goto(`https://www.flashscore.co.uk/match/${path}/#/match-summary/match-summary`);
  //     const element = await page('.tabs__group:nth-child(2)');
  // await page.evaluate(element => element.click(), element);
      

      

   
      
      
      // await events[i].click('#detail > div.tabs.tabs__detail--nav > div > a:nth-child(3)')
      // const element4 = events[i].querySelector('#detail > div.tabs.tabs__detail--nav > div > a:nth-child(3)');

      // const element = await events[i].$('#detail > div.tabs.tabs__detail--nav > div > a:nth-child(3)');
      // await events[i].evaluate(element => element.click(), element);

      // console.log(element);
      
      

      // const homeFormation = events[i].querySelector("#detail > div:nth-child(8) > div.lf__header.section__title > span:nth-child(1)");
      // const awayFormation = events[i].querySelector("#detail > div:nth-child(8) > div.lf__header.section__title > span:nth-child(3)");


      array.push({
        // country: country,
        // league: league,
        homeTeam: homeTeam,
        awayTeam: awayTeam,
        homeGoals: +homeGoals,
        awayGoals: +awayGoals,
        totalGoals: +totalGoals,
        homeHalfTimeGoals: +homeHalfTimeGoals,
        awayHalfTimeGoals: +awayHalfTimeGoals,
        halfTimeGoals: +halfTimeGoals,
        secondHalfGoals: +secondHalfGoals,
        homeFormation: "4231",
        awayFormation: "4231",
        firstGoalTime: 0,
        btts: btts,
      


      })
      
      console.log(array);
      console.log(...array)
    }
    return {array};
    
    
    
  })
  console.log(data);
  
  
}) ();

