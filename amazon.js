console.log("first Script using phantom >> \n says Hello world!");

var page = require('webpage').create(),
  system = require('system'),
  t, address;

//settings
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36';
page.settings.javascriptEnabled = true;
page.settings.loadImages = false;//Script is much faster with this field set to false
phantom.cookiesEnabled = true;
phantom.javascriptEnabled = true;
//settings


console.log('All settings loaded, start with execution');
var flag= 0;
/**********DEFINE STEPS THAT FANTOM SHOULD DO***********************/

page.open('http://www.amazon.in',function (success) {
    if(success) {
        console.log('success');
        page.render("lets see"+1+".png")
        manipulatingThings1();
    }
    else
        console.log("not received success");
})


var step = [];
 

function manipulatingThings1() { 
    flag = page.evaluate(function () {
        document.getElementById('nav-link-yourAccount').click();
        //return 1;
    });
    submitLogindetails();

}


function submitLogindetails () {
    flag = page.evaluate(function () {
         document.getElementById('ap_email').text = 'abhinavpandey.1996@gmail.com';
          document.getElementById('ap_password').text = '936867472'; 
    })
       
    setInterval(function() {
        if(flag == 1 && loadInProgress == false) {
        page.render("afterClickLogin.png");
        phantom.exit(); }
    },200);
   
}


/**********END STEPS THAT FANTOM SHOULD DO***********************/


/**
 * These listeners are very important in order to phantom work properly. Using these listeners, we control loadInProgress marker which controls, weather a page is fully loaded.
 * Without this, we will get content of the page, even a page is not fully loaded.
 */
page.onLoadStarted = function() {
    loadInProgress = true;
    console.log('Loading started');
};
page.onLoadFinished = function() {
    loadInProgress = false;
    console.log('Loading finished');
};
page.onConsoleMessage = function(msg) {
    console.log(msg);
};
