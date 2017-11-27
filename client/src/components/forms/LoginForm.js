import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    user
  }) => (
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Login</h2>
  
        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <label><b>Username</b></label>
        <input type="email" placeholder="Enter email" name="email" required
        onChange={onChange} errorText={errors.email} value={user.email}/>
        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required
        onChange={onChange} errorText={errors.password} value={user.password}/>
        <button type="submit">Login</button>
  
      </form>
  );
  
  LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  export default LoginForm;