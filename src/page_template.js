const generateManager = (data) => {
return `

<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Manager name</h5>
  <h6 class="card-subtitle mb-2 text-muted">Role name</h6>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id : </li>
    <li class="list-group-item">Email : </li>
    <li class="list-group-item">number: </li>
  </ul>
</div>
</div>


`
}

const generateIntern = (data) => {
  return `
  
  
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Intern name</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role name</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id : </li>
      <li class="list-group-item">Email : </li>
      <li class="list-group-item">School: </li>
    </ul>
  </div>
  </div>
  
  `
  }

  const generateEngineer = (data) => {
    return `
    
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Engineer name</h5>
        <h6 class="card-subtitle mb-2 text-muted">Role name</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id : </li>
          <li class="list-group-item">Email : </li>
          <li class="list-group-item">github: </li>
        </ul>
      </div>
    </div>
    
    
    `
    }

const closingHTML = (data) => {
  return `


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
  </body>
  </html>`

}



module.exports = {generateManager, generateIntern, generateEngineer, closingHTML};

