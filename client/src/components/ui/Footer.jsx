import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className="bg-dark text-center text-white mt-5">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn outline color="light" floating className="m-1" href="https://www.facebook.com/help/2117062948596536/" role="button">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" href="https://www.instagram.com/lifenews_ru/?hl=ru" role="button">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" href="https://vk.com/srochniye.novosti" role="button">
            <MDBIcon fab icon="google" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 NEWS
        <a className="text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></a>
      </div>
    </MDBFooter>
  );
}
