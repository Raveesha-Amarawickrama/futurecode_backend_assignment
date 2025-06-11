export const validateUser = ({ username, email, password }) => {
  if (!username || !email || !password) {
    return 'All fields are required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }
  return null; // No errors
};
