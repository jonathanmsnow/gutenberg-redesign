import Book from '../Book/Book';
import { useState } from 'react';

const Bookshelf = ({shelfTitle = "Bookshelf"}) => {
    const [isEditable, setIsEditable] = useState(false);
    const [title, setTitle] = useState(shelfTitle)
    const books = [
        {
            title: 'Great Gatsby',
            cover: 'https://covers.openlibrary.org/b/id/8432047-L.jpg'
        },
        {
            title: "Moby Dick",
            cover: 'https://covers.openlibrary.org/b/id/12621992-L.jpg'
        },
        {
            title: "Harry Potter",
            cover: 'https://covers.openlibrary.org/b/id/12904448-L.jpg'
        },
        {
            title: "Atomic Habits",
            cover: 'https://covers.openlibrary.org/b/id/12886417-L.jpg'
        },
        {
            title: 'Great Gatsby',
            cover: 'https://covers.openlibrary.org/b/id/8432047-L.jpg'
        },
        {
            title: "Moby Dick",
            cover: 'https://covers.openlibrary.org/b/id/12621992-L.jpg'
        },
        {
            title: "Harry Potter",
            cover: 'https://covers.openlibrary.org/b/id/12904448-L.jpg'
        },
        {
            title: "Atomic Habits",
            cover: 'https://covers.openlibrary.org/b/id/12886417-L.jpg'
        },
        {
            title: 'Great Gatsby',
            cover: 'https://covers.openlibrary.org/b/id/8432047-L.jpg'
        },
        {
            title: "Moby Dick",
            cover: 'https://covers.openlibrary.org/b/id/12621992-L.jpg'
        },
        {
            title: "Harry Potter",
            cover: 'https://covers.openlibrary.org/b/id/12904448-L.jpg'
        },
        {
            title: "Atomic Habits",
            cover: 'https://covers.openlibrary.org/b/id/12886417-L.jpg'
        },
        {
            title: 'Great Gatsby',
            cover: 'https://covers.openlibrary.org/b/id/8432047-L.jpg'
        },
        {
            title: "Moby Dick",
            cover: 'https://covers.openlibrary.org/b/id/12621992-L.jpg'
        },
        {
            title: "Harry Potter",
            cover: 'https://covers.openlibrary.org/b/id/12904448-L.jpg'
        },
        {
            title: "Atomic Habits",
            cover: 'https://covers.openlibrary.org/b/id/12886417-L.jpg'
        }
    ];

    return (
        <div className="container mx-auto mt-4">
        <h2 className='text-4xl mw-6/12 font-bold'>{title}</h2>
        <div className="grid grid-cols-12 gap-4 mt-4">
            {books.map(book => <Book bookInfo={book.title} bookImage={book.cover}></Book>)}
        </div>
        </div>
     
    )
}

export default Bookshelf;