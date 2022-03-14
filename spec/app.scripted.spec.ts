import { describe, it } from 'mocha';
import { expect } from 'chai';


describe('TodoList App - Scripted', function () {

    it('allows the user to add items to the TodoList', async function () {
        let itemsText = [];
        // low-level navigation and synchronisation code
        await browser.url('https://todomvc.com/examples/vue/');
        await $('.new-todo').waitForDisplayed(({ timeout: 2000 }));
        expect(await browser.getTitle()).include('Vue');

        // duplicated code
        await $('.new-todo').setValue('Learn Screenplay');
        await browser.keys(['Enter']);
        await $('.new-todo').setValue('Love Testing!');
        await browser.keys(['Enter']);

        // complicated logic included in the test
        const todoItems = await $$('.todo-list li');
        const item1Text = await todoItems[0].getText();
        const item2Text = await todoItems[1].getText();
        expect(item1Text).equal('Learn Screenplay');
        expect(item2Text).equal('Love Testing!');

    });

    afterEach(async () => {
        // clean up code required to avoid state leakage
        await browser.execute(`window.localStorage.clear()`);
    });


 });
