import React from "react";

const TableBody = props => {
  const { data, deleteBook } = props; // no `this` for functional component

  return (
    <tbody>
      {data.map(book => (
        <tr key={book.name}>
          <td>{book.name}</td>
          <td>{book.author}</td>
          <td>
            <button
              onClick={() => {
                // cannot invoke function directly in onClick
                deleteBook(book.name);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
