import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Title, Link } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer
      style={{
        background: "linear-gradient(90deg, #3b82f6, #9333ea)",
        color: "#fff",
        padding: "50px 80px",
      }}
    >
      <Row gutter={[32, 32]} justify="space-between">
        {/* Brand / Logo */}
        <Col xs={24} sm={12} md={6}>
          <Title level={3} style={{ color: "#fff", marginBottom: 12 }}>
            Deep Eigen AI Labs
          </Title>
          <Text style={{ color: "#ddd" }}>
            Learn AI with hands-on projects and industry-ready skills.
          </Text>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Quick Links
          </Title>
          <Space direction="vertical">
            <Link href="/" style={{ color: "#ddd" }}>
              Home
            </Link>
            <Link href="/courses" style={{ color: "#ddd" }}>
              Courses
            </Link>
            <Link href="/labs" style={{ color: "#ddd" }}>
              AI Labs
            </Link>
            <Link href="/pricing" style={{ color: "#ddd" }}>
              Pricing
            </Link>
          </Space>
        </Col>

        {/* Resources */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Resources
          </Title>
          <Space direction="vertical">
            <Link href="/blog" style={{ color: "#ddd" }}>
              Blog
            </Link>
            <Link href="/faq" style={{ color: "#ddd" }}>
              FAQ
            </Link>
            <Link href="/contact" style={{ color: "#ddd" }}>
              Contact Us
            </Link>
          </Space>
        </Col>

        {/* Social Media */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Follow Us
          </Title>
          <Space size="large">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FacebookOutlined style={{ fontSize: 24, color: "#fff" }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <TwitterOutlined style={{ fontSize: 24, color: "#fff" }} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <LinkedinOutlined style={{ fontSize: 24, color: "#fff" }} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <GithubOutlined style={{ fontSize: 24, color: "#fff" }} />
            </a>
          </Space>
        </Col>
      </Row>

      {/* Bottom Bar */}
      <div
        style={{
          marginTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <Text style={{ color: "#bbb" }}>
          © {new Date().getFullYear()} Deep Eigen AI Labs. All Rights Reserved.
        </Text>
      </div>
    </Footer>
  );
};

export default AppFooter;
