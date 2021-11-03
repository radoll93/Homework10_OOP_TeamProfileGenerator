
const generateManager = (arr) => {

  for(let i=0; i<arr.length; i++) {
    if (arr[i].getRole() === 'Manager') {
      const {name, id, email, number} = arr[i];

    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id : ${id}</li>
        <li class="list-group-item">Email : ${email}</li>
        <li class="list-group-item">Office number: ${number}</li>
      </ul>
    </div>
    </div>
    `}
  }
};


const generateEngineer = (arr) => {
  for(let i=0; i<arr.length; i++) {
    if (arr[i].getRole() === 'Engineer') {
      const {name, id, email, github} = arr[i];
    
    return `
  
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id : ${id}</li>
        <li class="list-group-item">Email : ${email}</li>
        <li class="list-group-item">GitHub: ${github}</li>
      </ul>
    </div>
  </div>
  
  
  `}
  }
}

const generateIntern = (arr) => {
  for(let i=0; i<arr.length; i++) {
    if (arr[i].getRole() === 'Intern') {
      const {name, id, email, school} = arr[i];    
  return `
  
  
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id : ${id}</li>
      <li class="list-group-item">Email : ${email}</li>
      <li class="list-group-item">School: ${school}</li>
    </ul>
  </div>
  </div>
  
  `}
  }
}


const closingHTML = () => {
  return `


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
  </body>
  </html>`

}



module.exports = {generateManager, generateIntern, generateEngineer, closingHTML};

