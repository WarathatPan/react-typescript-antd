import React from 'react';
import { Result } from 'antd';


interface UnauthorizedProps {
}

export const Unauthorized: React.FunctionComponent<UnauthorizedProps> = (props) => {
  if (localStorage.getItem('authToken')) {
    window.location.href = '/logout'; 
  }
  return (
    <Result
      status="403"
      title="401"
      subTitle="Sorry, you are not unauthorized to access. Please contact admin!"
    />
  );
}
