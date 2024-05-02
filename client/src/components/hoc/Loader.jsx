import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

function Loader({children, isLoading}) {
    if(isLoading){
        return (
            <>
              <Spinner animation="grow" size="sm" />
              <Spinner animation="grow" />
            </>
          );
    }
    return children;
}

export default Loader;