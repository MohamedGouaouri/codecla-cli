#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Command } from 'commander';
import { writeFileSync } from 'fs';
import inquirer from 'inquirer';
const languages = {
    'python': 'py',
    'javascript': 'js',
};
// Define function template for each language
const functionTemplates = {
    'python': (functionName, inputs) => `
def ${functionName}(${inputs}):

    # Your code here

    return
`,
    'javascript': (functionName, inputs) => `
function ${functionName}(${inputs}) {

    // Your code here
    return
}
`,
};
// Create a new Commander program
const program = new Command();
// Command to generate challenge
program
    .command('generate')
    .description('Generate boilerplate code for a coding challenge')
    .option('-n, --function-name <name>', 'Name of the function', 'solution')
    .option('-l, --language <lang>', 'Programming language (python or javascript)', 'python')
    .option('-i, --inputs <inputs>', 'Inputs to the function (comma-separated)', 'a')
    .option('-d, --destination <destination>', 'Inputs to the function (comma-separated)', 'output')
    .action((options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { functionName, language, inputs } = options;
        const langExt = languages[language];
        if (!langExt) {
            console.error('Unsupported language.');
            return;
        }
        // Prompt for confirmation
        const confirm = yield inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirm',
                message: `Generate boilerplate code for ${language} with function ${functionName}?`,
                default: false,
            },
        ]);
        if (!confirm.confirm) {
            console.log('Aborted.');
            return;
        }
        // Generate function template
        const generator = functionTemplates[language];
        const template = generator(functionName, inputs);
        // Write template to file
        const filename = `${functionName}.${langExt}`;
        writeFileSync(filename, template);
        console.log(`Boilerplate code generated in ${filename}.`);
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}));
// Parse command-line arguments
program.parse(process.argv);
