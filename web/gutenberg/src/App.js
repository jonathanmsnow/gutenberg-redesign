import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Modal from './components/Modal/Modal';
import Book from './components/Book/Book';
import Bookshelf from './components/BookShelf/Bookshelf';

function App() {
  return (
    <>
        <Header></Header>
    <Jumbotron></Jumbotron>
    <Bookshelf shelfTitle='My Books'></Bookshelf>
    <Bookshelf shelfTitle='Explore'></Bookshelf>


    </>

  );
}

export default App;
