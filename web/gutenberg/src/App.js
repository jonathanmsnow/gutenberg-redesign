
import './App.css';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Bookshelf from './components/BookShelf/Bookshelf';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (
    <>

<div className="container mx-auto">
    <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
            <div className="sticky top-0 p-4 w-full">
                <ul className="flex flex-col overflow-hidden">
                    <SideMenu />
                </ul>
            </div>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* <Header></Header>
    <Jumbotron></Jumbotron>
    <Bookshelf shelfTitle='My Books'></Bookshelf>
    <Bookshelf shelfTitle='Explore'></Bookshelf> */}
        </main>
    </div>
</div>
<footer className="mt-auto">
    ...
</footer>



    </>

  );
}

export default App;
