import useForm from "./useForm";

function LoginForm() {
  const initialState = { username: "", password: "" };

  const onSubmit = (values) => {
    console.log("form submitted", values);
  };

  const { values, handleChange, handleSubmit, resetForm } =
    useForm(initialState, onSubmit);

  return (
    <div>
      <h1>LoginForm</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
         <br />
        <br />
        <button type="submit">Login Button</button>
        <br />
        <br />
        <button type="button" onClick={resetForm}>
          Reset Button
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
