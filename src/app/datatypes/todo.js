"use strict";
var Todo = (function () {
    function Todo(id, userId, title) {
        this.id = id;
        this.userId = userId;
        this.title = title;
    }
    Todo.prototype.setComplete = function () {
        this.completed = true;
        this.completeDate = new Date();
    };
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map