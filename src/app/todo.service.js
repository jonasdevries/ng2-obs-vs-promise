"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var todo_1 = require('./datatypes/todo');
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
    }
    // subscribe to Observable to get todo list
    TodoService.prototype.getTodos = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/todos/')
            .map(function (res) { return res.json(); }) //OR .map((res) => {return res.json();})
            .map(function (todos) {
            var result = []; //OR let result:Array<Todo> = [];
            todos.forEach(function (todo) {
                result.push(new todo_1.Todo(todo.id, todo.userId, todo.title));
            });
            return result;
        });
    };
    // get todo with Promise
    TodoService.prototype.getPromise = function () {
        return this.http.get('http://jsonplaceholder.typicode.com/todos/')
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TodoService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map