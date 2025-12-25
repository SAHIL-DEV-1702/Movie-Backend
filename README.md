# MOVIE BACKEND

## Features

- RESTful API built with Express
- MongoDB integration using Mongoose
- Authentication with JSON Web Tokens (JWT)
- Password hashing using bcrypt
- Environment variable management with dotenv
- CORS enabled
  

##  Tech Stack

- **Node.js**
- **Express**
- **MongoDB / Mongoose**
- **JWT (jsonwebtoken)**
- **bcrypt**


## 📦 Installation
MongoDb should be running locally 


 RUN APPLICATION:
   ```bash
   git clone https://github.com/SAHIL-DEV-1702/Movie-Backend.git
   cd backend
   npm i
   npm run dev
```


REGISTER ADMIN USER USING BACKEND API
 ```bash
   curl --location 'http://localhost:8000/auth/admin/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"sahilpatil",
     "email":"patilsahil17@gmail.com",
      "password":"SAHiL@1111", 
      "secretKey":"adminSecret"
}'
   ```
