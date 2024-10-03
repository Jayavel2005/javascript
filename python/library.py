import os

class Book:
    def __init__(self, book_id, title, author, copies):
        self.book_id = book_id
        self.title = title
        self.author = author
        self.copies = copies

    def display_info(self):
        print(f"ID: {self.book_id}, Title: {self.title}, Author: {self.author}, Copies: {self.copies}")


class Library:
    def __init__(self, name):
        self.name = name
        self.books = {}

    def add_book(self, book):
        if book.book_id in self.books:
            print(f"Book with ID {book.book_id} already exists!")
        else:
            self.books[book.book_id] = book
            print(f"Book '{book.title}' added successfully!")

    def remove_book(self, book_id):
        if book_id in self.books:
            removed_book = self.books.pop(book_id)
            print(f"Book '{removed_book.title}' removed successfully!")
        else:
            print(f"No book with ID {book_id} found.")

    def search_book(self, title):
        found_books = [book for book in self.books.values() if title.lower() in book.title.lower()]
        if found_books:
            print("Books found:")
            for book in found_books:
                book.display_info()
        else:
            print("No book found with that title.")

    def display_books(self):
        if self.books:
            print(f"Books in {self.name} library:")
            for book in self.books.values():
                book.display_info()
        else:
            print("No books available in the library.")

    def borrow_book(self, book_id):
        if book_id in self.books and self.books[book_id].copies > 0:
            self.books[book_id].copies -= 1
            print(f"You borrowed '{self.books[book_id].title}'.")
        else:
            print("Book unavailable or no copies left to borrow.")

    def return_book(self, book_id):
        if book_id in self.books:
            self.books[book_id].copies += 1
            print(f"Thank you for returning '{self.books[book_id].title}'.")
        else:
            print(f"No record of book ID {book_id}.")


class LibraryManagementSystem:
    def __init__(self):
        self.library = Library("Central Library")
        self.load_books()

    def load_books(self):
        if os.path.exists("books.txt"):
            with open("books.txt", "r") as file:
                for line in file:
                    book_id, title, author, copies = line.strip().split(", ")
                    self.library.add_book(Book(int(book_id), title, author, int(copies)))
            print("Books loaded from file.")
        else:
            print("No books file found. Starting fresh.")

    def save_books(self):
        with open("books.txt", "w") as file:
            for book in self.library.books.values():
                file.write(f"{book.book_id}, {book.title}, {book.author}, {book.copies}\n")
        print("Books saved to file.")

    def menu(self):
        while True:
            print("\nLibrary Menu")
            print("1. Add Book")
            print("2. Remove Book")
            print("3. Search Book")
            print("4. Display Books")
            print("5. Borrow Book")
            print("6. Return Book")
            print("7. Exit")
            choice = input("Enter your choice: ")

            if choice == "1":
                book_id = int(input("Enter Book ID: "))
                title = input("Enter Book Title: ")
                author = input("Enter Book Author: ")
                copies = int(input("Enter number of copies: "))
                self.library.add_book(Book(book_id, title, author, copies))

            elif choice == "2":
                book_id = int(input("Enter Book ID to remove: "))
                self.library.remove_book(book_id)

            elif choice == "3":
                title = input("Enter Book Title to search: ")
                self.library.search_book(title)

            elif choice == "4":
                self.library.display_books()

            elif choice == "5":
                book_id = int(input("Enter Book ID to borrow: "))
                self.library.borrow_book(book_id)

            elif choice == "6":
                book_id = int(input("Enter Book ID to return: "))
                self.library.return_book(book_id)

            elif choice == "7":
                print("Saving and exiting...")
                self.save_books()
                break

            else:
                print("Invalid choice, please try again.")

if __name__ == "__main__":
    system = LibraryManagementSystem()
    system.menu()
    
    
# Succes fully created
