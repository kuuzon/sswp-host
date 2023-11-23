import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Spinner } from 'react-bootstrap';

// LOCAL MODULES
import * as styles from './Signup.css'
import authService from '../../services/authService';
import useAuth from '../../hooks/useAuth'
import TuCard from '../../components/common/TuCard'
import TuButton from '../../components/common/TuButton';

function Login() {
  // ACCESS VARIABLES FROM HOOKS
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();

  // HOOK: SETTING COMPONENT STATE (& init values)
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  // Destructure data state nested object properties
  const { email, password } = user;

  // FORM FUNCTIONS
  // [1] handleTextChange handles state value change for all login data
  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // [2] handleSubmit will submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // API Call to Write User Data
    try {
      const response = await authService.login(user);
      loginSaveUser(response.data);
      navigate('/dashboard');
    } catch(err) {
      console.log(err?.response);
      setTimeout(() => {setLoading(false)}, 1000);
    }
  }

  return (
    <TuCard title="Log In" authform>
      <Form onSubmit={ handleSubmit }>
        {/* GROUP 1: EMAIL */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className={styles.styledLabel}>Email</Form.Label>
          <Form.Control className={styles.styledInput} type="email" placeholder="Email" name="email" value={email} onChange={ handleTextChange } required />
        </Form.Group>

        {/* GROUP 2: PASSWORD */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className={styles.styledLabel}>Password</Form.Label>
          <Form.Control className={styles.styledInput} type="password" placeholder="Password" name="password" value={password} onChange={ handleTextChange } required />
        </Form.Group>

        {/* SUBMIT BUTTON */}
        <TuButton loadingState={loading}>
          {loading ? <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          /> : 'Submit'}
        </TuButton>
      </Form>
      <div className={styles.userNav}>
        <span>Not a member? &nbsp;
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </TuCard>
  )
}

export default Login