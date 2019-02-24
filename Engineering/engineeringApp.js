const form = document.querySelector('#Branches');
const branchList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-branches');
const filter = document.querySelector('#filter');
const branchInput = document.querySelector('#Branch');
loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded',getBranches);
  form.addEventListener('submit', addBranch);
  branchList.addEventListener('click', removeBranch);
  clearBtn.addEventListener('click', clearBranches);
  filter.addEventListener('keyup', filterBranches);
}
function getBranches()
{
  let branches;
  if(localStorage.getItem('branches') === null){
    branches = [];
  }
  else{
    branches = JSON.parse(localStorage.getItem('branches'));
  }
  branches.forEach(function(branch){

const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode(branch));
const link = document.createElement('a');
link.className = 'delete-item secondary content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);
branchList.appendChild(li);

  });
}

function addBranch(e) {
  if (branchInput.value === '') {
    alert('Add a branch');
  } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(branchInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    branchList.appendChild(li);
    storeBranchInLocalStorage(branchInput.value);
    branchInput.value = '';
    e.preventDefault();
  }
}

function storeBranchInLocalStorage(Branch) {
  let branches;
  if (localStorage.getItem('branches') === null) {
    branches = [];
  }
  else {
    branches = JSON.parse(localStorage.getItem('branches'));
  }
  branches.push(Branch);
  localStorage.setItem('branches', JSON.stringify(branches));
}

function removeBranch(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure')) {
      e.target.parentElement.parentElement.remove();
      removeBranchFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}
function removeBranchFromLocalStorage(branchItem){
  let branches;
  if (localStorage.getItem('branches') === null) {
    branches = [];
  }
  else {
    branches = JSON.parse(localStorage.getItem('branches'));
  }
  branches.forEach(function(branch,index)
  {
      if(branchItem.textContent === branch)
      {
        branches.splice(index,1);
      }
  });
  localStorage.setItem('branches',JSON.stringify(branches));
}
function clearBranches() {
  while (branchList.firstChild) {
    branchList.removeChild(branchList.firstChild);
  }
}
function filterBranches(e) {
  const item = e.target.value.toUpperCase();
  document.querySelectorAll('.collection-item').forEach(function (branch) {
    const text = branch.firstChild.textContent;
    if (text.toUpperCase().indexOf(item) != -1) {
      branch.style.display = 'block';
    } else {
      branch.style.display = 'none';
    }
  });
}