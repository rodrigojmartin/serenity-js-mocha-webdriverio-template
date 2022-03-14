import { by, Target } from "@serenity-js/webdriverio";

export class TodoMVCApp {
    static newTodoField = Target.the(`new todo field`).located(by.css(`.new-todo`));
    static recordedItems = Target.all(`recorded items`).located(by.css(`.todo-list li`));
}
