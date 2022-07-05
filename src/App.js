import React  from 'react';
import './App.css';



const App = ()=> {
  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search')|| 'React');

  React.useEffect(() => {
    localStorage.setItem('search',searchTerm);},
    [searchTerm]);

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'oher baaa',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'kok nummm',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ];
  const handleSearch = event => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search',event.target.value);
  }

  const searchedStories = stories.filter(story => 
        (story.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())));
        //  console.log(searchedStories);
         return(                               
    <div className="App">
    <h1>holaa App is here</h1>
    <Search onSearch={handleSearch} termee = {searchTerm}/>
    <List list={searchedStories}/>
  </div>
    );  
}

const Search = ({onSearch,termee})=> {

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" onChange={onSearch} value={termee} ></input>
      <p> Searching for <strong>{termee}</strong></p>
    </div>
  );
}

const List = ({list}) => 
  list.map(({objectID, ...item}) => <Item key={objectID} {...item}/>);
    const Item = ({title,url,author,num_comments,points}) => (
      <div >
        <span>
          <a href={url}>{title}     :  </a>
        </span>
        <span>{author}</span>
        <span>{num_comments}</span>
        <span>{points}</span>
      </div>
  );

export default App;
