// // // // import { useState } from "react";

// // // // let name = "Mustafa";

// // // const [alertVisible, setAlertVisibility] = useState(false);
// // // return (

// // // // // let items = ["London", "USA", "Pakistan", "Paris"];

// // // // // const handleSelectItem = (item: String) => {
// // // // //   console.log(item);
// // // // // };

// // // // // import { Buttons } from "./components/Buttons";
// // // // // import ListGroup from "./components/ListGroup";
// // // // // import Alert from "./components/alert";
// // // // // </><nav>
// // // // //         <a href="#">
// // // // //           <p>Home</p>
// // // // //         </a>
// // // // //         <p>About</p>
// // // // //         <p>Contact</p>
// // // // //       </nav>
// // // // //       <div>
// // // // //         <h1>My name is {name}</h1>
// // // // //       </div>

// // // // //       <div>
// // // // //         <ListGroup
// // // // //           items={items}
// // // // //           heading="Cities"
// // // // //           onSelectItem={handleSelectItem}
// // // // //         />
// // // // //       </div>
// // // // //       <div>
// // // // //         {alertVisible && (
// // // // //           <Alert>
// // // // //             Succesful Alert
// // // // //             <button
// // // // //               onClick={() => setAlertVisibility(false)}
// // // // //               type="button"
// // // // //               className="btn-close"
// // // // //               data-bs-dismiss="alert"
// // // // //               aria-label="Close"
// // // // //             ></button>
// // // // //           </Alert>
// // // // //         )}

// // // // //         <Buttons onClick={() => setAlertVisibility(true)}>
// // // // //           {"My Button"}
// // // // //         </Buttons>
// // // // //       </div>
// // // // //       <div></div>




// // import Navbar from "./components/Navbar";
// // import About from "./components/About";
// // import Alert from "./components/Alert";
// // import { useState } from "react";

// // function App() {
// //   const [mode, setMode] = useState("light");

// //   // alert state is an object with msg and type or null
// //   const [alert, setAlert] = useState<{ msg: string; type: string } | null>(
// //     null
// //   );

// //   const showAlert = (message: string, type: string) => {
// //     // Update the alert state with the message and type
// //     setAlert({
// //       msg: message,
// //       type: type,
// //     });

// //     // Clear the alert after 2 seconds
// //     setTimeout(() => {
// //       setAlert(null);
// //     }, 2500);
// //   };

// //   const darkMode = () => {
// //     if (mode === "light") {
// //       setMode("dark");
// //       showAlert("Dark mode has been enabled", "Success");
// //     } else {
// //       setMode("light");
// //       showAlert("Light mode has been enabled", "Success");
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar
// //         title="MailSail"
// //         aboutText="About Us"
// //         mode={mode}
// //         darkMode={darkMode}
// //       />
// //       {/* Pass the alert message as a prop */}
// //       <Alert alert={alert} />
// //       <About />
// //     </>
// //   );
// // }

// // export default App;





// export default function Navbar(props: {
//     mode: string;
//     title: string;
//     aboutText: string;
//     darkMode: () => void; // Include the darkMode prop type here
//   }) {
//     return (
//       <nav
//         className={`navbar navbar-expand-lg bg-body-tertiary navbar-${props.mode} bg-${props.mode}`}
//       >
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             {props.title}
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   {props.aboutText}
//                 </a>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success mx-5" type="submit">
//                 Search
//               </button>
//             </form>
//             <div className="form-check form-switch">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 role="switch"
//                 id="flexSwitchCheckDefault"
//                 onClick={props.darkMode} // Pass the darkMode function correctly
//               />
//               <label
//                 className={`form-check-label text-${
//                   props.mode === "light" ? "dark" : "light"
//                 }`}
//                 htmlFor="flexSwitchCheckDefault"
//               >
//                 {props.mode === "light"
//                   ? "Enable Dark Mode"
//                   : "Enable Light Mode"}
//               </label>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }
  