import * as fs from 'fs';
import * as path from 'path';

document.addEventListener('DOMContentLoaded', () => {
  const logEl = document.getElementById('log') as HTMLPreElement;
  const playlistEl = document.getElementById('playlist') as HTMLUListElement;
  const audioEl = document.getElementById('audio-bar') as HTMLAudioElement;

  function log(msg: string) {
    logEl.textContent += msg + '\n';
    logEl.scrollTop = logEl.scrollHeight;
  }

  const videosPath = 'C:\\Users\\LinkMedia\\Desktop\\poo-video-player-electron\\videos';
  if (!fs.existsSync(videosPath)) {
    log(`❌ Pasta não encontrada: ${videosPath}`);
    return;
  }

  const files = fs.readdirSync(videosPath).filter(f => f.endsWith('.mp3'));
  if (files.length === 0) { log('❌ Nenhuma música encontrada.'); return; }

  const playlist: { title: string, src: string }[] = [];
  files.forEach((file, idx) => {
    const filePath = path.join(videosPath, file);
    const src = `file://${filePath.replace(/\\/g,'/')}`;
    const title = file.replace('.mp3', '');
    playlist.push({ title, src });

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = title;
    li.onclick = () => { playTrack(idx); log(`🎵 Música selecionada: ${title}`); };
    playlistEl.appendChild(li);
  });

  let currentIndex = 0;

  function highlightCurrent(idx: number) {
    Array.from(playlistEl.children).forEach((li, i) => li.classList.toggle('active', i === idx));
    currentIndex = idx;
  }

  function playTrack(idx: number) {
    const track = playlist[idx];
    audioEl.src = track.src;
    audioEl.play();
    highlightCurrent(idx);
    log(`▶️ Tocando: ${track.title}`);
  }

  (document.getElementById('btn-play') as HTMLButtonElement).onclick = () => { playTrack(currentIndex); };
  (document.getElementById('btn-pause') as HTMLButtonElement).onclick = () => { audioEl.pause(); log('⏸️ Pausado'); };
  (document.getElementById('btn-stop') as HTMLButtonElement).onclick = () => { audioEl.pause(); audioEl.currentTime = 0; log('⏹️ Parado'); };
  (document.getElementById('btn-next') as HTMLButtonElement).onclick = () => { 
    const next = (currentIndex + 1) % playlist.length; 
    playTrack(next); 
    log('⏭️ Próxima música'); 
  };
  (document.getElementById('btn-prev') as HTMLButtonElement).onclick = () => { 
    const prev = (currentIndex - 1 + playlist.length) % playlist.length; 
    playTrack(prev); 
    log('⏮️ Música anterior'); 
  };

  playTrack(0);
});
