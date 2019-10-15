class BookStore {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        BookStore.noOfBooks = (BookStore.noOfBooks || 0) + 1;
    }

    bookInfo() {
        console.log(`Book title: ${this.title}`);
        console.log(`Book author: ${this.author}\n\n`);
    }
}

const b1 = new BookStore('The Power Of Habit', 'Charles duhigg');
const b2 = new BookStore('Everything figureoutable', 'Marie Forleo');

b1.bookInfo();
b2.bookInfo();

console.log(`Number of book: ${BookStore.noOfBooks}`);

