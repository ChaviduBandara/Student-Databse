function addStudent() {
    let id = document.getElementById("stdId").value;
    let name = document.getElementById("stdName").value;
    let address = document.getElementById("stdAddress").value;
    let age = document.getElementById("stdAge").value;

    console.log("ID: " + id);
    console.log("Name: " + name);
    console.log("Address: " + address);
    console.log("Age: " + age);


} 


let table = document.getElementById("tblStudents");

let body = "";

fetch("http://localhost:8080/get-data")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        body += `<tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.address}</td>
                    <td>${element.age}</td>
                </tr>`
    });

    table.innerHTML = body;
})
