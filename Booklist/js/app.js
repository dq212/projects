console.log('ok');

//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Contstuctor
function UI() {}
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    //Create element
    const row = document.createElement('tr');
    //Insert cols
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delet">X</a></td>`;

    list.appendChild(row);
    console.log(row)
    // console.log(book);
} 

//Show alert
UI.prototype.showAlert = function (message, className) {
    console.log('nope');
    //Create div
    const div = document.createElement('div');
    //Add class
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //Inser alert
    container.insertBefore(div, form);

    // Timeout after 3 seconds
    setTimeout(function() {
        console.log('hey')
        document.querySelector('.alert').remove();
    }, 3000)
}

//Clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
//Event Listeners

document.getElementById('book-form').addEventListener('submit', function(e) {

//Get form values
    const title = document.getElementById('title').value,
            author = document.getElementById('author').value,          
            isbn = document.getElementById('isbn').value;

            console.log(title, author, isbn);
//Instantiate a book
            const book = new Book(title, author, isbn);
            // console.log(book);

            //Instantiate UI
            const ui = new UI();

            //Validate 
            if (title == "" || author == "" || isbn === "") {
                //Error alert
                ui.showAlert('Please fill in all fields', "error");

                alert('failed');
            } else {
                //Add book to list 
                ui.addBookToList(book);
            }

        //Show success
        ui.showAlert('Bood Added', 'success');
        //Add Book to List
        ui.addBookToList(book);

        //Clear fields
        ui.clearFields();

    e.preventDefault();
});