

function WithAuth(WrappedComponent) {
    return function protectedComponent(props) {
        
        const isLoggeedIn=false;
        if(!isLoggeedIn)
            return <h3>please loagin and continue</h3>
         return <WrappedComponent {...props} />
    }
    }
export default WithAuth