loadTable();

function loadTable() {
    let stdTable = document.getElementById("tblStudent");

    let body = `<tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
        </tr>`;

    fetch("http://localhost:8080/get-student")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                console.log(element);

                body += `<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.address}</td>
                <td>
                    <button class="btn btn-primary" onclick="fillForm(${element.id}, '${element.name}', '${element.address}')">Edit</button>
                    <button class="btn btn-danger" onclick="deleteStudent(${element.id})">Delete</button>
                 </td>
            </tr>`
            });

            stdTable.innerHTML = body;
        })
}

function addStudent() {
    let name = document.getElementById("txtName").value;
    let address = document.getElementById("txtAddress").value;

    console.log(name);
    console.log(address);


    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": name,
        "address": address
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:8080/add-student", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
            console.log(result)
            loadTable();
        })
        .catch((error) => console.error(error));
}

function deleteStudent(id) {
    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
    };

    fetch(`http://localhost:8080/delete-student/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            loadTable();
        })
        .catch(error => console.error("Error deleting student:", error));
}


function updateStudent() {
    let id = document.getElementById("txtId").value;
    let name = document.getElementById("txtName").value;
    let address = document.getElementById("txtAddress").value;

    if (!id) {
        alert("Please enter the ID of the student to update.");
        return;
    }

    const student = { id: parseInt(id) };
    if (name.trim() !== "") student.name = name;
    if (address.trim() !== "") student.address = address;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(student),
        redirect: "follow"
    };

    fetch("http://localhost:8080/update-student", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            loadTable();
            clearForm();
        })
        .catch(error => console.error("Error updating student:", error));
}

function fillForm(id, name, address) {
    document.getElementById("txtId").value = id;
    document.getElementById("txtName").value = name;
    document.getElementById("txtAddress").value = address;
}

