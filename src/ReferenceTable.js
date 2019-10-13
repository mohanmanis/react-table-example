import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class ReferenceTable extends Component {
  render() {
    const { data, deleteBook } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody data={data} deleteBook={deleteBook} />
      </table>
    );
  }
}

export default ReferenceTable;
