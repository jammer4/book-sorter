let sortFlag = false;

function sort() {   
        
        if (!sortFlag) {
            if (document.getElementById('bubble').checked === true) {
                bubbleSort();
            } else if (document.getElementById('insertion').checked === true) {
                insertionSort();
            } else {
                selectionSort();
            }

            
        } else {
            reset();
            update();
            document.querySelector('button').innerHTML = 'Sort';
            sortFlag = false;
        }
}

async function bubbleSort() {
    document.querySelector('button').disabled = true;

    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < books.length - 1 - i; j++) {
            if (books[j].name > books[j + 1].name) {
                let temp = books[j];
                books[j] = books[j + 1];
                await new Promise(resolve => setTimeout(() => resolve(), 200));
                update();
                books[j + 1] = temp;
                update();
            }
        }
    }

    document.querySelector('button').innerHTML = 'Unsort';
    document.querySelector('button').disabled = false;
    sortFlag = true;
}

async function insertionSort() {
    document.querySelector('button').disabled = true;
    
    for (let i = 1; i < books.length; i++) {
        let curr = books[i];
        let j = i - 1;
        while ((j > -1) && (curr.name < books[j].name)) {
            books[j + 1] = books[j];
            j--;
        }

        books[j + 1] = curr;
        await new Promise(resolve => setTimeout(() => resolve(), 200));
        update();
    }

    document.querySelector('button').innerHTML = 'Unsort';
    document.querySelector('button').disabled = false;
    sortFlag = true;
}

async function selectionSort() {
    document.querySelector('button').disabled = true;
    
    for (let i = 0; i < books.length; i++) {
        let min = i;
        for (let j = i + 1; j < books.length; j++) {
            if (books[j].name < books[min].name) {
                min = j;
            }
        }

        if (min != i) {
            let temp = books[i];
            books[i] = books[min];
            books[min] = temp;
            await new Promise(resolve => setTimeout(() => resolve(), 200));
            update();
        }
    }

    document.querySelector('button').innerHTML = 'Unsort';
    document.querySelector('button').disabled = false;
    sortFlag = true;
}