
function WithStyle(WrappedComponent) {
    return function NewComponent (props) {
        return (
            <div style={{ border: "1px solid black", padding: "8px" }}>
                <WrappedComponent {...props} />{" "}
            </div>
        )
    }
}   
export default WithStyle