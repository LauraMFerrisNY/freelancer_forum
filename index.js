const freelancers = [
    {name: "Alice", occupation: "Writer", startingPrice: 30},
    {name: "Bob", occupation: "Teacher", startingPrice: 50},
    {name: "Carol", occupation: "Programmer", startingPrice: 70}
];

const names = ["Laura", "Nick", "Kelly", "Jeff", "Alex", "Charlie", "Vivian", "Jake", "Ben"];
const occupations = ["Doctor", "Pilot", "Accountant", "Baker", "Nurse", "Painter", "Electrician"];

let reloadCounter = 0;

//Populates my HTML page with content
function createPage() {
    const body = document.querySelector("body");

    const title = document.createElement("h1");
    title.textContent = "Freelancer Forum";
    body.append(title);
    
    displayAverageSP();

    displayFreelancers();
}

//Displays the average starting price
function displayAverageSP() {
    const avgSP = document.createElement("h3");
    avgSP.textContent = "Average starting price: $" + calculateAvgSP();
    document.body.appendChild(avgSP);
}

//Calculates the average starting price
function calculateAvgSP() {
    let tempSum = 0;
    let elCount = 0;
    freelancers.forEach(el => {
        tempSum += el.startingPrice;
        ++elCount;
     });

    let average = tempSum / elCount;
    return Math.floor(average);
}

//Displays the freelancer table
function displayFreelancers() {
    const sectionHeader = document.createElement("h2");
    sectionHeader.textContent = "Available Freelancers";
    document.body.append(sectionHeader);

    //Set up the table with its headers

    const table = document.createElement("table");
    const tableBody = document.createElement("tableBody");

    const row = document.createElement("tr");

    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    row.appendChild(nameHeader);

    const occupationHeader = document.createElement("th");
    occupationHeader.textContent = "Occupation";
    row.appendChild(occupationHeader);

    const sPHeader = document.createElement("th");
    sPHeader.textContent = "Starting Price";
    row.appendChild(sPHeader);

    tableBody.appendChild(row);
    table.appendChild(tableBody);

    //Populate the table with data
    freelancers.forEach(el => {
        let newRow = document.createElement("tr");

        const freelancerName = document.createElement("td");
        freelancerName.textContent = el.name;
        newRow.appendChild(freelancerName);

        const freelancerOccupation = document.createElement("td");
        freelancerOccupation.textContent = el.occupation;
        newRow.appendChild(freelancerOccupation);

        const freelancerSP = document.createElement("td");
        freelancerSP.textContent = "$" + el.startingPrice;
        newRow.appendChild(freelancerSP);

        tableBody.appendChild(newRow);
        table.appendChild(tableBody);

    });

    //Displays the full table
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

//Rerenders certain aspects of the page and adds a new freelancer
function rerender() {
    addFreelancer();
    clearCurrentTable();
    rerenderAverageSP();
    displayFreelancers();
}

//Adds a new freelancer
function addFreelancer() {
    const newName = names[Math.floor(Math.random() * names.length)];
    const newOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const newSP = Math.floor(Math.random() * (100 - 15)) + 15;

    const newFreelancer = {
        name: newName,
        occupation: newOccupation,
        startingPrice: newSP
    }

    freelancers.push(newFreelancer);
}

//Clears the table
function clearCurrentTable() {
    const sectionHeader = document.querySelector("h2");
    sectionHeader.remove();
    const table = document.querySelector("table");
    table.remove();
}

//Rerenders the average starting price
function rerenderAverageSP() {
    const avgSP = document.querySelector("h3");
    avgSP.textContent = "Average starting price: $" + calculateAvgSP();
    document.body.appendChild(avgSP);
}

createPage();
setInterval(rerender, 5000);
