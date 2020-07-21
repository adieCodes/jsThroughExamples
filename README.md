# JS Through Examples

This project is designed to teach my son JavaScript but I'm trying to keep it generic enough to be useful for anyone who wants to play with JavaScript. My aim is to give just enough information in each section to allow you to learn and practise without getting lost in details and ultimately demotivated. I want people to be able to start building things as quickly as possible and take detours into the details when they're ready.

## Prerequisites

-   Install node on your machine. If you are using a mac, linux or windows subsystem for linux I recommend using [nvm](https://github.com/nvm-sh/nvm) to install node. Otherwise you might want to look at [nvm-windows](https://github.com/coreybutler/nvm-windows).

## Set-up

1. Fork this repo. You can do this via the `Fork` button in the top right.
2. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the forked version of the repo to your machine.
3. In the terminal run `npm install` from the directory you've just created.

## Working through the content

I have added numbered folders to indicate how to progress through the content, each section might have further numbered documents within. So starting at 01.dataTypes:

1. Look at the first overview document, in this case `01.primitives.md`. This document will give an overview of the topic and end with the tasks to complete.
2. Open the associated `.js` file, e.g. `01.primitives.js`.
3. Run `npm test 01.primitives.spec.js` to run the associated tests. These tests will all fail at first but will provide an overview of the steps to complete the tasks:
   ![alt text](https://raw.githubusercontent.com/adieCodes/jsThroughExamples/master/screenshots/failedTest.png)
4. Add code to `01.primitives.js` to pass each test in turn, running `npm test 01.primitives.spec.js` to check if your change has solved the step.
5. Repeat for all steps within all tasks and then move onto the next section. Repeating each of the above with the next file names.
