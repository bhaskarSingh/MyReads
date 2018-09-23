import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './components/AppBar/AppBar'
import BooksContainer from './containers/BooksContainer';
const Home = () => {
  return (
    <CssBaseline>
        <AppBar />
        <BooksContainer />
    </CssBaseline>
  )
}

export default Home;
