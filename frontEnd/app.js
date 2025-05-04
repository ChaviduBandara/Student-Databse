function addStudent() {
    let id = document.getElementById("stdId").value;
    let name = document.getElementById("stdName").value;
    let address = document.getElementById("stdAddress").value;
    let age = document.getElementById("stdAge").value;

    console.log("ID: " + id);
    console.log("Name: " + name);
    console.log("Address: " + address);
    console.log("Age: " + age);


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id": id,
        "name": name,
        "address": address,
        "age": age
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    fetch("http://localhost:8080/add-data", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            loadTable();
        })
        .catch((error) => console.log(error));

    loadTable();    
}


function loadTable() {
    let table = document.getElementById("tblStudents");
    
    table.innerHTML=""
    

    let body = `<tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
            </tr>`;

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

}



