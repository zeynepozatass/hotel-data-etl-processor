# 🏨 Hotel Data ETL Processor

A high-performance Node.js application designed to perform ETL (Extract, Transform, Load) operations on hotel data. This tool parses complex CSV files, validates data integrity, sorts records based on user preferences, and exports the results into structured JSON and XML formats.

## 🚀 Key Features

* **Robust ETL Pipeline:** Seamlessly extracts data from CSV, transforms records, and loads them into structured files.
* **Smart CSV Parsing:** Utilizes Regex to correctly handle addresses containing commas within quotes (e.g., `"123 Street, City"`).
* **Data Validation:** Filters out invalid records based on URL schema (http/https) and Star Ratings (0-5 range).
* **Dynamic Sorting:** Added support for both **Stars: High to Low** and **Stars: Low to High** sorting options via the Web UI.
* **Unit Testing:** Comprehensive test suite using **Jest** to ensure validation logic reliability.
* **Multi-Format Export:** Automatically generates `clean_hotels.json` and `clean_hotels.xml` in the `/output` directory.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Server:** Express.js
* **Testing:** Jest
* **File Handling:** Multer (Uploads), FS (File System)

## 📦 Installation & Setup

1. Install dependencies:
   ```bash
   npm install# 🏨 Hotel Data ETL Processor

A high-performance Node.js application designed to perform ETL (Extract, Transform, Load) operations on hotel data. This tool parses complex CSV files, validates data integrity, sorts records based on user preferences, and exports the results into structured JSON and XML formats.

## 🚀 Key Features

* **Robust ETL Pipeline:** Seamlessly extracts data from CSV, transforms records, and loads them into structured files.
* **Smart CSV Parsing:** Utilizes Regex to correctly handle addresses containing commas within quotes (e.g., `"123 Street, City"`).
* **Data Validation:** Filters out invalid records based on URL schema (http/https) and Star Ratings (0-5 range).
* **Dynamic Sorting:** Added support for both **Stars: High to Low** and **Stars: Low to High** sorting options via the Web UI.
* **Unit Testing:** Comprehensive test suite using **Jest** to ensure validation logic reliability.
* **Multi-Format Export:** Automatically generates `clean_hotels.json` and `clean_hotels.xml` in the `/output` directory.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Server:** Express.js
* **Testing:** Jest
* **File Handling:** Multer (Uploads), FS (File System)

## 📦 Installation & Setup

1. Install dependencies:
   ```bash
   npm install# 🏨 Hotel Data ETL Processor

A high-performance Node.js application designed to perform ETL (Extract, Transform, Load) operations on hotel data. This tool parses complex CSV files, validates data integrity, sorts records based on user preferences, and exports the results into structured JSON and XML formats.

## 🚀 Key Features

* **Robust ETL Pipeline:** Seamlessly extracts data from CSV, transforms records, and loads them into structured files.
* **Smart CSV Parsing:** Utilizes Regex to correctly handle addresses containing commas within quotes (e.g., `"123 Street, City"`).
* **Data Validation:** Filters out invalid records based on URL schema (http/https) and Star Ratings (0-5 range).
* **Dynamic Sorting:** Supports both **Stars: High to Low** and **Stars: Low to High** sorting options via the Web UI.
* **Unit Testing:** Comprehensive test suite using **Jest** to ensure validation logic reliability.
* **Multi-Format Export:** Automatically generates `clean_hotels.json` and `clean_hotels.xml` in the `/output` directory.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Server:** Express.js
* **Testing:** Jest
* **File Handling:** Multer (Uploads), FS (File System)

## 📦 Installation & Setup

1. Install dependencies:
   ```bash
   npm install
Start the server:

Bash

npm start
Run Unit Tests:

Bash

npm test
▶️ Usage
Open your browser and navigate to http://localhost:3000.

Upload your hotels.csv file.

Choose your preferred Sort Order (High to Low or Low to High).

The system will process the file, display results in a table, and save files to the /output folder.

📂 Project Structure
src/app.js: Main controller for the ETL flow.

src/sortHelper.js: Modular logic for sorting data.

src/validator.js: Data integrity and validation rules.

tests/: Automated test cases for quality assurance.

output/: Directory for processed JSON and XML files.

👨‍💻 Author
Zeynep Gül Özataş - Computer Engineering Student at Çanakkale Onsekiz Mart Üniversitesi.


---

### 💡 Yapıştırmadan Önce Küçük Bir Not
Bu dosyayı kaydettikten sonra VS Code'un sağ üst köşesindeki **"Open Preview"** (dosya simgesi üzerinde büyüteç olan buton) simgesine basarsan, metnin nasıl şık bir görünüme kavuştuğunu görebilirsin. 

**Bir sonraki adım:** `.gitignore` dosyasını oluşturmak için hazır mısın? Onu da yapınca projenin "hijyenini" sağlamış olacağız.