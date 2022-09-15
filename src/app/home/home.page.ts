import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
//import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
//import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
//import { Admob, AdmobOptions, AdmobOriginal } from '@ionic-native/admob';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  words=['trivia','math','date','year'];
  dataN={
    text:'',
    number:'',
    type:'',
    year:'',
    date:''
  }; 

  

  constructor(
    private http: HTTP,
    private admob:AdMobPro
    //private http:HttpClient
    //private admob: AdmobOriginal
    
    ) { 
      /*
      const admobOptions: AdmobOptions = {
        bannerAdId: 'ca-app-pub-7994229315092036~6984944352',
        //interstitialAdId: 'XXX-XXXX-XXXX',
        //rewardedAdId: 'XXX-XXXX-XXXX',
        isTesting: true,
        autoShowBanner: false,
        autoShowInterstitial: false,
        autoShowRewarded: false,
        adSize: this.admob.AD_SIZE.BANNER
      };
  
      // Set admob options
      this.admob.setOptions(admobOptions)
        .then(() => console.log('Admob options have been successfully set'))
        .catch(err => console.error('Error setting admob options:', err));
      // (Optionally) Load banner ad, in order to have it ready to show
      this.admob.createBannerView()
      .then(() => console.log('Banner ad loaded'))
      .catch(err => console.error('Error loading banner ad:', err));


      // Show banner ad (createBannerView must be called before and onAdLoaded() event raised)
      this.admob.onAdLoaded().subscribe((ad) => {
      if (ad.adType === this.admob.AD_TYPE.BANNER) {
        this.admob.showBannerAd()
          .then(() => console.log('Banner ad shown'))
          .catch(err => console.error('Error showing banner ad:', err));
      }
      });


      // Hide banner ad, but do not destroy it, so it can be shown later on
      // See destroyBannerView in order to hide and destroy banner ad
      this.admob.showBannerAd(false)
      .then(() => console.log('Banner ad hidden'))
      .catch(err => console.error('Error hiding banner ad:', err));
      */
      /*
      let word=this.words[this.getRandom()];
      this.readAPI('http://numbersapi.com/random/'+word+'?json')
      .subscribe((data) =>{
        
        this.dataN.text=data['text'];
        this.dataN.number=data['number'];
        this.dataN.type=data['type'];
        this.dataN.year=data['year'];
        this.dataN.date=data['date'];

      })
      */
      


    //=======================A DECOMMENTER LORS DE LA CONSTRUCTION DU PROJET
    
   // this.generateInfoWeb()
      
  }

  ngOnInit() {
  }
  getRandom(){
    return Math.floor(Math.random()*Math.floor(4));
  }
  /*
  readAPI(URL:string){
    return this.http.get(URL);
  }
  */
  
  //=======================A DECOMMENTER LORS DE LA CONSTRUCTION DU PROJET
   /*
  generateInfo(){
    let word=this.words[this.getRandom()];
    this.http.get('http://numbersapi.com/random/'+word+'?json',{},{})
      .then(res =>{
        this.dataN.text=JSON.parse(res.data).text;
        //this.dataN.text=res.data;

        this.dataN.number=JSON.parse(res.data).number;
        this.dataN.type=JSON.parse(res.data).type;
        this.dataN.year=JSON.parse(res.data).year;
        this.dataN.date=JSON.parse(res.data).date;
      })
      .catch(error =>{
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      })
  }
  *
 generateInfoWeb(){
  let word=this.words[this.getRandom()];
  this.readAPI('http://numbersapi.com/random/'+word+'?json')
      .subscribe((data) =>{
        let word=this.words[this.getRandom()];
        this.dataN.text=data['text'];
        this.dataN.number=data['number'];
        this.dataN.type=data['type'];
        this.dataN.year=data['year'];
        this.dataN.date=data['date'];

 });
}

*/
showBanner() {
  alert('Hello b3d ads s');
  let adId="ca-app-pub-7994229315092036/8100738993";
  this.admob.createBanner({
    adId: adId,
    isTesting: true // remove in production 
  })
    .then(() => {
      this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
    })
    .catch((err) => {
      console.log(err);
    });
   
 
}

test(){
  alert('Hello world');
}





}

