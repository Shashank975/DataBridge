# 🌉 DataBridge

> **A modular data integration platform** designed for connecting, exploring, and moving data seamlessly across heterogeneous data sources.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started / How to Run](#-getting-started--how-to-run)
  - [Prerequisites](#prerequisites)
  - [1. Running the Backend (FastAPI)](#1-running-the-backend-fastapi)
  - [2. Running the Frontend](#2-running-the-frontend)
- [Step-by-Step Usage Guide](#-step-by-step-usage-guide)
- [API Documentation](#-api-documentation)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## 🔍 Overview

**DataBridge** is a modern data integration and exploration workspace (Proof of Concept - v0.1.0). It provides an intuitive web interface paired with a high-performance Python FastAPI backend to simplify ingesting, exploring, and staging data from file-based and cloud/database sources into a unified pipeline.

---

## ✨ Key Features

### 💻 Frontend (Web Dashboard)
- **Modern Workspace UI**: Clean, responsive layout with a dedicated sidebar navigation (`Dashboard`, `Connectors`, `Datasets`, `Transformations`, `Execution History`).
- **Connector Marketplace / Grid**:
  - 📊 **Microsoft Excel Connector**: Currently available. Upload and inspect `.xlsx` and `.xls` workbooks.
  - 🗄️ **SQL Database Connector**: *(Coming Soon)* Support planned for PostgreSQL, MySQL, and Microsoft SQL Server.
  - 🌐 **REST API Connector**: *(Coming Soon)* Ingest data from external HTTP endpoints.
  - ☁️ **Cloud Storage Connector**: *(Coming Soon)* Support planned for AWS S3, Google Cloud Storage, and Azure Blob.
- **Interactive File Ingestion**:
  - Dedicated Excel upload section triggered seamlessly with smooth auto-scroll.
  - Client-side validation for spreadsheet file types (`.xlsx`, `.xls`).

### ⚙️ Backend (REST API)
- **FastAPI Framework**: High performance, asynchronous Python REST API.
- **Modular Architecture**: Layered structure with versioned routing (`/api/v1/`).
- **Data Processing Stack**: Integrated with `pandas`, `openpyxl`, and `python-multipart` ready for spreadsheet parsing and tabular transformations.
- **Automated Health Checks**: Dedicated `/api/v1/health` monitoring endpoint.
- **Self-Documenting API**: Live interactive OpenAPI (Swagger UI) and ReDoc documentation out of the box.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Vanilla JavaScript (ES6+), HTML5, CSS3 (Modern Flexbox/Grid) |
| **Backend** | Python 3.10+, FastAPI, Uvicorn, Pydantic |
| **Data Processing** | Pandas, OpenPyXL |
| **Documentation** | Swagger UI (`/docs`), ReDoc (`/redoc`) |

---

## 📁 Project Structure

```text
DataBridge/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                    # FastAPI application entry point
│   │   └── api/
│   │       └── v1/
│   │           ├── __init__.py
│   │           ├── router.py          # API v1 router aggregation
│   │           └── endpoints/
│   │               ├── __init__.py
│   │               └── health.py      # Health check endpoint
│   └── requirements.txt               # Backend Python dependencies
│
├── frontend/
│   ├── index.html                     # Main dashboard page
│   ├── css/
│   │   └── style.css                  # UI styling & theme
│   └── js/
│       └── app.js                     # Client-side interactions & events
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started / How to Run

### Prerequisites

- **Python**: Version `3.10` or higher installed ([Download Python](https://www.python.org/downloads/))
- **Browser**: Modern web browser (Chrome, Edge, Firefox, Safari)

---

### 1. Running the Backend (FastAPI)

1. Open your terminal / command prompt and navigate to the backend directory:
   ```bash
   cd backend
   ```

2. *(Recommended)* Create and activate a Python virtual environment:
   - **Windows (PowerShell)**:
     ```powershell
     python -m venv venv
     .\venv\Scripts\Activate.ps1
     ```
   - **Windows (CMD)**:
     ```cmd
     python -m venv venv
     .\venv\Scripts\activate.bat
     ```
   - **macOS / Linux**:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the backend development server using Uvicorn:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

5. The backend will start on **`http://localhost:8000`**. You can verify it by opening:
   - **Root API**: [http://localhost:8000/](http://localhost:8000/)
   - **Health Endpoint**: [http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health)
   - **Swagger Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

### 2. Running the Frontend

You can run the frontend in any of the following ways:

#### Option A: Using Python's Built-in HTTP Server (Recommended)
From the project root directory, run:
```bash
python -m http.server 3000 --directory frontend
```
Then open your browser and navigate to:
👉 **`http://localhost:3000`**

#### Option B: VS Code Live Server Extension
1. Open the project folder in VS Code.
2. Right-click `frontend/index.html` and select **"Open with Live Server"**.

#### Option C: Directly Opening in Browser
Double-click `frontend/index.html` or open it directly in your web browser.

---

## 📖 Step-by-Step Usage Guide

1. **Launch the Application**:
   - Start the backend server on port `8000`.
   - Open the frontend dashboard in your browser (`http://localhost:3000`).

2. **Explore Available Connectors**:
   - On the dashboard, review the **Available Connectors** section.
   - Notice the status badges: **Available** for Microsoft Excel and **Coming Soon** for SQL, REST APIs, and Cloud Storage.

3. **Connect an Excel Workbook**:
   - Click the **Connect Excel** button on the Microsoft Excel connector card.
   - The page smoothly scrolls down to reveal the **Connect Microsoft Excel** upload section.

4. **Select File for Exploration**:
   - Click the file input box labeled *"Upload your Excel file"*.
   - Choose any `.xlsx` or `.xls` spreadsheet from your local machine.
   - An alert confirms your selected file is staged for processing.

5. **Verify API Operations**:
   - Visit [http://localhost:8000/docs](http://localhost:8000/docs) to view and test backend endpoints interactively via Swagger UI.

---

## 📡 API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Root endpoint displaying application metadata |
| `GET` | `/api/v1/health` | Service health check returning uptime and backend status |
| `GET` | `/docs` | Interactive OpenAPI / Swagger UI |
| `GET` | `/redoc` | Alternative ReDoc API documentation |

### Sample Response: Health Check
`GET http://localhost:8000/api/v1/health`
```json
{
  "status": "healthy",
  "application": "DataBridge",
  "message": "Backend is running successfully"
}
```

---

## 🗺️ Roadmap

- [x] Initial dashboard layout & sidebar navigation
- [x] Excel connector UI & file upload section
- [x] Modular FastAPI backend with versioned routing & health endpoints
- [ ] Backend Excel ingestion & parsing endpoint (`/api/v1/connectors/excel/upload`)
- [ ] Data preview table with pagination & schema inference
- [ ] SQL Database connector (PostgreSQL, MySQL, SQLite)
- [ ] Data transformation and export pipeline
- [ ] Authentication and role-based workspace management

---

## 📄 License

This project is licensed under the MIT License - see the repository details for more information.
