import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Todo } from './datatypes/todo';

@Injectable()
export class TodoService {   

    constructor(public http: Http){}

    // subscribe to Observable to get todo list
    getTodos() {    
        return this.http.get('https://jsonplaceholder.typicode.com/todos/')        
        .map(res => res.json())                 //OR .map((res) => {return res.json();})
        .map((todos: Array<any>) => {          
            let result:Todo[] = [];             //OR let result:Array<Todo> = [];
            todos.forEach((todo) => {
                result.push(new Todo(todo.id, todo.userId, todo.title));
            });                 
            return result;
        })                        
    }  
    
    // get todo with Promise
    getPromise(): Promise<Todo[]> {
        return this.http.get('http://jsonplaceholder.typicode.com/todos/')
               .toPromise()
               .then(response => response.json().data as Todo[])
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }         

}  