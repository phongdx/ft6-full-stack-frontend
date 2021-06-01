import React from 'react'
import BookDetail from '../components/BookDetail'

const SingleBookPage = () => {
  const testBook = {
    _id: '1223',
    isbn: '9781593275846',
    title: '1223',
    pages: 123,
    publishedDate: '2018-09-14T00:00:00.000Z',
    description: '1223',
    author: '123',
    coverUrl: 'http://covers.openlibrary.org/b/isbn/9781593275846.jpg',
  }
  return <BookDetail book={testBook} />
}

export default SingleBookPage
