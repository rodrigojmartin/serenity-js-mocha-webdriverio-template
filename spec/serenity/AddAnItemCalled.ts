import { Task } from '@serenity-js/core';
import { Enter, Press } from '@serenity-js/webdriverio';
import {Key} from '@serenity-js/webdriverio/lib/input'
import { TodoMVCApp } from './ui/TodoMVCApp';

export const AddAnItemCalled = (name: string) =>
    Task.where(`#actor adds an item called "${ name }"`,
        Enter.theValue(name).into(TodoMVCApp.newTodoField),
        Press.the(Key.Enter).in(TodoMVCApp.newTodoField),
    );
