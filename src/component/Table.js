import React from 'react';
import data from '../data/book.json';
import Book from '../component/Book';

export default function Table({finalValue}){


    return (<>
    <table style={{
        "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid',
        'border-width': 'medium'
      }}>
        
        <tr>
          <td>Id</td>
          <td> </td>
          <td>Name</td>
        </tr>

        { data.filter(book => book.Title.toLowerCase().includes(finalValue.toLowerCase()))
          .map((book, index) => <tr> <Book key={index} {...book}></Book></tr>) 
          }

      </table>
    </>)
} 