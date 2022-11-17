/*
1. Crie uma classe Livro com as seguintes propriedades:
● Titulo - qual o nome do livro;
● Autor- quem escreveu o livro;
● Editora - qual empresa que publicou o livro;
● Ano de publicação - o ano em que o livro foi publicado
● Disponibilidade - se o livro está disponível ou não (verdadeiro ou falso);

2. Crie alguns objetos da classe Livro e adicione-os em um array;

Lista 26.2:
1. Crie um método construtor para a classe Livro que recebe como parâmetro as
informações que serão atribuídas as propriedades, com exceção de
“Disponibilidade” que deve ter por padrão o valor “true” quando o objeto for criado;
*/


class Livro {
    Titulo
    Autor
    Editora
    AnosPublicacao
    Disponibilidade

    constructor(titulo, autor, editora, anospublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnosPublicacao = anospublicacao
        this.Disponibilidade = true
    }
}

let meuLivro1 = new Livro("Noruega", "Renato Shuweguer", "Editora Suma", 2020)

let meuLivro2 = new Livro("O colapso", "Francisco Bernardino", "Editora Intrínseca", 2010)

let meuLivro3 = new Livro("Patrimônio", "Calebe Swuan", "Editora Rocco", 2015)


/*
3. Crie uma classe Biblioteca com as seguintes propriedades:
● Nome - nome da biblioteca;
● Endereco - onde a biblioteca fica localizada;
● Telefone - telefone de contato da biblioteca


4. Adicione na classe Biblioteca um método para buscar um livro específico, deve
passar como parâmetro o nome do livro e exibir no console todas as informações
de um livro;


5. Adicione na classe Biblioteca um método de empréstimo de um livro, deve ser
passado como parâmetro o nome do livro, então verificar a disponibilidade e se
estiver disponível retornar true e trocar o valor da propriedade do livro para false, se
não estiver disponível retornar false.

6. Adicione na classe Biblioteca um método de devolução de um livro, deve ser
passado como parâmetro o nome do livro, então trocar o valor da propriedade de
disponibilidade desse livro para true;

7. Crie um objeto da classe Biblioteca e chame seus métodos.

Lista 26.2:
2. Na classe Biblioteca, adicione uma nova propriedade “AcervoDeLivros” que deve
ser um array;

3. Crie um método construtor para a classe Biblioteca que deve receber como
parâmetro as informações que serão atribuídas as propriedades, com exceção da
“AcervoDeLivros”;

4. Na classe Biblioteca crie um método para adicionar um novo Livro na propriedade
“AcervoDeLivros”;
*/

class Biblioteca {
    Nome
    Endereco
    Telefone

    constructor(nome, endereco, telefone) {
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
    }

    AcervosDeLivros = []



    BuscarLivro(tituloBusca) {

        for (let contador = 0; contador < this.AcervosDeLivros.length; contador++) {

            if (tituloBusca == this.AcervosDeLivros[contador].Titulo) {

                console.log("O nome do livro é: " + this.AcervosDeLivros[contador].Titulo)

                console.log("O autor do livro é: " + this.AcervosDeLivros[contador].Autor)

                console.log("A editora do Livro é: " + this.AcervosDeLivros[contador].Editora)

                console.log("O ano de publicação deste livro é: " + this.AcervosDeLivros[contador].AnosPublicacao)
            }
        }
    }

    Emprestimo(tituloBusca2) {

        for (let index = 0; index < this.AcervosDeLivros.length; index++) {

            if (tituloBusca2 == this.AcervosDeLivros[index].Titulo) {

                if (this.AcervosDeLivros[index].Disponibilidade == true) {

                    console.log("O livro esta disponivel")
                    this.AcervosDeLivros[index].Disponibilidade = false
                    return true

                } else {

                    console.log("O livro não esta disponível")
                    return false
                }
            }
        }
    }

    Devolucao(tituloBusca3) {

        for (let index2 = 0; index2 < this.AcervosDeLivros.length; index2++) {

            if (tituloBusca3 == this.AcervosDeLivros[index2].Titulo) {

                this.AcervosDeLivros[index2].Disponibilidade = true

                console.log("Devolução executada com sucesso")
            }
        }
    }

    AdicionarLivroAcervoDeLivros(livro) {

        this.AcervosDeLivros.push(livro)
        console.log("Livro adicionado no Acervo de Livros com sucesso")

    }
}

let minhaBiblioteca = new Biblioteca()
minhaBiblioteca.Nome = "Espaço Leitura"
minhaBiblioteca.Endereco = "Av. Paulista 2090"
minhaBiblioteca.Telefone = "20718039"



