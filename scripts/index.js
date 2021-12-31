function update() {
    let parent = document.getElementById('shelf');
    parent.innerHTML = '';

    for (let i = 0; i < books.length; i++) {
        let child = document.createElement('div');
        let grandchild = document.createElement('p');
        child.setAttribute('class', 'book');
        child.style.backgroundColor = books[i].color;
        parent.appendChild(child);
        grandchild.innerHTML = books[i].name;
        grandchild.setAttribute('class', 'rotate');
        child.appendChild(grandchild);
    }
}

let books = [];

function reset() {
    books = [];
    
    let book1 = new Book('Where the Red Fern Grows', 'yellow');
    let book2 = new Book('Call of the Wild', 'blue');
    let book3 = new Book('Lord of the Flies', 'green');
    let book4 = new Book('Alice in Wonderland', 'pink');
    let book5 = new Book('Lord of the Rings', 'lightgrey');
    let book6 = new Book('Dune', 'brown');
    let book7 = new Book('War and Peace', 'darkolivegreen');
    let book8 = new Book('Don Quixote', 'red');
    let book9 = new Book('Moby Dick', 'paleturquoise');
    let book10 = new Book('Pride and Prejudice', 'purple');
    let book11 = new Book('Catch-22', 'lightblue');
    let book12 = new Book('Great Expectations', 'white');
    let book13 = new Book('To Kill a Mockingbird', 'grey');
    let book14 = new Book('Jane Eyre', 'maroon');
    let book15 = new Book('Frankenstein', 'wheat');
    let book16 = new Book('Charlotte\'s Web', 'turquoise');
    let book17 = new Book('Paradise Lost', 'salmon');
    let book18 = new Book('Robinson Crusoe', 'royalblue');
    let book19 = new Book('A Clockwork Orange', 'orange');
    let book20 = new Book('Little Women', 'plum');

    books.push(book1, book2, book3, book4, book5, book6, book7,
            book8, book9, book10, book11, book12, book13,
            book14, book15, book16, book17, book18,
            book19, book20);
}

reset();
update();