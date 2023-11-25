
import "./App.css";

// import React from 'react';

// function TicketForm() {
//   return (
//     <div className="container" id="container">
//       <div className="form-container sign-in-container">
//         <form action="#">
//           <h1>Create a New Ticket</h1>
//           <br />
//           <br />

//           <div className="mainbody">
//             <div className="customername">
//               <label style={{ fontSize: '24px' }}>Customer Name :</label>
//               <input type="text" placeholder="Enter your name" />
//             </div>
//             <br />
//             <br />

//             <div className="mailid">
//               <label style={{ fontSize: '24px' }}>Customer Email:</label>
//               <input type="email" placeholder="Email" />
//             </div>
//             <br /> <br />
//             <div className="pro">
//               <label htmlFor="product-select" style={{ fontSize: '24px' }}>
//                 Choose a product:
//               </label>

//               <select name="products" id="product-select">
//                 <option>--Please choose an option--</option>
//                 <option value="laptop">Laptop</option>
//                 <option value="keyboard">Keyboard</option>
//                 <option value="mouse">Mouse</option>
//                 <option value="mobile">Android Mobile</option>
//                 <option value="iphone">iPhone</option>
//                 <option value="charger">Charger</option>
//               </select>
//             </div>
//           </div>
//           <br />
//           <br />
          
//           <div className="desc">
//             <label style={{ fontSize: '24px' }}>Description of Issue:</label>
//             <br />
//             <br />
//             <textarea name="" id="" cols="40" rows="4"></textarea>
//           </div>

//           <br />
//           <button>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default TicketForm;


import React from 'react';
import './App.css'; // Make sure to import your CSS file

function AdminTable() {
  return (
    <div>
      <h2>Issue Table</h2>
      <button className="favorite styled" type="button">Back</button>

      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Email</th>
            <th>Product Issue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>example@email.com</td>
            <td>Defective Product</td>
            <td>Open</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
