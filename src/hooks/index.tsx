import { useState, useEffect, useCallback } from 'react'

import { Book, AppState } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../redux/actions/book'

const useBooks = (searchInput: string): [Book[]] => {
  const books = useSelector((state: AppState) => state.book.books)
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const dispatch = useDispatch()

  const getBooks = useCallback(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  useEffect(() => {
    getBooks()
  }, [dispatch, getBooks])

  useEffect(() => {
    setFilteredBooks(
      books.filter((book) => {
        return book.title.toLowerCase().includes(searchInput.toLowerCase())
      })
    )
  }, [searchInput, books])

  return [filteredBooks]
}

export default useBooks
