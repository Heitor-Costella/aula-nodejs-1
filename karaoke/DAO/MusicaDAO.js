const { Musica } = require('../musica');

class MusicaDAO {
  constructor() {
    this.musicas = [];
    this.proximoId = 1;
    this._carregarDadosIniciais();
  }

  // Insere uma música inicial de exemplo ao iniciar a aplicação
  _carregarDadosIniciais() {
    const myHero = this.inserir('My Hero', 'Foo Fighters');
    if (myHero && typeof myHero.addParte === 'function') {
      myHero.addParte('Intro', 'Too bold or too proud...');
      myHero.addParte('Refrão', 'There goes my hero...');
    }
  }

  // 1. Listar todas as músicas
  listarTodas() {
    return this.musicas;
  }

  // 2. Buscar por ID
  buscarPorId(id) {
    return this.musicas.find(m => m.id === Number(id)) || null;
  }

  // 3. Inserir nova música
  inserir(nome, artista) {
    const novaMusica = new Musica(nome, artista);
    novaMusica.id = this.proximoId++;
    this.musicas.push(novaMusica);
    return novaMusica;
  }

  // 4. Atualizar música existente
  atualizar(id, nome, artista) {
    const musica = this.buscarPorId(id);
    if (!musica) return null;

    musica.nome = nome;
    musica.artista = artista;
    return musica;
  }

  // 5. Remover música por ID
  remover(id) {
    const indice = this.musicas.findIndex(m => m.id === Number(id));
    if (indice === -1) return null;

    return this.musicas.splice(indice, 1)[0];
  }
}

// Exporta uma única instância da classe (Padrão Singleton)
module.exports = new MusicaDAO();