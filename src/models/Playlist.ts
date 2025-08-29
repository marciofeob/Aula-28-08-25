import { Video } from './Video';

export class Playlist {
  private videos: Video[] = [];
  private currentIndex: number = 0;

  add(video: Video) { this.videos.push(video); }
  getCurrent(): Video | null { return this.videos[this.currentIndex] || null; }
  getCurrentIndex(): number { return this.currentIndex; }
  setCurrentIndex(idx: number) { if(idx>=0 && idx<this.videos.length) this.currentIndex=idx; }
  next(): Video | null { this.currentIndex = (this.currentIndex+1)%this.videos.length; return this.getCurrent(); }
  previous(): Video | null { this.currentIndex = (this.currentIndex-1+this.videos.length)%this.videos.length; return this.getCurrent(); }
  getAll(): Video[] { return [...this.videos]; }
}
