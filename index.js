const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const PageTemplate = require('./src/page_template')


const employees = [];


const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'number'
    },    
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'team',
        choices: [
            'Engineer',
            'Intern',
            'There is no one to add'
          ]
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is your engineer's Github username?",
        name: 'github'
    },    
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'team',
        choices: [
            'Engineer',
            'Intern',
            'There is no one to add'
          ]
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What school does your intern graduate?",
        name: 'school'
    },    
    {
        type: 'list',
        message: "Which type of team member would you like to add?",
        name: 'team',
        choices: [
            'Engineer',
            'Intern',
            'There is no one to add'
          ]
    }
]

const engineerPrompt = () => {
    inquirer.prompt(engineerQuestions)
    .then(res => {
        const {name, id, email, github} = res;
        const engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        writeEngineer(employees);

        switch(res.team) {
            case 'Engineer': 
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'There is no one to add':
                closingToFile();
                break;
        }

    })
};

const internPrompt = () => {
    inquirer.prompt(internQuestions)
    .then(res => {
        
        const {name, id, email, school} = res;
        const intern = new Intern(name, id, email, school);
        employees.push(intern);
        writeIntern(employees);

        switch(res.team) {
            case 'Engineer': 
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'There is no one to add':
                closingToFile();
                break;
        }

    })
};


const managerPrompt = () => {
inquirer.prompt(managerQuestions)
.then((res) => {
    const {name, id, email, number} = res;
    const manager = new Manager(name, id, email, number);
    employees.push(manager);
    writeManager(employees);

    switch(res.team) {
        case 'Engineer': 
            engineerPrompt();
            break;
        case 'Intern':
            internPrompt();
            break;
        case 'There is no one to add':
            closingToFile();

            break;
    }
    
})
};


managerPrompt();



const writeManager = (employees) => {
    fs.appendFile('./dist/index.html', PageTemplate.generateManager(employees), err => err ? console.error(err) : console.log('manager writing is success'))
    console.log(employees);
    
    }

const writeEngineer = (employees) => {
    fs.appendFile('./dist/index.html', PageTemplate.generateEngineer(employees), err => err ? console.error(err) : console.log('engineer writing is success'))
    console.log(employees);
    
    }

const writeIntern = (employees) => {
    fs.appendFile('./dist/index.html', PageTemplate.generateIntern(employees), err => err ? console.error(err) : console.log('intern writing is success'))
    console.log(employees);
    
    }

const closingToFile = (data) => {
    fs.appendFile('./dist/index.html', PageTemplate.closingHTML(data), err => err ? console.error(err) : console.log('closing writing is success'))
    console.log(employees);
    
    }



