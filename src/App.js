import React from 'react';
import Book from './component/Book';
import data from './data/book.json';


function App() {
  return <>
  <div>
    <h2>Book shell</h2>
    
    <input type ='text' placeholder='Search'></input>
    <button type='submit'>search</button>
    
    <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid',
     'border-width': 'medium'}}>
      <tr>
        <td>Id</td>
        <td></td>
        <td>Name</td>
      </tr>
      {data.map((book, index) =>
        <tr> <Book key={index} {...book}></Book></tr>
      )}
    </table>




    </div>
  </>
}

export default App;
