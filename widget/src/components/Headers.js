import React from 'react';
import Link from './Link';

const Headers =()=>{
    return (
        <div className = "ui secondary pointing menu">
            <Link href = "/" className = "item">
                Accordion
            </Link>
            <Link href = "/list" className = "item">
               Search
            </Link>
            <Link href = "/dropdown" className = "item">
               Dropdown
            </Link>
            <Link href = "/translate" className = "item">
                Translate
            </Link>
        </div>
    )
}

export default Headers

// import React from 'react';
// import {Link} from 'react-router-dom';

// function Headers() {
//     return (
//         <div className = "ui secondary pointing menu">
//             <Link to = "/" className = "item">
//                 Accordion
//             </Link>
//             <Link to = "/list" className = "item">
//                 Search
//              </Link>
//             <Link to = "/dropdown" className = "item">
//                  Dropdown
//             </Link>
//             <Link to = "/translate" className = "item">
//                 Translate
//             </Link>
//         </div>
//     )
// }

// export default Headers

