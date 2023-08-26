### Endpoints

The API provides various endpoints for user management, patient operations, task management, and more. Refer to the detailed API documentation for a complete list of endpoints and their functionalities.

#### User Registration

Endpoint: `POST /api/user/register`

Description: Registers a new user.

Request Body:
```json

{
  "email": "qq12@yahoo.com",
  "firstName": "Uka",
  "lastName": "Ify",
  "userName": "zeeman",
  "password": "1234",
  "employeeId": "qwww556",
  "confirm_password": "1234"
}

```

Response:
```json
{
    "message": "Proceed to verify your account",
    "user": {
        "firstName": "Uka",
        "lastName": "Ify",
        "userName": "zeeman",
        "employeeId": "qwww556",
        "email": "qq12@yahoo.com",
        "password": "$2a$10$DHsUUVMsABi9Cl98aDmVtuyKMtFpIKzJmAau7iVv.KdhfS2jMekou",
        "status": "pending",
        "role": "user",
        "otp": ...,
        "expiry": "2023-08-24T15:03:25.023Z",
        "_id": "64e76a364b04fbd483c767e0",
        "createdAt": "2023-08-24T14:33:26.569Z",
        "updatedAt": "2023-08-24T14:33:26.569Z",
        "__v": 0
    },
    "token": "..."
}
```

#### User Verification

Endpoint: `POST /api/user/verify/:id`

Description: Verifies the OTP of a new user.

Request Body:
```json

{
  "otp": 491421
}

```

Response:
```json
{
    "message": "User verified successfully, proceed to Login"
}
```

#### User Details Update

Endpoint: `PUT /api/user/update/:id`

Description: Updates the details of the user.

Request Body:
```json

{
  "email": "qqq@yahoo.com",
  "firstName": "ahah",
  "lastName": "nnaa",
  "userName": "ajaj",
  "employeeId": "qwww556",
}

```

Response:
```json
{
    "user": {
        "_id": "64e73cb28d7c86acd4b9d2b2",
        "firstName": "Uka",
        "lastName": "Isco",
        "userName": "zeetobs",
        "employeeId": "qwww556",
        "email": "qqq@yahoo.com",
        "status": "verified",
        "createdAt": "2023-08-24T11:19:14.215Z",
        "updatedAt": "2023-08-24T13:19:55.687Z",
        "__v": 0
    }
}
```
#### User Login

Endpoint: `POST /api/user/login`

Description: Enables User to Log in.

Request Body:
```json

{
  "email": "qq12@yahoo.com",
  "password": "1234"
}

```

Response:
```json
{
    "message": "Login successful",
    "user": {
        "_id": "64e75546d3048a3d0a86ed51",
        "firstName": "Uka",
        "lastName": "Ify",
        "userName": "zeeman",
        "employeeId": "qwww556",
        "email": "qq12@yahoo.com",
        "password": "$2a$10$KupZ8e3o3IJtaLxa8Y45d.0o784bml32cEALm.EIIQvt.qhHovFtO",
        "status": "verified",
        "otp": null,
        "expiry": null,
        "createdAt": "2023-08-24T13:04:06.410Z",
        "updatedAt": "2023-08-24T13:08:52.301Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTc1NTQ2ZDMwNDhhM2QwYTg2ZWQ1MSIsImVtYWlsIjoicXExMkB5YWhvby5jb20iLCJpYXQiOjE2OTI4ODQ4MjksImV4cCI6MTY5NTQ3NjgyOX0.51PmkN8gtwY085QqYehakf-SBQNN4NaIYVcLG059zq0"
}
```
#### Admin Register

Endpoint: `POST /api/admin/register`

Description: Creates an admin account.

Request Body:
```json

{
  "username": "zeeahah",
  "email": "yemail@example.com",
  "password": "123456",
  "confirm_password": "123456"
}

```

Response:
```json
{
    "message": "Admin created successfully",
    "newAdmin": {
        "username": "zeeahah",
        "password": "$2a$10$ct7d3xYWQ3EhrYgItrthYOmcMM.JxSXBvD8C7zABM6wP6rwdk0JeO",
        "email": "yemail@example.com",
        "role": "admin",
        "_id": "64e76122bcbf3e7916c9a800",
        "createdAt": "2023-08-24T13:54:42.141Z",
        "updatedAt": "2023-08-24T13:54:42.141Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTI4ODUyODIsImV4cCI6MTY5NTQ3NzI4Mn0.G7Os76NTPzZF9uqBn_H-PZgf1iSrd4UHLkMrcYwVroo"
}
```

#### Admin Get User

Endpoint: `GET /api/admin/getUser/:id`

Description: Allows Admin to get a Specific user.

Request Body:
```json

{

}

```

Response:
```json
{
    "message": "User successfully fetched",
    "objectIdUserId": "64e76a364b04fbd483c767e0"
}
```

#### Admin Delete User

Endpoint: `DELETE /api/admin/deleteUser/:id`

Description: Allows the admin to delete a specific user.

