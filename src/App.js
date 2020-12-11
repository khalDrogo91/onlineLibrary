import React, { useState } from 'react';
import Book from './component/Book';
import data from './data/book.json';


function App() {

  const [searchKey, setSearchkey] = useState("");
  const [finalValue, setFinalValue] = useState("");


  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFinalValue(searchKey);
    alert(`Submitting search ${searchKey}`)
}


  return (<>

    <form onSubmit={handleSubmit}>
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
          data.filter(book => book.Title.includes(finalValue)).map((book, index) =>
            <tr> <Book key={index} {...book}></Book></tr>
          )}
      </table>
      <input type="submit" value="Submit" />
    </form>
  </>)
}

export default App;
