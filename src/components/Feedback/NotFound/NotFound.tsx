import React from 'react';
import { Result, Button } from 'antd';


interface NotFoundProps {
}

export const NotFound: React.FunctionComponent<NotFoundProps> = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary"><a href='/'>Back Home</a></Button>}
    />
  );
}
