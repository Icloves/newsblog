import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

function Loader({ children, isLoading }) {
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="grow" />
      </div>
    );
  }
  return children;
}

export default Loader;
