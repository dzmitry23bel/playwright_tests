module.exports = {
    setupTestData: function() {
        // Function to set up test data
    },
    assertEqual: function(actual, expected) {
        // Function to assert that two values are equal
        if (actual !== expected) {
            throw new Error(`Assertion failed: ${actual} is not equal to ${expected}`);
        }
    },
    // Add more utility functions as needed
};