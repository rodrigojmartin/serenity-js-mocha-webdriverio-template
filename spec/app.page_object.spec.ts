import { expect } from 'chai';
import { describe, it } from 'mocha';


describe('TodoList App - Page Object', function () {

    // The page object representing the Todo list:
    class TodoList {
        
        get whatNeedsToBeDoneInputBox() {
            return $('.new-todo');
        }

        get recordedItems() {
            return $$('.todo-list li');
        }

        
        async recordItemCalled(itemName) {
            await (await this.whatNeedsToBeDoneInputBox).setValue(itemName); 
            await browser.keys('Enter');
        }

        async textOfRecordedItem(index) {
            return this.recordedItems[index].getText(); 
        }

    };
dd
    // The test where the TodoList page object is used:
    it('allows the user to add items to the TodoList', async function () {

        // Operations that are not part of the page object's responsibilities
        // are still present in the test:
        await browser.url('https://todomvc.com/examples/vue/');
        await $('.new-todo').waitForDisplayed(({ timeout: 2000 }));

       expect(await browser.getTitle()).include('Vue');

        // Page objects have to be explicitly instantiated in the test
        const todoList = new TodoList();

        // Repeated calls to `recordItemCalled`
        await todoList.recordItemCalled('Learn Screenplay');
        await todoList.recordItemCalled('Love Testing!');


        //Repeated code!
        await todoList.textOfRecordedItem(0).then(text => {
            expect(text).to.equal('Learn Screenplay');
        });
        await todoList.textOfRecordedItem(1).then(text => {
            expect(text).to.equal('Love Testing!');
        });

    });

    // Teardown method responsible for clearing any application state
    afterEach(async () => {
        // Since the cleanup method doesn't belong to the page object
        // representing the TodoList, it's left in the test:
        await browser.execute('window.localStorage.clear()');
    });
});