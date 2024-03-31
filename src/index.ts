#!/usr/bin/env node

import { Command } from 'commander';
import { writeFileSync } from 'fs';
import inquirer from 'inquirer';
import { BoilerplateCmdOptions, FunctionTemplate, LanguageExtensions } from './types.js';


const languages: LanguageExtensions = {
  'python': 'py',
  'javascript': 'js',
};

// Define function template for each language
const functionTemplates: FunctionTemplate = {
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
  .action(async (options: BoilerplateCmdOptions) => {
    try {
      const { functionName, language, inputs } = options;
      const langExt = languages[language];
      if (!langExt) {
        console.error('Unsupported language.');
        return;
      }

      // Prompt for confirmation
      const confirm = await inquirer.prompt([
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
      const generator = functionTemplates[language]
      const template = generator(functionName, inputs);

      // Write template to file
      const filename = `${functionName}.${langExt}`;

      writeFileSync(filename, template);
      console.log(`Boilerplate code generated in ${filename}.`);
      console.log(template)
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  });

// Parse command-line arguments
program.parse(process.argv);