Request Body:
```json

{

}

```

Response:
```json
{
    "message": "User deleted successfully"
}
```

#### Admin Delete Patient

Endpoint: `DELETE /api/admin/deleteUser/:id`

Description: Allows the admin to delete a specific Patient.

Request Body:
```json

{

}

```

Response:
```json
{
    "message": "Patient deleted successfully"
}
```
#### Admin Get Users

Endpoint: `GET /api/admin/getUsers`

Description: Allows the admin to see all the users.

Request Body:
```json

{

}

```

Response:
```json
{
    "message": "Users successfully fetched",
    "users": [
        {
            "_id": "64e76a364b04fbd483c767e0",
            "firstName": "baab",
            "lastName": "sgsg",
            "userName": "nna",
            "employeeId": "qwww556",
            "email": "qq12@yahoo.com",
            "password": "$2a$10$DHsUUVMsABi9Cl98aDmVtuyKMtFpIKzJmAau7iVv.KdhfS2jMekou",
            "status": "verified",
            "role": "user",
            "otp": null,
            "expiry": null,
            "createdAt": "2023-08-24T14:33:26.569Z",
            "updatedAt": "2023-08-24T14:34:18.243Z",
            "__v": 0
        }
    ]
}
```
#### Admin Get Patients

Endpoint: `GET /api/admin/getPatients`

Description: Allows the admin to see all the patients.

Request Body:
```json

{

}

```

Response:
```json
[
    {
        "_id": "64e76e394404ee7e4ef4c2bb",
        "firstName": "ahaha",
        "lastName": "sjsj",
        "gender": "male",
        "height": 1.98,
        "weight": 80,
        "bmiIndex": 204060.81012141623,
        "__v": 0
    },
    {
        "_id": "64e76e89c5ef603cab1b9fdd",
        "firstName": "aaj",
        "lastName": "haha",
        "gender": "male",
        "height": 1.98,
        "weight": 80,
        "bmiIndex": 20.40608101214162,
        "__v": 0
    }
]
```
#### Admin Login

Endpoint: `POST /api/admin/login`

Description: Allows the admin to login.

Request Body:
```json

{
  "email": "yemail@example.com",
  "password": "123456"
}

```

Response:
```json
{
    "message": "Login successful",
    "admin": {
        "_id": "64e76122bcbf3e7916c9a800",
        "username": "zeeahah",
        "password": "$2a$10$ct7d3xYWQ3EhrYgItrthYOmcMM.JxSXBvD8C7zABM6wP6rwdk0JeO",
        "email": "yemail@example.com",
        "role": "admin",
        "createdAt": "2023-08-24T13:54:42.141Z",
        "updatedAt": "2023-08-24T13:54:42.141Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTc2MTIyYmNiZjNlNzkxNmM5YTgwMCIsImVtYWlsIjoieWVtYWlsQGV4YW1wbGUuY29tIiwiaWF0IjoxNjkyODg1NDIwLCJleHAiOjE2OTU0Nzc0MjB9.QnLyKPqBQ5oGS398qkakEQBEXuLHRSC1yzDspmC6bPI"
}
```
#### Create Patient

Endpoint: `POST /api/patient/createPatient`

Description: Allows the users to create Patients.

Request Body:
```json

{
    "firstName": "Yemi",
    "lastName": "Paul",
    "gender": "male",
    "height": 1.98,
    "weight": 80
}

```

Response:
```json
{
    "firstName": "Yemi",
    "lastName": "Paul",
    "gender": "male",
    "height": 1.98,
    "weight": 80,
    "_id": "64e76e89c5ef603cab1b9fdd",
    "bmiIndex": 20.40608101214162,
    "__v": 0
}
```
#### Patient Search

Endpoint: `GET /api/patient/searchPatient`

Description: Allows the users to search for Patients.

Request Body:
```json

{
       "firstName": "Yemi"
}

```

Response:
```json
[
    {
        "_id": "64e76e394404ee7e4ef4c2bb",
        "firstName": "Yemi",
        "lastName": "Paul",
        "gender": "male",
        "height": 1.98,
        "weight": 80,
        "bmiIndex": 204060.81012141623,
        "__v": 0
    }
]
```
#### Task Creation

Endpoint: `POST /api/task/createTask`

Description: Allows the users to create task.

Request Body:
```json

{
  "title": "Panadol Administration",
  "description": "Administer the medication to the patient.",
  "patientName": "Alfred John",
  "dueDate": "2022-08-30T12:00:00Z"
}

```

Response:
```json

{
    "title": "Panadol Administration",
    "description": "Administer the medication to the patient.",
    "patientName": "Alfred John",
    "dueDate": "2022-08-30T12:00:00.000Z",
    "completed": false,
    "_id": "64e7bdb1e6a131a22f3aff21",
    "__v": 0
}

```
#### Task Update

Endpoint: `POST /api/task/:id/assign`

Description: Allows the users to create task.

