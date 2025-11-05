# 🎓 LegalDocFinder Backend

**Project Name:** LegalDocFinder  
  
**Frontend source code:** _[https://github.com/asrafulsgit/legal-doc-finder-client]_

---

## 🌟 Overview

This repository contains the **backend API** built using **FastAPI** for the Legal Document Search Portal. The API simulates a endpoint that returns legal documents based on the user’s query.

---

## 🚀 Key Features

### 1. Post legal document
### 2. Get legal documents 
### 2. Search legal documents with title, description, category or year


## 🧰 Tech Stack

- Typescript
- Node
- Express
- MongoDB(Mongoose)

## 🔗 API Endpoints

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | /api/v1/documents    | Post legal document          |
| GET    | /api/v1/documnets?search=     | GET legal documents         |


---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone 
cd /legal-doc-finder-server
Install dependencies

bash
npm install
```
```env
Configure environment variables
Create .env with:

PORT = 
MONGODB_URL = 
NODE_ENV = 
FRONTENT_URL =
```

```bash
npm run dev
npm run build
```