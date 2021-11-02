const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const intern = require('./lib/intern');


const employees = [];
// == -> push to the array, all employess!

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
        switch(res.team) {
            case 'Engineer': 
                engineerPrompt();
                employees.push(res);
                break;
            case 'Intern':
                internPrompt();
                employees.push(res);
                break;
            case 'There is no one to add':
                employees.push(res);
                console.log(employees);
                break;
        }
    })
};

const internPrompt = () => {
    inquirer.prompt(internQuestions)
    .then(res => {
        switch(res.team) {
            case 'Engineer': 
                engineerPrompt();
                employees.push(res);
                break;
            case 'Intern':
                internPrompt();
                employees.push(res);
                break;
            case 'There is no one to add':
                employees.push(res);
                console.log(employees);
                break;
        }
    })
};


const managerPrompt = () => {
inquirer.prompt(managerQuestions)
.then((res) => {
    switch(res.team) {
        case 'Engineer': 
            engineerPrompt();
            employees.push(res);
            fs.writeFile('index.html', writeFile(res), (err) => 
            err? console.err(err) : console.log('writeFile success'));
            break;
        case 'Intern':
            internPrompt();
            employees.push(res);
            break;
        case 'There is no one to add':
            console.log(employees);
            employees.push(res);
            break;
    }
})
};


//switch로 pick engineer/ intern/ nothing -> write the file
//nothing pick -> another function, scr folder - passing the array of employees

managerPrompt();

const writeFile = () {

}
