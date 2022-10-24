
class Projeto {
    constructor(titulo, tipo, tecnologia, inicio, fim, repo){
        this.titulo = titulo;
        this.tipo = tipo;
        this.tecnologia = tecnologia;
        this.inicio = inicio;
        this.fim = fim;
        this.repo = repo;
   }
    /* Utilizado para possível validação e não inserção de projetos
      com campos vazios.*/
    validateProject(){
        let prop = Object.getOwnPropertyNames(this);        
        for(let i=0; i< prop.length; ++i){
            if(prop[i]!='id' && this[prop[i]]==''){
                return false;
            }
        }
        return true;     
   }
}


class Pessoa{
    constructor(nome, idade, conhecimentos, formacao, github, linkedin, sobre){
        this.nome = nome;
        this.idade = idade;
        this.conhecimentos = conhecimentos;
        this.formacao = formacao;
        this.github = github;
        this.linkedin = linkedin;
        this.sobre = sobre
    }
}

module.exports = {
    Projeto: Projeto,
    Pessoa: Pessoa
}