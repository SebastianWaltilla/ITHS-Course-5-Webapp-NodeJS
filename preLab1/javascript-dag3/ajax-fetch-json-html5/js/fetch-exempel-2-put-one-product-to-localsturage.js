function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}



//var this_js_script = $(script[src="js/fetch-exempel-2.js]"); // or better regexp to get the file name..



//var my_var_1 = this_js_script.attr('data-my_var_1');
//if (typeof my_var_1 === "undefined" ) {
//    var my_var_1 = 'some_default_value';
//}
//alert(my_var_1); // to view the variable value

var url = document.currentScript.attributes(jsonPath)
//const url = 'data/data.json';
//var url = document.getElementsByName(jsonPath);
const ul = document.getElementById('todos');

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {

        let todos = data.products;

        return todos.map(function(todo) {
            let li = createNode('li');
            let a = createNode("a");

            a.href = todo.hrefToContent;
            a.innerHTML = "<img src=\"" + todo.productPicture +"\">";
            li.innerHTML = todo.todoTitle + " " + todo.todoDate;
            append(ul, a);
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

