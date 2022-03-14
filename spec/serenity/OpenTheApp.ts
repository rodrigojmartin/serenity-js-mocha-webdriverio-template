import { Ensure, startsWith } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Navigate, Website } from '@serenity-js/webdriverio';


export const OpenTheApp = () =>
    Task.where(`#actor opens the app`,
        Navigate.to(`https://todomvc.com/examples/vue/`),
        Ensure.that(Website.title(), startsWith('Vue')),
    );
