// import React,{useState} from 'react';

import React,{useState} from 'react'
import Translate from './components/Translate';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Headers from './components/Headers';
import Route from './components/Route';


const items = [
    {
        title: 'What is React?',
        content: 'React is a from end JS framework',
    },
    {
        title: 'What use React?',
        content: 'React is favorite JS library amon engineer',
    },
    {
        title: 'How do you use React?',
        content: 'React used by creating components',
    },
];

const options = [
    {
        label: 'The color red',
        value:'red'
    },
    {
        label: 'The color blue',
        value:'blue'
    },
    {
        label: 'The shade of yellow',
        value:'yellow'
    },
];

    export default ()=>{
        const [selected, setSelected] = useState(options[0]);
        return (
            <div>
                <Headers/>
                <Route path = "/">
                    <Accordion items = {items}/>
                </Route>

                <Route path = "/list">
                    <Search/>
                </Route>

                <Route path = "/dropdown">
                    <Dropdown
                        label = "Select a color"
                        options = {options}
                        selected = {selected}
                        onSelectedChange = {setSelected}
                    />
                </Route>

                <Route path = "/translate">
                    <Translate/>
                </Route>    
            </div>
        )
    }



// export default () => {

//     const [selected, setSelected] = useState(options[0]);
//     const [showDropdown, setShowDropdown] = useState(true);
//     return (
//         <div>
//             {/* <Accordion items = {items}/> */}
//             {/* <Search/> */}
//             <button onClick = {()=>setShowDropdown(!showDropdown)}>Off</button>

//         {  showDropdown ?
//             <Dropdown options = {options}
//                 selected = {selected}
//                 onSelectedChange = {setSelected}
//             /> : null}
//         </div>
//     )
// };



// export default ()=>{
//     const [selected, setSelected] = useState(options[0]);
//     const [showDropdown, setShowdropdown] = useState(true);
//     return (
//         <div>
//           {/* <Accordion items = {items}/> */}
//           {/* <Search/> */}
//           <button onClick = {()=>{setShowdropdown(!showDropdown)}}>Toggle DropDown</button>
//           {showDropdown ?
//             <Dropdown  
//                 selected = {selected} 
//                 onSelectedChange = {setSelected}
//                 options = {options}
//             />  : null
//           }
//         </div>
//     )
// }

// export default () =>{
//     const [selected, setSelected] = useState(options[0]);
//     const [showDropdown, setShowDropdown] = useState(true)
//     return (
//         <div>
//             <button onClick = {()=>{setShowDropdown(!showDropdown)}}>Open Dropdown</button>
//             {showDropdown ?
//                 <Dropdown
//             options = {options}
//             selected = {selected}
//             onSelectedChange = {setSelected}
//             /> :
//             null
//             }
//         </div>
//     )
// }


// const items = [
//     {
//      title: 'What is React?',
//      content: 'React is a from end JS framework',
//     },
//     {
//     title: 'What use React?',
//     content: 'React is favorite JS library among engineer',
//     },
//     {
//      title: 'How do you use React?',
//     content: 'React used by creating components',
//     },
// ];

// const options = [
//     {
//         label: 'The color red',
//         value:'red'
//     },
//     {
//         label: 'The color blue',
//         value:'blue'
//     },
//     {
//         label: 'The shade of yellow',
//         value:'yellow'
//     },
// ];