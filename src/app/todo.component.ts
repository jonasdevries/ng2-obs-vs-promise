import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { OnInit } from '@angular/core';

import { Todo } from './datatypes/todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'todo',
    template: `      
      <h3>todos via Observable</h3>
      <ul>
        <li *ngFor="let todo of todos">
          {{ todo.id }} - {{ todo.title }}
        </li>
      </ul>
      <h3>todos via Promise</h3>
      <ul>
        <li *ngFor="let todoPromise of todosPromise">
          {{ todoPromise.id }} - {{ todoPromise.title }}
        </li>
      </ul>
    `,
    providers:[TodoService]
  })
export class TodoComponent implements OnInit { 
    
    todos: Todo[];
    todosPromise: Todo[];

    constructor(private todoService:TodoService){}

    ngOnInit():void {        
        this.todoService
              .getTodos()
              .subscribe(res => this.todos = res);   //OR .subscribe(); 
    }        

}  