class Aluno{
    constructor(){
        this.id = 1;
        this.arrayAlunos = []
    }

    Adicionar(){
       // alert(`PASSANDO PELO ADICIONAR`)
        //1º Ler os dados
        let aluno = this.LerDados()
        console.log('1')
        //2º Validar os dados
        let validado = this.Validar(aluno)
        if(validado == true){
            //3º Salvar os dados
            this.Salvar(aluno)
        }    
        //Conferir se os alunos são adicionados ao array
        //console.log(this.arrayAlunos)
        
        //4ª Puxar a função  
        this.Listar()
        
        //5ª Puxar a função  
        this.Limpar()
    }    
     
    //4ª
    Listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerText =''

        //console.log (this.arrayAlunos.length)
            
            //Pecorrer a array
        for (let i = 0; i < this.arrayAlunos.length ; i ++){
            //console.log(this.arrayAlunos[i].id)
            let trow = tbody.insertRow(); //função do JS  qie permite que eu insira uma nova linha 
            
            let td_id= trow.insertCell()
            let td_nome= trow.insertCell()
            let td_media= trow.insertCell()    
            let td_remover= trow.insertCell()
            
            //alert("PASSANDO NA FUNÇÃO LISTAR")

            td_id.innerText = this.arrayAlunos[i].id;
            td_nome.innerText = this.arrayAlunos[i].nomeAluno;
            td_media.innerText = this.arrayAlunos[i].mediaAluno;
        

        //Remover item da lista
            let bt_remover=document.createElement("button");
            bt_remover.textContent="Remover";
            td_remover.appendChild(bt_remover); //Inserir o botão na celula

            bt_remover.onclick=()=>{
                aluno.Remover(this.arrayAlunos[i].id)
            };
            td_remover.appendChild(bt_remover);
            //6ª Puxar a função 
            this.Remover()
        }
    }
    //5ª
    Limpar(){
         alert(`PASSANDO PELO ADICIONAR`)
        document.getElementById('nome').value=''    
        document.getElementById('media').value=''   
    
    }
    
    Remover(id){
       let tbody = document.getElementById('tbody')
    
       for (let i = 0; i < this.arrayAlunos.length ; i ++){

        //pecorrer aluno a aluno do array até encotrar o ID do parâmetro
        if(this.arrayAlunos[i].id==id){
            //apafar da memoraria - conforme o index = 2º parâmetro de vezes
            this.arrayAlunos.splice(i,1)
            //apagar a linha de tbody - interface
            tbody.deleteRow(i)
        }
       }
       alert ('O ALUNO FOI EXCLUIDO COM SUCESSO')
    }


    //ler as informações e colocá-las dentro de um objeto.
    LerDados(){
        let aluno = {}

        aluno.id = this.id;
        aluno.nomeAluno = document.getElementById('nome').value
        aluno.mediaAluno = document.getElementById('media').value

        return aluno
    }

    //validar os dados
    Validar(aluno){
        let msg = ' '

        if(aluno.nomeAluno == ' '){
            msg = msg + 'Informe o nome do aluno. \n'
        }
        if(aluno.mediaAluno == ' '){
            msg = msg + 'Informe a média final do aluno. \n'
        }
        if(msg != ' '){
            alert(msg)
            return false
        }

        return true
    }

    Salvar(aluno){
        this.arrayAlunos.push(aluno)
        this.id++
    }
}   
 
var aluno = new Aluno();