// import React,{useState} from 'react';
// import Dropdown from './Dropdown';
// import Convert from './Convert';

// const options = [
//     {
//       label: 'Afrikaans',
//       value: 'af',
//     },
//     {
//       label: 'Arabic',
//       value: 'ar',
//     },
//     {
//       label: 'Hindi',
//       value: 'hi',
//     },
//     {
//         label: 'Dutch',
//         value: 'nl',
//       },
   
//   ];
//   //AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM    =>localhost 3000 only
// const Translate =()=>{
//     const [language, setLanguage] = useState(options[0]);
//     const [text, setText] = useState('');
//     return(
//         <div className = "ui form">
//             <div className = "field">
//             <label>Enter Text</label>
//                 <input
//                 value = {text}
//                 onChange = {(e)=>setText(e.target.value)}
//                 /> 
//             </div>
          
//             <Dropdown
//             label = "select a Language"
//             selected = {language}
//             onSelectedChange= {setLanguage}
//             options = {options}

//             />
//             <hr/>
//             <h3>Output</h3>
//             <Convert
//             language = {language}
//             text = {text}
//             />
//         </div>
//     )
// }

// export default Translate





import React,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
      label: 'Afrikaans',
      value: 'af',
    },
    {
      label: 'Arabic',
      value: 'ar',
    },
    {
      label: 'Hindi',
      value: 'hi',
    },
    {
        label: 'Dutch',
        value: 'nl',
      },
   
  ];

const Translate = ()=>{
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('')

    return (
        <div>
            <div className = "ui form">
                <div className = "field"> 
                    <div>Enter Text</div>
                        <input
                        value = {text}
                        onChange = {e=>setText(e.target.value)}
                        />
                </div>
            </div>
                <Dropdown
                options = {options}
                label= 'Select a Language'
                selected = {language}
                onSelectedChange = {setLanguage}
                />
                <Convert language = {language} text = {text}/>
        </div>
    )
}

export default Translate
