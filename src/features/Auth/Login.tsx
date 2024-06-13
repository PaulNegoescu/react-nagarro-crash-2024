import { type ChangeEvent, useId, useState, type FormEvent } from 'react';
import { toast } from 'react-toastify';

export function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  }); 

  const id = useId();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const data = await fetch('http://localhost:3070/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(res => res.json());

    if(typeof data === 'string') {
      toast.error(data);
      return;
    }
    
    toast.success('You logged in successfully!');

    // const data = new FormData(e.currentTarget);
    // console.log(data.get('email'), data.get('password'));
  }
  
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValues({...values, [e.target.name]: e.target.value});
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {values.email}
      <div>
        <label htmlFor={`email${id}`}>Email</label>
        <input
          type="email"
          name="email"
          id={`email${id}`}
          value={values.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor={`password${id}`}>Password</label>
        <input
          type="password"
          name="password"
          id={`password${id}`}
          value={values.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
