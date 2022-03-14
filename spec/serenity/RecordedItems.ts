import { TodoMVCApp } from './ui/TodoMVCApp';
import {Text} from '@serenity-js/webdriverio/lib/screenplay/questions'

export const RecordedItems :any = () =>
    Text.ofAll(TodoMVCApp.recordedItems);
