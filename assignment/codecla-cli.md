## CodeCLA CLI
In this assignment, you are going to use nodejs and typescript to build a handy CLI using `commanderjs` library to generate boilerplate code for challenges.


### Tasks
Here's the list of tasks

#### 1. Project setup
In this task, you are going to setup the project and install all the necessary dependencies.

- Create a nodejs application named `codecla-cli`.
- Install typescript compiler with `npm install typescript`
- Install nodejs types with `npm install @types/node --save-dev`.
- Install the [Commander](https://www.npmjs.com/package/commander) library.
- Install the inquirer library [inquirer](https://www.npmjs.com/package/inquirer) and its [types](https://www.npmjs.com/package/@types/inquirer).


#### 2. CLI development
The CLI should take the function name, the language and the list of inputs to generate the boilerplate code for a coding challenge (Boilerplate code is a preprepared code that can be used).
There are only two supported languages: `python` and `javascript`. After the boilerplate has been generated, it should be stored in a file with the same name as the function name and it should be given the proper file extension (`.py` for python and `.js` for js).

**Python boilerplate example**
```python
def functionName(a):
    return
```

**JavaScript boilerplate example**
```js
function functionName(a){
    return
}
```

- Create commander js command to generate the boilerplate
- Before generating th boilerplate, the user should be prompted with a confirmation to ask if he validates the generation (something like `Generate boilerplate code for python with function solution?`) using the inquirer library.
- Save the generated code in a file with the same name as the function name and it should be given the proper file extension.
- Make sure add types for all objects.

