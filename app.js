
let input = prompt('what would you like to do?');

const todoList = ['Buy apple', 'Clean the floor'];

while (input.toLowerCase() !== 'quit' && input.toLowerCase() !== 'q') {
    if (input.toLowerCase() === "list") {
        console.log('**********');
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}:${todoList[i]}`);
        }
        console.log('**********');

    } else if (input.toLowerCase() === "new") {
        const newInput = prompt('Enter new todo');
        todoList.push(newInput);
        console.log(`${newInput} added to the list!`);

    } else if (input.toLowerCase() === "delete") {
        const deleteTodo = parseInt(prompt('Enter index of todo to delete? (Please type an index number)'));
        console.log(deleteTodo);
        if (!Number.isNaN(deleteTodo)) {
            const deleted = todoList.splice(deleteTodo, 1);
            console.log(`${deleted[0]} is removed`);
        } else {
            console.log('Unknown index');
        }
    }
    else {
        console.log("I don't know that, please try again.")
    }
    input = prompt('what would you like to do?')
}
console.log('OK YOU QUIT THE APP')







