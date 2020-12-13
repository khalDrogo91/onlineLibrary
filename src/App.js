import React, { useState } from 'react';

import data from './data/book.json';
import Table from './component/Table';

function App() {

  const [searchKey, setSearchkey] = useState("");
  const [finalValue, setFinalValue] = useState("");


  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFinalValue(searchKey.toLowerCase());
    alert(`Submitting search ${searchKey}`)
  }

  const ifPresent = (finalValue) => {
   // console.log(`value = ${finalValue}`);
    const result =  data.filter(book => book.Title.toLowerCase().includes(finalValue.toLowerCase()));
   
    //console.log(result);
    
    if(result.length>0){
      console.log(` not empty array`);
      return true;
   }else{
    console.log(`empty array`);
     return false;
   }
   // console.log(`value = ${result}`);
    //return result;
  }

  return (<>
    <form onSubmit={handleSubmit}>
      <h2>Book shell</h2>
      <input type='text'
        placeholder='Search'
        value={searchKey}
        onChange={e => setSearchkey(e.target.value)}
      />
      {ifPresent(finalValue) ? <Table finalValue = {finalValue} > </Table>
        : <div><>No data</></div>
      }
            
      <input type="submit" value="Submit" />
    </form>
  </>)
}

export default App;
