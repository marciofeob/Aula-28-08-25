import { Video } from './Video';

export class AdVideo extends Video {
  constructor(
    id: string,
    title: string,
    durationSeconds: number,
    author: string,
    private advertiser: string,
    private skippableAfterSeconds: number = 5,
    views: number = 0,
    src: string | null = null
  ) {
    super(id, title, durationSeconds, author, views, src);
  }

  play(): void {
    console.log(`📢 Anúncio de ${this.advertiser}: ${this.title} (Skippable ${this.skippableAfterSeconds}s)`);
    super.play();
  }

  info(): string {
    return `📢 [Ad] ${this.title} — Anunciante: ${this.advertiser} — Skippable: ${this.skippableAfterSeconds}s`;
  }
}
