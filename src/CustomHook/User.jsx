import useFetch from "./useFatech";

function User() {
    const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/users");
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error occured</h1>;
    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default User;