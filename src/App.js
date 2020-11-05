import React, { useState } from 'react';
import Book from './component/Book';
import data from './data/book.json';


function App() {

  const [searchKey, setSearchkey] = useState("");

  return (<>

    <div>
      <h2>Book shell</h2>

      <input type='text'
        placeholder='Search'
        value={searchKey}
        onChange={e => setSearchkey(e.target.value)}
      />

      <table style={{
        "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid',
        'border-width': 'medium'
      }}>
        
        <tr>
          <td>Id</td>
          <td> </td>
          <td>Name</td>
        </tr>
       {
          data.filter(book => book.Title.includes(searchKey)).map((book, index) =>
          <tr> <Book key={index} {...book}></Book></tr>
        )}
      </table>



    </div>
  </>)
}

export default App;
