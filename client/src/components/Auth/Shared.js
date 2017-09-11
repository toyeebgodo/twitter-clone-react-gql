import React from 'react';
import styled from 'styled-components';

export const Navbar = props => (
  <div
    className="ui fixed borderless menu gradient"
    style={{ height: 47, borderBottomColor: '#fff' }}
  >
    <div className="ui container">
      {props.loading ? (
        <i className="spinner-white" />
      ) : (
        <i
          className="fa fa-twitter white fa-2x"
          style={{ color: '#fff' }}
          aria-hidden="true"
        />
      )}
    </div>
  </div>
);

export const Background = styled.div`
  background: #fff;
  height: 100vh;
  display: flex;
`;

export const Title = styled.h1`font-size: 28px;`;

export const FormContainer = styled.div`
  justify-content: center;
  width: 430px;
  padding: 30px 30px;
  margin: 0 auto;
  margin-bottom: 25px;
  margin-top: 10px;
  background: #fff;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Container = styled.div`
  margin-top: 100px;
  padding-top: 20px;
  flex: 1;
  width: 500px;
  border: 0;
  justify-content: center;
`;

export const Field = styled.div`padding-bottom: 25px;`;
