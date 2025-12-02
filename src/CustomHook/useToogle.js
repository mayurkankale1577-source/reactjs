
import { useState } from "react";

function useToogle(initialValue=false) {
    const [value, setValue] = useState(initialValue);
    const toggle = () => {
        setValue(prev => !prev);
    };
    return [value, toggle];
}
export default useToogle;
