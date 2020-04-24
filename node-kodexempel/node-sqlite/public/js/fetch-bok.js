function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('bok');
const url = 'http://127.0.0.1:3000/api/bok/';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.bok);
        console.log("Visa första i json-objektet: " + data.bok[0].bokTitel);
        let bok = data.bok;
        return bok.map(function(bok) {
            let li = createNode('li');
            li.innerHTML = bok.bokTitel + " " + bok.bokForfattare;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
