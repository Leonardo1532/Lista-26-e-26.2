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
    Titulos = []
    Autores = []
    Editoras = []
    AnosPublicacoes = []
    Disponibilidade = []

    constructor(Titulos, Autores, Editoras, AnosPublicacoes){
        this.Titulos = Titulos
        this.Autores = Autores
        this.Editoras = Editoras
        this.AnosPublicacoes = AnosPublicacoes
    }
}

let meuLivro = new Livro()

meuLivro.Titulos[0] = "Noruega"
meuLivro.Autores[0] = "Renato Shuweguer"
meuLivro.Editoras[0] = "Suma"
meuLivro.AnosPublicacoes[0] = 2020
meuLivro.Disponibilidade[0] = true

meuLivro.Titulos[1] = "O colapso"
meuLivro.Autores[1] = "Francisco Bernardino "
meuLivro.Editoras[1] = "Editora Intrínseca"
meuLivro.AnosPublicacoes[1] = 2010
meuLivro.Disponibilidade[1] = true

meuLivro.Titulos[2] = "Patrimônio"
meuLivro.Autores[2] = "Calebe Swuan"
meuLivro.Editoras[2] = "Editora Rocco"
meuLivro.AnosPublicacoes[2] = 2015
meuLivro.Disponibilidade[2] = false

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
    AcervosDeLivros = []

    constructor(Nome, Endereco, Telefone){
        this.Nome = Nome
        this.Endereco = Endereco
        this.Telefone = Telefone
    }

    BuscarLivro(meuLivro,tituloBusca) {
       
        for (let contador = 0; contador < 3; contador++) {
            if (tituloBusca == meuLivro.Titulos[contador]) {
                console.log("O nome do livro é: " + meuLivro.Titulos[contador])
                console.log("O autor do livro é: " + meuLivro.Autores[contador])
                console.log("A editora do Livro é: " + meuLivro.Editoras[contador])
                console.log("O ano de publicação deste livro é: " + meuLivro.AnosPublicacoes[contador])
            }
        }
    }

    Emprestimo(meuLivro,tituloBusca2) {
        
        for (let index = 0; index < 3; index++) {
            if (tituloBusca2 == meuLivro.Titulos[index]) {
                if (meuLivro.Disponibilidade[index] == true) {
                    meuLivro.Disponibilidade[index] = false
                    return true
                } else {
                    return false
                }
            }
        }
    }

    Devolucao(meuLivro,tituloBusca3) {
        
        for (let index2 = 0; index2 < 3; index2++) {
            if (tituloBusca3 == meuLivro.Titulos[index2]) {
                meuLivro.Disponibilidade[index2] = true
            }
        }
    }

    AdicionarLivroAcervoDeLivros(meuLivro, tituloBusca4){
        
        for(let index3 = 0; index3 < 3; index3++){
            if(tituloBusca4 == meuLivro.Titulos[index3]){
                this.AcervosDeLivros[index3] = meuLivro.Titulos[index3]
            }
        }
    }
}

let minhaBiblioteca = new Biblioteca()
minhaBiblioteca.Nome = "Espaço Leitura"
minhaBiblioteca.Endereco = "Av. Paulista 2090"
minhaBiblioteca.Telefone = "20718039"



