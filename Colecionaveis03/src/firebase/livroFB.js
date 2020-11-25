import conexaoFB from './conexaoFB';

export default class LivroFB {
  constructor() {
    this.state = {
      colecao: conexaoFB.collection('ColecionaveisFirestore/itens/livros'),
    };
  }

  pegarColecao() {
    return this.state.colecao;
  }

  adicionarLivro(livro) {
    this.state.colecao.add(livro);
  }

  editarLivro(livro) {
    const { id } = livro;
    delete livro.id;

    this.state.colecao.doc(id).update(livro);
  }

  removerLivro(livro) {
    const { id } = livro;

    this.state.colecao.doc(id).delete();
  }
}
