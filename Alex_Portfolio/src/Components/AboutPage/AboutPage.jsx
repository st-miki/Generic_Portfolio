import React from 'react';
import { Card, Typography, Space, Divider } from 'antd';
import { GithubOutlined, MailOutlined, InstagramOutlined } from '@ant-design/icons';


const { Title, Text } = Typography;

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <Card className="about-card">
        <Title level={2}>Hello, I'm Alex 👋</Title>
        <Divider />
        <Space direction="vertical" size="large">
          <Text>
            I am a passionate web developer with a strong background in front-end development.
          </Text>
          <Text>
            I am from [Your Location]. I have [number] years of experience in building beautiful and functional websites.
          </Text>
          <Text>
            Feel free to reach out to me through the following channels:
          </Text>
          <Space size="large">
            <a href="[Your GitHub Profile URL]">
              <GithubOutlined className="contact-icon" />
            </a>
            <a href="mailto:[Your Email Address]">
              <MailOutlined className="contact-icon" />
            </a>
            <a href="[Your Instagram Profile URL]">
              <InstagramOutlined className="contact-icon" />
            </a>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default AboutPage;