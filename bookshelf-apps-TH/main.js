const localStorageKey = "LIST_BOOK";
const title = document.querySelector("#inputBookTitle");
const author = document.querySelector("#inputBookAuthor");
const year = document.querySelector("#inputBookYear");
const readed = document.querySelector("#inputBookIsComplete");
const btnSubmit = document.querySelector("#bookSubmit");
const searchValue = document.querySelector("#searchBookTitle");
const btnSearch = document.querySelector("#searchSubmit");


let checkInput = [];
let checkTitle = "";
let checkAuthor = "";
let checkYear = "";

window.addEventListener("load", function(){
  if (typeof(Storage) !== "undefined") {
      // (MATERI 1)
      // inisialisasi semua item web storage yang kita akan gunakan jika belum ada
    }if (localStorage.getItem(localStorageKey) === null){
          localStorage.setItem(localStorageKey, JSON.stringify(checkInput));
    }
    if (localStorage.getItem(localStorageKey) !== "") {
      const booksData = getData();
      showData(booksData);
    }
})

btnSubmit.addEventListener("click", function() {
        checkInput = [];
        checkTitle = true;
        checkAuthor = true;
        checkYear = true;

        checkInput.push(checkTitle,checkAuthor,checkYear);
            const newBook = {
                id: +new Date(),
                title: title.value.trim(),
                author: author.value.trim(),
                year: year.value,
                isCompleted: readed.checked
            }
            insertData(newBook);


})

readed.addEventListener('click',function (){
    let status=document.getElementById("submitStatus");
    if (readed.checked==true){
        status.innerText="Selesai dibaca";
    }
    else{
        status.innerText="Belum selesai dibaca";
    }
})
