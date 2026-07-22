import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-bold text-gradient">404</h1>
      <p className="mt-4 text-xl text-slate-400">Looks like this page got lost in the cloud.</p>
      <Link to="/" className="mt-8"><Button>Go Home</Button></Link>
    </div>
  );
};

export default NotFound;