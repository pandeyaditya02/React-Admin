//experiment for drag and drop 

import Linecontext from "./linecontext";
import { useState } from "react";
import { mockLineData,mockLineData2 } from "../../data/mockData";


const Linestate= (props)=>{
    const [LineGraphs, setLineGraphs] = useState([mockLineData,mockLineData2,mockLineData]);

    const update=()=>{        
        const newData=[...LineGraphs,mockLineData];
        setLineGraphs(newData);
    }
    
    return(
        <Linecontext.Provider value={{LineGraphs,update,setLineGraphs}}>
            {props.children}
        </Linecontext.Provider>
    )
}

export default Linestate;


//working for add line graph 

// import Linecontext from "./linecontext";
// import { useState } from "react";
// import { mockLineData,mockLineData2 } from "../../data/mockData";


// const Linestate= (props)=>{
//     const [LineGraphs, setLineGraphs] = useState([mockLineData,mockLineData2,mockLineData]);

//     const update=()=>{        
//         const newData=[...LineGraphs,mockLineData];
//         setLineGraphs(newData);
//     }
    
//     return(
//         <Linecontext.Provider value={{LineGraphs,update,setLineGraphs}}>
//             {props.children}
//         </Linecontext.Provider>
//     )
// }

// export default Linestate;