export class Video {
  private currentTime: number = 0;
  private audioEl: HTMLAudioElement | null = null;

  constructor(
    public id: string,
    public title: string,
    private durationSeconds: number,
    public author: string,
    private views: number = 0,
    public src: string | null = null
  ) {}

  setAudioElement(audio: HTMLAudioElement) {
    this.audioEl = audio;
    if (this.src) this.audioEl.src = this.src;
  }

  play() {
    if (this.audioEl && this.src) {
      this.audioEl.src = this.src;
      this.audioEl.play();
      this.views++;
    }
  }

  pause() { this.audioEl?.pause(); }
  stop() { this.audioEl?.pause(); if(this.audioEl) this.audioEl.currentTime=0; }

  info(): string {
    return `${this.title} - ${this.author} (${this.views} views)`;
  }
}
