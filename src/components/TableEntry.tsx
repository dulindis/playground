import React, { ChangeEvent } from "react";

interface Element {
  id: number;
  title: string;
  body: string;
  index: number;
}
interface TableEntryProps {
  element: Element;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const TableEntry: React.FC<TableEntryProps> = ({ element, onChange }) => {
  return (
    // <tr key={element.id}>
    //   <td>{element.id}</td>
    //   <td>{element.title}</td>
    //   <td>{element.body}</td>
    //   <td>
    //     <button onClick={onChange}>EDIT</button>
    //   </td>
    // </tr>
    // <tr key={row.id}>
    //   <td>{row.id}</td>
    //   <td>
    //     {editableRowIndex === index ? (
    //       <input
    //         type="text"
    //         value={row.name}
    //         onChange={(event) => handleInputChange(event, index)}
    //       />
    //     ) : (
    //       row.name
    //     )}
    //   </td>
    //   <td>
    //     {editableRowIndex === index ? (
    //       <input
    //         type="text"
    //         value={row.age}
    //         onChange={(event) => handleInputChange(event, index)}
    //       />
    //     ) : (
    //       row.age
    //     )}
    //   </td>
    //   <td>
    //     {editableRowIndex === index ? (
    //       <button onClick={() => handleSaveClick()}>Save</button>
    //     ) : (
    //       <button onClick={() => handleEditClick(index)}>Edit</button>
    //     )}
    //   </td>
    // </tr>
  );
};

export default TableEntry;
