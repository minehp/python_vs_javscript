class BookStore:
    noOfBooks = 0
    def __init__(self, title, author):
        self.title = title
        self.author = author
        BookStore.noOfBooks += 1

    def bookInfo(self):
        print('Book title: {}'.format(self.title))
        print('Book author: {} \n\n'.format(self.author))

b1 = BookStore('The Power Of Habit', 'Charles duhigg')
b2 = BookStore('Everything figureoutable', 'Marie Forleo')

b1.bookInfo()
b2.bookInfo()

print('Number of book: {}'.format(BookStore.noOfBooks))

