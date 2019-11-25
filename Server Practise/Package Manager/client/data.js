export default function init() {
    fetch('http://127.0.0.1:3000')
        .then(response => response.json())
        .then(data => display(data))
}



function display(data) {

    data.forEach(post => {
        let item = document.createElement('li')

    });
}