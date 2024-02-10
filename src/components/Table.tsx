import React, { useState, useEffect } from "react";
import axios from "axios";
import TableEntry from "./TableEntry";

interface DataItem {
  id: number;
  title: string;
  body: string;
  index: number;
}

const Table: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [editableRowIndex, setEditableRowIndex] = useState(null);

  const [newInput, setNewInput] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEditClick = (index) => {
    setEditableRowIndex(index);
  };
  const handleSaveClick = () => {
    // Logic to save changes made to the editable fields
    setEditableRowIndex(null);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedItem = { ...data[index], [name]: value };
    const updatedData = [
      ...data.slice(0, index),
      updatedItem,
      ...data.slice(index + 1),
    ];
    setData(updatedData);

    // setNewInput(event.target.value);
    // updateItem(index, newInput);
    // // setNewInput("");
    // console.log(data)
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("Input value changed:", event.target.value);
  }

  return (
    <div>
      <h1> Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>post</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((element, index) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>
                  {editableRowIndex === index ? (
                    <TableEntry
                      name="title"
                      value={element.title}
                      onChange={(event) => handleInputChange(event, index)}
                    />
                  ) : (
                    element.title
                  )}
                </td>
                <td>
                  {editableRowIndex === index ? (
                    <TableEntry
                      name="body"
                      value={element.body}
                      onChange={(event) => handleInputChange(event, index)}
                    />
                  ) : (
                    element.body
                  )}
                </td>
                <td>
                  {editableRowIndex === index ? (
                    <button onClick={() => handleSaveClick()}>Save</button>
                  ) : (
                    <button onClick={() => handleEditClick(index)}>Edit</button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
