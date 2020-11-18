import React, { useState } from 'react';

const LoginForm = () => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });

  const handleChange = name => ({ target }) => {
    setAccount({ ...account, [name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const { username, password } = account;

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleChange('username')}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handleChange('password')}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
