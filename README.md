# POO Video Player Electron

<img width="844" height="260" alt="Captura de tela 2025-08-28 220411" src="https://github.com/user-attachments/assets/a3220d0c-00ab-41f5-862a-43d110ada064" />

**Aluno:** Márcio Soares
**Professor:** Marcelo Ciacco de Almeida
**Escola:** UNIFEOB
**Entrega:** 28/08/2025

Player de áudio com **playlist**, desenvolvido em **TypeScript** e **Electron**, que demonstra os quatro pilares da **Programação Orientada a Objetos (POO)**.

Permite reproduzir músicas `.mp3` de uma pasta local (`videos`), com **controles de reprodução**, **modos de reprodução** (loop e shuffle) e **histórico** exibido na tela.

---

## Funcionalidades

* Reproduz músicas da pasta `videos` automaticamente.
* Lista as músicas na interface com nomes.
* Controles: Play, Pause, Stop, Próximo, Anterior.
* Modos: Loop e Shuffle.
* Histórico de reprodução exibido em logs na tela.
* Interface simples com logs e lista de músicas.

---

## Estrutura do Projeto

```
poo-video-player-electron/
│
├─ src/
│  ├─ models/
│  │  ├─ Video.ts        # Classe base Video
│  │  ├─ Playlist.ts     # Classe Playlist
│  │  ├─ Player.ts       # Classe Player
│  │  ├─ AdVideo.ts      # Subclasse Video para anúncios
│  │  └─ LiveStream.ts   # Subclasse Video para transmissões ao vivo
│  ├─ renderer.ts        # Lógica da interface e integração com Player
│  └─ main.ts            # Inicialização do Electron
│
├─ videos/               # Coloque aqui os arquivos .mp3
├─ index.html            # Interface com lista de músicas e controles
├─ package.json
└─ tsconfig.json
```

---

## Pilares de POO aplicados

1. **Abstração**

   * Classes `Video`, `Playlist` e `Player` com métodos claros: `play()`, `pause()`, `stop()`, `info()`.
   * Interfaces `Playable` e `Describable` definem contratos.

2. **Encapsulamento**

   * Atributos privados ou protegidos (`currentTime`, `videos`, `currentIndex`) com **getters/setters**.

3. **Herança**

   * `AdVideo` e `LiveStream` estendem `Video` com comportamentos diferentes no método `play()` e `info()`.

4. **Polimorfismo**

   * Array de `Video` aceita `Video`, `AdVideo` e `LiveStream`.
   * Chamadas a `play()` e `info()` exibem saídas distintas conforme a subclasse.

---

## Como Executar

1. **Instalar dependências**

```bash
npm install
```

2. **Compilar TypeScript**

```bash
npm run build
```

3. **Executar o Electron**

```bash
npm start
```

4. Coloque seus arquivos `.mp3` na pasta `videos`.

---

## Controles no Player

* **Play / Pause / Stop**: Inicia, pausa ou para a música atual.
* **Next / Previous**: Avança ou volta na playlist.
* **Loop / Shuffle**: Liga/desliga os modos de reprodução.
* **Histórico**: Exibe no log as músicas que foram reproduzidas.
* **Limpar Log**: Limpa o histórico exibido na tela.

---

## Observações

* O player reproduz músicas localmente usando o elemento `<audio>` do HTML.
* Logs aparecem na tela para acompanhamento das ações e histórico.
* Playlist é gerada dinamicamente com base nos arquivos `.mp3` da pasta `videos`.
