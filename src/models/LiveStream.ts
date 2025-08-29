import { Video } from './Video';
export class LiveStream extends Video {
  constructor(id: string, title: string, public streamer: string, public concurrentViewers: number = 0, src: string | null = null) {
    super(id, title, 0, streamer, 0, src);
  }
  play(): void { console.log(`📺 Ao vivo: ${this.title} de ${this.streamer}`); super.play(); }
  info(): string { return `📺 Live: ${this.title} — ${this.streamer}`; }
}
