let form = document.getElementById('employee-form')
let cards = document.getElementById('employee-cards')

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let ID = form.elements['id'].value;
    let name = form.elements['name'].value;
    let department = form.elements['department'].value;
    let level = form.elements['level'].value;
    let image = form.elements['image'].value;
    let salary = generateSalaryLevel(level);

    // Create a new employee object
    const employee = {
        id: ID,
        name: name,
        department: department,
        level: level,
        image: image,
        salary: salary,
    }
    const card = renderEmployeeCard(employee)
    cards.appendChild(card);

    form.reset();
})

function renderEmployeeCard(employee) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = employee.image;
    const id = document.createElement('h2');
    id.textContent = employee.id;
    const name = document.createElement('h2');
    name.textContent = employee.name;
    const department = document.createElement('h2');
    department.textContent = employee.department;
    const level = document.createElement('h2');
    level.textContent = employee.level;
    const salary = document.createElement('h2');
    salary.textContent = employee.salary;

    card.appendChild(image)
    card.appendChild(id)
    card.appendChild(name)
    card.appendChild(department)
    card.appendChild(level)
    card.appendChild(salary)

    return card;
}

function generateSalaryLevel(level) {
    if (level === "Junior") {
        return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    } else if (level === "Mid-Senior") {
        return Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    } else if (level === "Senior") {
        return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    } else {
        return "Invalid user level";
    }
}