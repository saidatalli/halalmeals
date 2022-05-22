# halalmeals
Halal means food made in line with Islamic guidelines. This means that muslims don't eat pork or drink alcohol. It is not easy to find halal-friendly restaurant especially if you like trying new meals. So I made this app for muslims to safely explore other foods. The meal recipes are free from certain ingredients (e.g. wine, pork, bacon, etc). 

**Link to project:** 
https://halalmeals.netlify.app/


![gif of halal meals webapp](https://media.giphy.com/media/52T2Ytb3Yp2NpLrkUV/giphy.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, API

I made a request to themealDB API to get meals data. Then, I removed all the meals that contained ingredients like pork, wine etc. I inserted the remaining meals under appropriate opt group in html select element. When user choose any meal from the select element, it gets data back from the themealDB API. I inserted that data in the DOM. Finally, I styled the app with css.

## Optimizations

I appended the ingredients as a child to the ul element. It eliminated the concatenation bug when user makes multiple choices without refreshing the page. I am currently optimizing the app for various viewports.

## Lessons Learned:

I learnt to always clear current content so that results do not concatenate when user makes repeated requests on the app.

## My other projects:
Take a look at other projects that I have in my porfolio:

**Ewatomi Beauty Salon:** https://github.com/saidatalli/ewatomibeautysalon

**Sunshine Nursery:** https://github.com/saidatalli/sunshinenursery

**Taste of Africa:** https://github.com/saidatalli/tasteofafrica



