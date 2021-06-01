import React from 'react'
import { useState } from 'react'
import PrimarySearchAppBar from '../components/AppBar'
import useBooks from '../hooks'
import { Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../types'
import axios from 'axios'
import { loginSuccess } from '../redux/actions/loginDetail'
import BookList from '../components/BookList'

const Home = () => {
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState('')
  const [books] = useBooks(searchInput)
  const darkMode = useSelector((state: AppState) => state.ui.darkMode)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const responseGoogle = (respone: any) => {
    axios
      .post('http://localhost:5000/api/v1/login/google', {
        id_token: respone.tokenObj.id_token,
      })
      .then((res) => {
        dispatch(loginSuccess(res.data))
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <Paper style={{ height: '100%' }}>
      <PrimarySearchAppBar
        darkMode={darkMode}
        value={searchInput}
        handleInputChange={handleInputChange}
        responseGoogle={responseGoogle}
      />
      <BookList books={books} />
    </Paper>
  )
}

export default Home
