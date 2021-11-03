
const generateManager = (manager) => {

    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id : ${manager.getId()}</li>
        <li class="list-group-item">Email : ${manager.getEmail()}</li>
        <li class="list-group-item">Office number: ${manager.getNumber()}</li>
      </ul>
    </div>
    </div>
    `
};


const generateEngineer = (Engineer) => {
    return `
  
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${Engineer.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${Engineer.getRole()}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id : ${Engineer.getId()}</li>
        <li class="list-group-item">Email : ${Engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${Engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
  
  
  `
}

const generateIntern = (Intern) => {

  return `
  
  
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${Intern.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${Intern.getRole()}</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id : ${Intern.getId()}</li>
      <li class="list-group-item">Email : ${Intern.getEmail()}</li>
      <li class="list-group-item">School: ${Intern.getSchool()}</li>
    </ul>
  </div>
  </div>
  
  `
}


const closingHTML = () => {
  return `


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
  </body>
  </html>`

}



module.exports = {generateManager, generateIntern, generateEngineer, closingHTML};

