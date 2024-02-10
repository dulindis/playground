import React, { ChangeEvent } from "react";

interface Element {
  id: number;
  title: string;
  body: string;
  index: number;
}
interface TableEntryProps {
  element: Element;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const TableEntry: React.FC<TableEntryProps> = (props) => {
  const { name, value, onChange } = props;

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default TableEntry;
