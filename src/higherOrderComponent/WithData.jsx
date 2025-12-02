import { useState, useEffect } from "react";


function WithData(WrappedComponent,url) {
    return function EnhanceComponent(props) {
        const [data, setData] = useState([]);
        useEffect(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
        }, [])  
        return (
            <div>
             <WrappedComponent data={data} {...props} />

            </div>
        )
    }
}

export default WithData