Request Body:
```json

{
  "title": "Medication Administration",
  "description": "Administer prescribed medication to the patient.",
  "patientName": "John Doe",
  "dueDate": "2023-08-30T12:00:00Z",
  "assignedTo": "64e76e394404ee7e4ef4c2bb",
  "completed" : false
}


```

Response:
```json

{
    "_id": "64e7b942b91c0217a465dbb0",
    "title": "Medication Administration",
    "description": "Administer prescribed medication to the patient.",
    "patientName": "John Doe",
    "dueDate": "2023-08-30T12:00:00.000Z",
    "completed": false,
    "__v": 0,
    "assignedTo": "64e76a364b04fbd483c767e0"
}

```
#### Task Assign

Endpoint: `PUT /api/task/:id`

Description: Allows the users to assign task to another user.

Request Body:
```json

{
    "assignedTo": "64e76a364b04fbd483c767e0"
}



```

Response:
```json

{
    "_id": "64e7b942b91c0217a465dbb0",
    "title": "Medication Administration",
    "description": "Administer prescribed medication to the patient.",
    "patientName": "John Doe",
    "dueDate": "2023-08-30T12:00:00.000Z",
    "completed": true,
    "__v": 0,
    "assignedTo": "64e76a364b04fbd483c767e0"
}
#### Change Task to Completed

Endpoint: `PUT /api/task/:id`

Description: Allows the users to assign task to another user.

Request Body:
```json

{
        "completed": true
}



```

Response:
```json

{
    "_id": "64e7b942b91c0217a465dbb0",
    "title": "Medication Administration",
    "description": "Administer prescribed medication to the patient.",
    "patientName": "John Doe",
    "dueDate": "2023-08-30T12:00:00.000Z",
    "completed": true,
    "__v": 0,
    "assignedTo": "64e76a364b04fbd483c767e0"
}

```
#### Task Search

Endpoint: `GET /api/task/searchTask`

Description: Allows the users to search for task using priority, duedate and assignedTo.

Request Body:
```json

{
"assignedTo":"64e76a364b04fbd483c767e0"
}



```

Response:
```json

[
    {
        "_id": "64e7b942b91c0217a465dbb0",
        "title": "Medication Administration",
        "description": "Administer prescribed medication to the patient.",
        "patientName": "John Doe",
        "dueDate": "2023-08-30T12:00:00.000Z",
        "completed": true,
        "__v": 0,
        "assignedTo": {
            "_id": "64e76a364b04fbd483c767e0"
        }
    },

]

```
#### Task Sort

Endpoint: `GET /api/task/sortTask`

Description: Allows the users to sort task using priority, duedate and assignedTo.

Request Body:
```json

{
"assignedTo":"64e76a364b04fbd483c767e0"
}



```

Response:
```json

[
   [
    {
        "_id": "64e7b942b91c0217a465dbb0",
        "title": "Medication Administration",
        "description": "Administer prescribed medication to the patient.",
        "patientName": "John Doe",
        "dueDate": "2023-08-30T12:00:00.000Z",
        "completed": true,
        "__v": 0,
        "assignedTo": {
            "_id": "64e76a364b04fbd483c767e0"
        }
    },
    {
        "_id": "64e7bc66b91c0217a465dbb7",
        "title": "Paracetamol Administration",
        "description": "Administer prescribed medication to the patient.",
        "patientName": "Peter Paul",
        "dueDate": "2023-08-30T12:00:00.000Z",
        "completed": false,
        "__v": 0
    },
    {
        "_id": "64e7bdb1e6a131a22f3aff21",
        "title": "Panadol Administration",
        "description": "Administer the medication to the patient.",
        "patientName": "Alfred John",
        "dueDate": "2022-08-30T12:00:00.000Z",
        "completed": false,
        "__v": 0
    }
]

]

```
#### Task Delete

Endpoint: `Delete /api/task/:id`

Description: Allows the users to delete task .

Request Body:
```json

{

}



```

Response:
```json

{
    "message": "Task deleted successfully"
}

```

## 4. Models

The backend uses various models to structure and store data. Refer to the documentation for details on each model's fields and relationships.

### User Model

```json

{
  "email": "user@example.com",
  "password": "hashed-password",
  "firstName": "John",
  "lastName": "Doe",
    "employeeId": "string",
  "status": "string",
  "otp": 12222,
  "expiry": "Date"
  ...
}
```
### Admin Model

```json
{
  "email": "user@example.com",
  "password": "hashed-password",
  "firstName": "John",
  "lastName": "Doe",
  "lastLogin": "Date"
  ...
}
```

### Patient Model

```json
{
  "name": "Patient Name",
  "gender": "Male",
  "height": 2.4,
  "weight": 77,
  "bmiIndex": 20.555,
  ...
}
```
### Task Model

```json
{
  "title": "Panadol Administration",
  "description": "Administer the medication to the patient.",
  "patientName": "Alfred John",
  "dueDate": "2022-08-30T12:00:00Z"
}
```
