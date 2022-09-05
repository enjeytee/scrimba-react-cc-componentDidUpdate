/// FIRST LESSON componentDidUpdate() ///

// import React from "react";

// export default class App extends React.Component {
//   state = JSON.parse(localStorage.getItem("formData")) || {
//     firstName: "", 
//     lastName: "", 
//     email: "", 
//     comments: "", 
//     isFriendly: true,
//     employment: "",
//     favColor: ""
//   }

//   handleChange = (event) => {
//     const {name, value, type, checked} = event.target
//     type === "checkbox" ? 
//         this.setState({
//             [name]: checked
//         })
//     :
//     this.setState({
//         [name]: value
//     }) 
//   }

//   /**
//    * Goal: 
//    * 1. Whenever the state changes, save it in localStorage
//    * 2. When the form mounts, pre-populate the state if 
//    *    there's saved data in localStorage 
//    */
//   componentDidMount() {
//     console.log("Mounted")
//   }
//   componentDidUpdate() {
//     console.log("Updated")
//     localStorage.setItem("formData", JSON.stringify(this.state))
//   }
//   render() {
//     console.log("Rendered")
//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={this.handleChange}
//                 name="firstName"
//                 value={this.state.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={this.handleChange}
//                 name="lastName"
//                 value={this.state.lastName}
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={this.handleChange}
//                 name="email"
//                 value={this.state.email}
//             />
//             <textarea 
//                 value={this.state.comments}
//                 placeholder="Comments"
//                 onChange={this.handleChange}
//                 name="comments"
//             />
//             <input 
//                 type="checkbox" 
//                 id="isFriendly" 
//                 checked={this.state.isFriendly}
//                 onChange={this.handleChange}
//                 name="isFriendly"
//             />
//             <label htmlFor="isFriendly">Are you friendly?</label>
//             <br />
//             <br />
            
//             <fieldset>
//                 <legend>Current employment status</legend>
//                 <input 
//                     type="radio"
//                     id="unemployed"
//                     name="employment"
//                     value="unemployed"
//                     checked={this.state.employment === "unemployed"}
//                     onChange={this.handleChange}
//                 />
//                 <label htmlFor="unemployed">Unemployed</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="part-time"
//                     name="employment"
//                     value="part-time"
//                     checked={this.state.employment === "part-time"}
//                     onChange={this.handleChange}
//                 />
//                 <label htmlFor="part-time">Part-time</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="full-time"
//                     name="employment"
//                     value="full-time"
//                     checked={this.state.employment === "full-time"}
//                     onChange={this.handleChange}
//                 />
//                 <label htmlFor="full-time">Full-time</label>
//                 <br />
//             </fieldset>
//             <br />
            
//             <label className="favColor" htmlFor="favColor">What is your favorite color?</label>
//             <br />
//             <select 
//                 id="favColor" 
//                 value={this.state.favColor}
//                 onChange={this.handleChange}
//                 name="favColor"
//             >
//                 <option value="red">Red</option>
//                 <option value="orange">Orange</option>
//                 <option value="yellow">Yellow</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="indigo">Indigo</option>
//                 <option value="violet">Violet</option>
//             </select>
//         </form>
//     )
//   }
// };

/// FIRST LESSON componentDidUpdate() ///


/// SECOND LESSON componentDidUpdate() ///

// import React from "react";

// export default class App extends React.Component {
//   state = {
//     character: {},
//     count: 0
//   }
//   add = () => {
//     this.setState(prevCount => {
//       return {
//         count: prevCount.count + 1
//       }
//     })
//   }
//   subtract = () => {
//     this.setState(prevCount => {
//       return {
//         count: prevCount.count - 1
//       }
//     })
//   }
//   getStarWarsCharacter = (id) => {
//     fetch(`https://swapi.dev/api/people/${id}`)
//       .then(response => response.json())
//       .then(data => this.setState({ character: data }))
//   }
//   componentDidMount() {
//     console.log("Component mounted")
//     this.getStarWarsCharacter(this.state.count)
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("Component updated")
//     if (prevState.count !== this.state.count) {
//       this.getStarWarsCharacter(this.state.count)
//     }
//   }
//   render() {
//     return (
//       <>
//         <div className="counter">
//           <button className="counter--minus" onClick={this.subtract}>-</button>
//           <div className="counter--count">
//             <h1>{this.state.count}</h1>
//           </div>
//           <button className="counter--plus" onClick={this.add}>+</button>
//         </div>
//         <h1>{this.state.character.name || "Loading..."}</h1>
//       </>
//     )
//   }
// }

/// END OF SECOND LESSON componentDidUpdate() ///