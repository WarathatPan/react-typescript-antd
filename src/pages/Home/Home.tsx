import * as React from 'react';
import { useSelector } from 'react-redux';
import Layout from 'layouts/Home'
import { Row, Col, Table, Tag, Button, Typography, Modal } from 'antd';

const useState = React.useState;
const useEffect = React.useEffect;

const { Text } = Typography;

interface HomeProps {
}

export const Home: React.FunctionComponent<HomeProps> = () => {
  
  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
  }, []);

  return (
    <Layout>
      <Row gutter={16}>
        <Col span={24}>
          
        </Col>
      </Row>
    </Layout>
  );
}