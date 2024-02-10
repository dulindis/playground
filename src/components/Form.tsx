// import React, { useState, useEffect } from "react";
// import axios from "axios";

// interface MyComponentProps {
//   prop: string;
//   //   name: string;
//   //   age: number;
// }

// const Form: React.FC<MyComponentProps> = () => {
//   const [formData, setFormData] = useState<any[]>([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         setFormData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);
//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     console.log("Form submitted");
//   }

//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     console.log("Input value changed:", event.target.value);
//     // Add logic to update the state with the new value if needed
//   }
//   return (
//     <div>
//       <h1>Form</h1>
//       <form onSubmit={handleSubmit}>
//         {formData.map((el) => (
//           <input
//             key={el.id}
//             type="text"
//             value={el.title}
//             onChange={handleChange}
//           />
//         ))}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
