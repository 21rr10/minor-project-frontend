import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Validation Functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!re.test(email)) return 'Invalid email format';
    return '';
  };

  const validateName = (name) => {
    if (!name.trim()) return 'This field is required';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Only letters are allowed';
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    if (!/[A-Z]/.test(password)) return 'Include at least one uppercase letter';
    if (!/[0-9]/.test(password)) return 'Include at least one number';
    return '';
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) return 'Please confirm your password';
    if (confirmPassword !== password) return 'Passwords do not match';
    return '';
  };

  // Dark Mode Toggle
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());

    if (newMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  // API Call using useEffect
  useEffect(() => {
    if (formSubmitted) {
      const submitDataToAPI = async () => {
        try {
          const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: firstname,
              lastName: lastname,
              email,
              password,
            }),
          });

          const data = await response.json();
          console.log('API Response:', data);

          // Reset form after successful submission
          setFormSubmitted(false);
        } catch (error) {
          console.error('Error submitting data:', error);
        }
      };

      submitDataToAPI();
    }
  }, [formSubmitted, firstname, lastname, email, password]);

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const firstnameError = validateName(firstname);
    const lastnameError = validateName(lastname);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    setErrors({
      email: emailError,
      firstname: firstnameError,
      lastname: lastnameError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (
      !emailError &&
      !firstnameError &&
      !lastnameError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      console.log('Form is valid, proceeding with API call');
      setFormSubmitted(true); // Trigger the API call via useEffect
    }
  };

  // JSX Return
  return (
    <div className={`signup-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="theme-toggle">
        <button onClick={toggleDarkMode} className="theme-toggle-btn">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="signup-form-container">
        <h1>Sign Up</h1>
        <p className="welcome-text">Join us today! 🎉</p>

        <form onSubmit={handleSubmit}>
          {/* First Name Input */}
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              placeholder="E.g. John"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  firstname: validateName(e.target.value),
                }));
              }}
              required
              className={errors.firstname ? 'invalid' : ''}
            />
            {errors.firstname && (
              <div className="error-message">{errors.firstname}</div>
            )}
          </div>

          {/* Last Name Input */}
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              placeholder="E.g. Doe"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  lastname: validateName(e.target.value),
                }));
              }}
              required
              className={errors.lastname ? 'invalid' : ''}
            />
            {errors.lastname && (
              <div className="error-message">{errors.lastname}</div>
            )}
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="E.g. johndoe@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  email: validateEmail(e.target.value),
                }));
              }}
              required
              className={errors.email ? 'invalid' : ''}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    password: validatePassword(e.target.value),
                  }));
                }}
                required
                className={errors.password ? 'invalid' : ''}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: validateConfirmPassword(e.target.value),
                }));
              }}
              required
              className={errors.confirmPassword ? 'invalid' : ''}
            />
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        {/* Sign-In Prompt */}
        <p className="signin-prompt">
          Already have an account? <Link to="/signin">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
