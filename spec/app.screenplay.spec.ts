import { Ensure, equals } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { OpenTheApp} from './serenity/OpenTheApp';
import { AddAnItemCalled } from './serenity/AddAnItemCalled';
import { RecordedItems } from './serenity/RecordedItems';
import { describe, it } from 'mocha';


describe('Todo List App - Screenplay', () => {

    it('helps us learn Serenity/JS', () =>
        actorCalled('Jasmine')
            .attemptsTo(
                OpenTheApp(),
                AddAnItemCalled('Learn Screenplay'),
                AddAnItemCalled('Love Testing!'),
                Ensure.that(RecordedItems(), equals([
                    'Learn Screenplay',
                    'Love Testing!',
                ])),
            ));
});
