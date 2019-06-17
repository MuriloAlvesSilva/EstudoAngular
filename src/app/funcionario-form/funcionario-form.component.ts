import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
 // styles: [`
   // 
  //`]
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  nome = 'Murilo';
  adicionado = false;
  @Output() funcionarioAdicionado = new EventEmitter();

  //adicionar(nome: string){
  //    this.nome = nome;
  //} 

  alterarNome(event: any){
    //console.log(event);
    this.nome = event.target.value;
  }
  
  adicionar(){    
    this.adicionado = true;

    const funcionario = {
      id:  ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }
  

}
