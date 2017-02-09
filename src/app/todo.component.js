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
var todo_service_1 = require('./todo.service');
var TodoComponent = (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService
            .getTodos()
            .subscribe(function (res) { return _this.todos = res; }); //OR .subscribe(); 
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'todo',
            template: "      \n      <h3>todos via Observable</h3>\n      <ul>\n        <li *ngFor=\"let todo of todos\">\n          {{ todo.id }} - {{ todo.title }}\n        </li>\n      </ul>\n      <h3>todos via Promise</h3>\n      <ul>\n        <li *ngFor=\"let todoPromise of todosPromise\">\n          {{ todoPromise.id }} - {{ todoPromise.title }}\n        </li>\n      </ul>\n    ",
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map