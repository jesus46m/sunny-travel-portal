
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // This ensures the user is redirected to the home page
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
};

export default Index;
