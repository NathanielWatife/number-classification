# Number Classification API

This API classifies a number based on its mathematical properties and provides a fun fact about the number. It is built using **Node.js** and deployed on **Vercel**.

---

## **Features**

- Classifies a number based on the following properties:
  - **Prime**: Whether the number is a prime number.
  - **Perfect**: Whether the number is a perfect number.
  - **Armstrong**: Whether the number is an Armstrong number.
  - **Odd/Even**: Whether the number is odd or even.
  - **Digit Sum**: The sum of the digits of the number.
- Fetches a fun fact about the number from the [Numbers API](http://numbersapi.com).

---

## **API Endpoint**

### **Request**
- **Method**: `GET`
- **URL**: `/api/classify-number?number=<number>`
- **Query Parameter**:
  - `number`: The number to classify (must be a valid integer).

### **Response**
- **Success (200 OK)**:
```
json
  {
      "number": 371,
      "is_prime": false,
      "is_perfect": false,
      "properties": ["armstrong", "odd"],
      "digit_sum": 11,
      "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
  }
```
Error (400 Bad Request):

json
```
{
    "number": "invalid",
    "error": true
}
```
Installation
Prerequisites
Node.js (v16 or higher)

npm (Node Package Manager)

Steps
Clone the repository:

```
git clone https://github.com/your-username/number-classification-api.git
```
cd number-classification-api
Install dependencies:
```
npm install
```

Run the API locally:
```
npm start
The API will be available at http://localhost:5000.
```

Deployment
This API is deployed on Vercel. To deploy your own instance:

Install the Vercel CLI:

```
npm install -g vercel
```
Deploy the project:

Deploy to production:

vercel --prod
```
Your API will be live at a URL like https://your-app.vercel.app.
```

Usage
```
curl "https://your-app.vercel.app/api/classify-number?number=371"
```

```
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
Technologies Used
Node.js: Runtime environment for the API.

Express: Web framework for building the API.

Axios: For making HTTP requests to the Numbers API.

CORS: To handle Cross-Origin Resource Sharing.

Vercel: For deployment and hosting.

Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Author
DevNath

Acknowledgments
Numbers API for providing fun facts about numbers.

Vercel for seamless deployment.

Copy

---