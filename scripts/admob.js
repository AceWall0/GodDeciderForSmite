function initAd(){
    if ( window.plugins && window.plugins.AdMob ) {
//        var ad_units = {
//            android : {
//                banner: 'ca-app-pub-4001418226819799/7694562937'	//PUT ADMOB ADCODE HERE
//            }
//        };
//        var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;

        window.plugins.AdMob.setOptions( {
            publisherId: 'pub-4001418226819799',
            adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER,	//use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD
            bannerAtTop: false, // set to true, to put banner at top
            overlap: true, // banner will overlap webview 
            offsetTopBar: false, // set to true to avoid ios7 status bar overlap
            //isTesting: true, // receiving test ad
            autoShow: false // auto show interstitial ad when loaded
        });

        window.plugins.AdMob.createBannerView();
//        window.plugins.AdMob.createInterstitialView();	//get the interstitials ready to be shown
//        window.plugins.AdMob.requestInterstitialAd();

    } else {
        //alert( 'admob plugin not ready' );
    }
}

document.addEventListener("deviceready", initAd, false);