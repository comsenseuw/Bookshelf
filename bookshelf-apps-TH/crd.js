function insertData(book) {
    let bookData = [];
    bookData = JSON.parse(localStorage.getItem(localStorageKey));
    bookData.unshift(book);
    localStorage.setItem(localStorageKey,JSON.stringify(bookData));

    showData(getData());
}

function getData() {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
}

function showData(books = []) {
    const inCompleted = document.querySelector("#incompleteBookshelfList");
    const completed = document.querySelector("#completeBookshelfList");

    inCompleted.innerHTML = '';
    completed.innerHTML = '';

    books.forEach(book => {
        if (book.isCompleted == false) {
            let el = `
            <article class="book_item">
                <h3>${book.title}</h3>
                <p>Penulis: ${book.author}</p>
                <p>Tahun: ${book.year}</p>

                <div class="action">
                    <button class="green" onclick="readedBook('${book.id}')">
                        <span>Selesai dibaca</span>
                    </button>
                    <button class="red" onclick="deleteBook('${book.id}')">
                        <span>Hapus buku</span>
                    </button>
                </div>
            </article>
            `

            inCompleted.innerHTML += el;
        }
        else{
            let el = `
            <article class="book_item">
                <h3>${book.title}</h3>
                <p>Penulis: ${book.author}</p>
                <p>Tahun: ${book.year}</p>

                <div class="action">
                    <button class="green" onclick="unreadedBook('${book.id}')">
                        <span>Belum selesai dibaca</span>
                    </button>
                    <button class="red" onclick="deleteBook('${book.id}')">
                        <span>Hapus buku</span>
                    </button>
                </div>
            </article>
            `
            completed.innerHTML += el;
        }
    });
}

function deleteBook(id) {
        const bookData = getData().filter(a => a.id != id);
        localStorage.setItem(localStorageKey,JSON.stringify(bookData));
        showData(getData());
}
