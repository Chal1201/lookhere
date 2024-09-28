window.onload = function() {
    let count = 0;
    const interval = setInterval(function() {
        if (count < 100) {
            window.open('http://127.0.0.1:8080/index.html', '_blank', 'width=800,height=600');
            count++;
        } else {
            clearInterval(interval);
        }
    }, 1); // Opens a new window every 5 seconds
};
