const http = require("http");
const fs = require("fs");

const PORT = 3000;
const DATA_FILE = "students.json";

function escapeHTML(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

const server = http.createServer((req, res) => {

    // Home Page
    if (req.method === "GET" && req.url === "/") {

        fs.readFile("index.html", "utf8", (err, data) => {

            if (err) {
                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                res.end("Error loading HTML file");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });

    }

    // Add Student
    else if (req.method === "POST" && req.url === "/add") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const formData = new URLSearchParams(body);

            const student = {
                name: formData.get("name"),
                roll: formData.get("roll"),
                course: formData.get("course"),
                email: formData.get("email")
            };

            fs.readFile(DATA_FILE, "utf8", (err, data) => {

                let students = [];

                if (!err && data.trim() !== "") {

                    try {
                        students = JSON.parse(data);
                    } catch (error) {
                        students = [];
                    }
                }

                students.push(student);

                fs.writeFile(
                    DATA_FILE,
                    JSON.stringify(students, null, 2),
                    err => {

                        if (err) {
                            res.writeHead(500, {
                                "Content-Type": "text/plain"
                            });

                            res.end("Error saving student record");
                            return;
                        }

                        res.writeHead(302, {
                            Location: "/students"
                        });

                        res.end();
                    }
                );
            });
        });

    }

    // Student Records
    else if (req.method === "GET" && req.url === "/students") {

        fs.readFile(DATA_FILE, "utf8", (err, data) => {

            let students = [];

            if (!err && data.trim() !== "") {

                try {
                    students = JSON.parse(data);
                } catch (error) {
                    students = [];
                }
            }

            let studentCards = "";

            students.forEach((student, index) => {

                studentCards += `
                    <div class="student-card">

                        <div class="card-top">

                            <div class="student-number">
                                ${index + 1}
                            </div>

                            <div>
                                <h2>${escapeHTML(student.name)}</h2>
                                <span class="course-badge">
                                    ${escapeHTML(student.course)}
                                </span>
                            </div>

                        </div>

                        <div class="student-info">

                            <div class="info-item">
                                <span class="label">Roll Number</span>
                                <span class="value">
                                    ${escapeHTML(student.roll)}
                                </span>
                            </div>

                            <div class="info-item">
                                <span class="label">Email Address</span>
                                <span class="value">
                                    ${escapeHTML(student.email)}
                                </span>
                            </div>

                        </div>

                    </div>
                `;
            });

            let recordsHTML = "";

            if (students.length === 0) {

                recordsHTML = `
                    <div class="empty-state">

                        <div class="empty-icon">
                            +
                        </div>

                        <h2>No Student Records</h2>

                        <p>
                            There are currently no students in the system.
                        </p>

                        <a href="/" class="primary-btn">
                            Add First Student
                        </a>

                    </div>
                `;

            } else {

                recordsHTML = `
                    <div class="student-grid">
                        ${studentCards}
                    </div>
                `;
            }

            const html = `
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Student Records</title>

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            background: #f4f7fb;
            color: #1f2937;
            min-height: 100vh;
        }

        .navbar {
            background: white;
            border-bottom: 1px solid #e5e7eb;
            padding: 18px 30px;
        }

        .nav-container {
            max-width: 1100px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .brand {
            font-size: 22px;
            font-weight: bold;
            color: #2563eb;
        }

        .nav-link {
            text-decoration: none;
            color: #374151;
            font-weight: bold;
        }

        .nav-link:hover {
            color: #2563eb;
        }

        .main-container {
            max-width: 1100px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .hero {
            background: white;
            border-radius: 20px;
            padding: 35px;
            margin-bottom: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .hero-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }

        .hero h1 {
            font-size: 34px;
            margin-bottom: 10px;
            color: #111827;
        }

        .hero p {
            color: #6b7280;
            font-size: 16px;
        }

        .primary-btn {
            display: inline-block;
            background: #2563eb;
            color: white;
            text-decoration: none;
            padding: 13px 20px;
            border-radius: 10px;
            font-weight: bold;
            white-space: nowrap;
        }

        .primary-btn:hover {
            background: #1d4ed8;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
            margin-bottom: 28px;
        }

        .stat-card {
            background: white;
            padding: 22px;
            border-radius: 15px;
            box-shadow: 0 7px 22px rgba(0, 0, 0, 0.05);
        }

        .stat-title {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 8px;
        }

        .stat-number {
            font-size: 30px;
            font-weight: bold;
            color: #111827;
        }

        .student-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .student-card {
            background: white;
            border-radius: 18px;
            padding: 25px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .student-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
        }

        .card-top {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
        }

        .student-number {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #2563eb;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: bold;
        }

        .card-top h2 {
            font-size: 21px;
            color: #111827;
            margin-bottom: 7px;
        }

        .course-badge {
            display: inline-block;
            background: #eff6ff;
            color: #2563eb;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
        }

        .student-info {
            border-top: 1px solid #e5e7eb;
            padding-top: 18px;
        }

        .info-item {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            padding: 12px 0;
            border-bottom: 1px solid #f1f5f9;
        }

        .info-item:last-child {
            border-bottom: none;
        }

        .label {
            color: #6b7280;
            font-size: 14px;
        }

        .value {
            color: #111827;
            font-weight: bold;
            text-align: right;
            word-break: break-word;
        }

        .empty-state {
            background: white;
            padding: 60px 30px;
            text-align: center;
            border-radius: 18px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
        }

        .empty-icon {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            margin: 0 auto 20px;
            background: #eff6ff;
            color: #2563eb;
            font-size: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .empty-state h2 {
            margin-bottom: 10px;
            color: #111827;
        }

        .empty-state p {
            color: #6b7280;
            margin-bottom: 25px;
        }

        .footer {
            text-align: center;
            color: #9ca3af;
            font-size: 13px;
            padding: 30px 0;
        }

        @media (max-width: 800px) {

            .student-grid {
                grid-template-columns: 1fr;
            }

            .stats {
                grid-template-columns: 1fr;
            }

            .hero-content {
                flex-direction: column;
                align-items: flex-start;
            }

        }

        @media (max-width: 600px) {

            .navbar {
                padding: 16px 18px;
            }

            .main-container {
                margin-top: 25px;
                padding: 0 12px;
            }

            .hero {
                padding: 25px;
            }

            .hero h1 {
                font-size: 27px;
            }

            .student-card {
                padding: 20px;
            }

            .info-item {
                flex-direction: column;
                gap: 5px;
            }

            .value {
                text-align: left;
            }

        }

    </style>

</head>

<body>

    <nav class="navbar">

        <div class="nav-container">

            <div class="brand">
                Student Manager
            </div>

            <a href="/" class="nav-link">
                Add Student
            </a>

        </div>

    </nav>

    <main class="main-container">

        <section class="hero">

            <div class="hero-content">

                <div>

                    <h1>Student Records</h1>

                    <p>
                        Manage and view all registered student information.
                    </p>

                </div>

                <a href="/" class="primary-btn">
                    + Add New Student
                </a>

            </div>

        </section>

        <section class="stats">

            <div class="stat-card">

                <div class="stat-title">
                    Total Students
                </div>

                <div class="stat-number">
                    ${students.length}
                </div>

            </div>

            <div class="stat-card">

                <div class="stat-title">
                    Records Status
                </div>

                <div class="stat-number">
                    ${students.length > 0 ? "Active" : "Empty"}
                </div>

            </div>

            <div class="stat-card">

                <div class="stat-title">
                    Storage
                </div>

                <div class="stat-number">
                    JSON
                </div>

            </div>

        </section>

        ${recordsHTML}

        <div class="footer">
            Student Record Management System
        </div>

    </main>

</body>

</html>
`;

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(html);
        });

    }

    // 404 Page
    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
<!DOCTYPE html>

<html>

<head>

    <title>404 - Page Not Found</title>

</head>

<body style="
    font-family: Arial;
    text-align: center;
    padding: 80px;
    background: #f4f7fb;
">

    <h1 style="font-size: 60px;">404</h1>

    <p style="font-size: 20px; color: #666;">
        Page Not Found
    </p>

    <br>

    <a href="/">
        Go Back Home
    </a>

</body>

</html>
`);
    }

});

server.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});