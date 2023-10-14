```javascript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('random-number-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const randomNumber = Math.random();
        resultDiv.textContent = randomNumber;
    });
});
```
