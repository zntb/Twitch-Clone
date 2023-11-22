import { Toaster } from 'react-hot-toast';

export const App = ({ children }) => {
  return (
    <>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
