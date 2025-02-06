const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

// Helper functions
const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const isPerfect = (n) => {
    if (n < 2) return false;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
};

const isArmstrong = (n) => {
    const digits = String(n).split('');
    const length = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), length), 0);
    return sum === n;
};

const getDigitSum = (n) => {
    return String(n).split('').reduce((acc, digit) => acc + Number(digit), 0);
};

const getParity = (n) => {
    return n % 2 === 0 ? 'even' : 'odd';
};

const getFunFact = async (n) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${n}/math`);
        return response.data;
    } catch (error) {
        return 'No fun fact available.';
    }
};

// API endpoint
app.get('/api/classify-number', async (req, res) => {
    const number = req.query.number;

    // Input validation
    if (!number || isNaN(number)) {
        return res.status(400).json({
            number: number || 'null',
            error: true,
        });
    }

    const num = Number(number);

    // Calculate properties
    const properties = [];
    if (isArmstrong(num)) properties.push('armstrong');
    properties.push(getParity(num));

    // Fetch fun fact
    const funFact = await getFunFact(num);

    // Build response
    const response = {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: getDigitSum(num),
        fun_fact: funFact,
    };

    res.status(200).json(response);
});

module.exports = app;