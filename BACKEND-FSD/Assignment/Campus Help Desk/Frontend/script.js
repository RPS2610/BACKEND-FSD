const API_URL = "http://localhost:3000/api/requests";

const requestForm = document.getElementById("requestForm");
const requestsList = document.getElementById("requestsList");


// GET all requests
async function getRequests() {

    const response = await fetch(API_URL);

    const requests = await response.json();

    displayRequests(requests);
}


// Display requests on the page
function displayRequests(requests) {

    requestsList.innerHTML = "";

    if (requests.length === 0) {

        requestsList.innerHTML = `
            <p>No requests submitted yet.</p>
        `;

        return;
    }


    requests.forEach(request => {

        const requestCard = document.createElement("div");

        requestCard.className = "request-card";

        requestCard.innerHTML = `
            <h3>Request #${request.id}</h3>

            <p>
                <strong>Student:</strong>
                ${request.studentName}
            </p>

            <p>
                <strong>Email:</strong>
                ${request.email}
            </p>

            <p>
                <strong>Category:</strong>
                ${request.category}
            </p>

            <p>
                <strong>Problem:</strong>
                ${request.description}
            </p>

            <p>
                <strong>Priority:</strong>
                ${request.priority}
            </p>

            <button onclick="deleteRequest(${request.id})">
                Delete
            </button>

            <button onclick="editRequest(${request.id})">
                Update
            </button>
        `;

        requestsList.appendChild(requestCard);
    });
}


// POST new request
requestForm.addEventListener("submit", async function(event) {

    event.preventDefault();


    const newRequest = {

        studentName:
            document.getElementById("studentName").value,

        email:
            document.getElementById("email").value,

        category:
            document.getElementById("category").value,

        description:
            document.getElementById("description").value,

        priority:
            document.getElementById("priority").value
    };


    const response = await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(newRequest)
    });


    if (response.ok) {

        alert("Request submitted successfully!");

        requestForm.reset();

        getRequests();

    } else {

        alert("Failed to submit request.");
    }

});


// DELETE request
async function deleteRequest(id) {

    const response = await fetch(`${API_URL}/${id}`, {

        method: "DELETE"
    });


    if (response.ok) {

        alert("Request deleted successfully!");

        getRequests();

    } else {

        alert("Failed to delete request.");
    }
}


// PUT / Update request
async function editRequest(id) {

    const studentName = prompt(
        "Enter student name:"
    );

    const email = prompt(
        "Enter email:"
    );

    const category = prompt(
        "Enter category:"
    );

    const description = prompt(
        "Enter problem description:"
    );

    const priority = prompt(
        "Enter priority:"
    );


    if (
        !studentName ||
        !email ||
        !category ||
        !description ||
        !priority
    ) {
        return;
    }


    const updatedRequest = {

        studentName: studentName,

        email: email,

        category: category,

        description: description,

        priority: priority
    };


    const response = await fetch(`${API_URL}/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(updatedRequest)
    });


    if (response.ok) {

        alert("Request updated successfully!");

        getRequests();

    } else {

        alert("Failed to update request.");
    }
}


// Load requests when page opens
getRequests();