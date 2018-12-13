import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";
import YouTubePlayer from 'youtube-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vid="https://www.youtube.com/embed/gtiriqJ_HrA"
  player:any;
  contrast: number = 100;
  constructor(public navCtrl: NavController, private dom: DomSanitizer) {
  }
  ngAfterViewInit() {
    this.dom.bypassSecurityTrustResourceUrl('*://*.youtube.com/*');
    this.player = YouTubePlayer('existing-iframe-example',{
      height: '320px',
      width: '100%',
      // videoId: 'gtiriqJ_HrA',
      playerVars: {
        'autoplay': 1, 
        'rel': 0, 
        'controls': 1, 
        'fs': 1, 
        'playsinline': 1, 
        'listType': 'playlist', 
        'list': 'PLNI-cJa63vBKN5r5GRGq5anqJeZ_hwWCw', 
        'enablejsapi': 1,
        'showinfo':0
      },
      // events: {
      //   'onReady': this.onPlayerReady(event)
      // }
    });
    // this.player.loadVideoById('gtiriqJ_HrA');
    // this.player.playVideo();
    
    this.player.on('ready', (event) => {
      console.log(event);
      event.target.setVolume(0);
      // this.onPlayerReady(event)
      // console.log(this.player.setVolume(0))
      // event.data
    });
    // this.player.hideVideoInfo()
    this.headerVideo()
  }

  onPlayerReady(event) {
    // this.player.hideVideoInfo()
    event.target.setVolume(0);
    // .then((rs)=>{console.log(rs)})
    // .catch((e)=>{console.log(e)})
  }
  mute() {
    this.player.mute();
  }
  unmute() {
    this.player.unMute();
  }

  volumeChange() {
    this.player.setVolume(this.contrast)
  }

  pause() {
    this.player.pauseVideo();
  }

  play() {
    this.player.playVideo()
  }

 /*  ngAfterViewInit() {
    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    (<any>window).onYouTubeIframeAPIReady = () => {
      this.player = new (<any>window).YT.Player('existing-iframe-example', {
        height: '100%',
        width: '100%',
        videoId: 'gtiriqJ_HrA',
        playerVars: {'autoplay': 1, 'rel': 0, 'controls': 2},
        events: {
          'onReady': () => {
          },
          'onStateChange': event => console.log(event),
        }
      });
    };
    this.onReady()
    // console.log(this.player)
  }

  onReady() {
    console.log(this.player)
  } */

sanitize(vid) {
  return this.dom.bypassSecurityTrustResourceUrl(vid)
}


headerVideo(){
  const element: HTMLIFrameElement = document.getElementById('existing-iframe-example') as HTMLIFrameElement;
  const existingIframe = element.contentWindow;

  console.log(existingIframe)
}






}
