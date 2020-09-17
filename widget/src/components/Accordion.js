// import React,{useState} from 'react'

// function Accordion({items}) {
//     const [activeIndex, setActiveIndex] = useState(null);
//     const onTitleClick = (index)=>{
//         setActiveIndex(index)
//      }
//     const renderItems = items.map((item,index)=>{
//         const active = index === activeIndex ? 'active' : ''
//         return (
//             <React.Fragment key = {item.title}>
//                 <div className = {`title ${active}`}
//                     onClick ={()=> onTitleClick(index)} >
//                         {item.title}
//                     <i className = "dropdown icon"/>
//                 </div>
//             <div className = {`content ${active}`}>
//                     {item.content}
//             </div>
//             </React.Fragment>
            
//         )
//     })
//     return (
//         <div className = "ui styled accordion">
//             {renderItems}
//         </div>
//     )
// }

// export default Accordion

import React,{useState} from 'react';

const Accordion = ({items})=> {
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = index => setActiveIndex(index);

    const renderItems = items.map((item,index)=>{
        const active = index === activeIndex ? 'active' : ''
        return(
            <React.Fragment key = {item.title}>
                <div className = {`title ${active}`}
                    onClick = {()=>onTitleClick(index)}
                    >
                    {item.title}
                    <i className = "dropdown icon"/>
                </div>
                <div className = {`content ${active}`}>
                    {item.content}
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className = "ui styled accordion">
            {renderItems}
        </div>
    )
}

export default Accordion

