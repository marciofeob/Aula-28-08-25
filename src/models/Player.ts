import { Playlist } from './Playlist';
import { Video } from './Video';

export class Player {
  private state: 'stopped' | 'playing' | 'paused' = 'stopped';
  private loop: boolean = false;
  private shuffle: boolean = false;
  private history: string[] = [];
  private shuffleOrder: number[] = [];

  constructor(private playlist: Playlist, private audioEl: HTMLAudioElement) {}

  private getCurrentVideo(): Video | null { return this.playlist.getCurrent(); }

  play() {
    const video = this.getCurrentVideo();
    if(video) {
      video.setAudioElement(this.audioEl);
      video.play();
      this.state = 'playing';
      this.history.push(video.title);
    }
  }

  pause() { this.getCurrentVideo()?.pause(); this.state='paused'; }
  stop() { this.getCurrentVideo()?.stop(); this.state='stopped'; }

  next() {
    if(this.shuffle && this.shuffleOrder.length===0) this.createShuffleOrder();
    if(this.shuffle) {
      const nextIdx = this.shuffleOrder.shift()!;
      this.playlist.setCurrentIndex(nextIdx);
    } else {
      this.playlist.next();
    }
    this.play();
  }

  previous() { this.playlist.previous(); this.play(); }

  setLoop(on:boolean){ this.loop=on; }
  setShuffle(on:boolean){ this.shuffle=on; if(on) this.createShuffleOrder(); }
  isLoop(): boolean { return this.loop; }
  isShuffle(): boolean { return this.shuffle; }
  getHistory(): string[] { return [...this.history]; }

  private createShuffleOrder() {
    this.shuffleOrder = this.playlist.getAll().map((_,i)=>i);
    for(let i=this.shuffleOrder.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [this.shuffleOrder[i], this.shuffleOrder[j]] = [this.shuffleOrder[j], this.shuffleOrder[i]];
    }
  }
}
