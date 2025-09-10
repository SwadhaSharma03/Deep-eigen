import React from "react";
import { Row, Col, Card, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const stats = [
  { number: "10K+", label: "Students Enrolled" },
  { number: "50+", label: "AI Applications" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Lab Access" },
];

const StatsAndCTA = () => {
  const navigate = useNavigate();
  return (
    <div>

      <section style={{
        padding: "60px 20px", backgroundColor: "white"
        , backdropFilter: "blur(8px)"
      }}>
        <center>
          <h1 data-aos="fade-left" style={{
            fontSize: '2rem',
            color: '#2C3E50',
            marginBottom: '4px',
            marginTop: '4px',
            fontWeight: '700',
            letterSpacing: '0.5px',
          }}>
            Why Choose Deep Eigen AI Labs?
          </h1>

          <p data-aos="fade-left" style={{
            fontSize: '1rem',
            color: '#555',
            lineHeight: '1.6',
            marginBottom: '24px',
            maxWidth: '700px',
            margin: 'auto',
          }}>
            Experience a comprehensive AI education platform that combines theoretical knowledge with practical application.
          </p>
        </center>

        <Row justify="center" gutter={[24, 24]}>
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                bordered={false}
                style={{
                  textAlign: "center",
                  padding: "30px 20px",
                  boxShadow: `
  0 1px 3px rgba(0, 0, 0, 0.06),
  0 1px 2px rgba(0, 0, 0, 0.1)
`,

                  borderRadius: "10px",
                  backgroundColor: "white",
                  border: "1px solid lightgrey"
                }}
              >
                <Title level={2} style={{ color: "#4C52F8", marginBottom: 8 }} data-aos="flip-up">
                  {stat.number}
                </Title>
                <Text type="secondary" style={{ fontSize: "18px" }}>
                  {stat.label}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

  
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "linear-gradient(90deg, #4C52F8, #A855F7)",
          color: "white",
        }}
      >
        <Title
          level={2}
          data-aos="fade-left"
          style={{ color: "white", marginBottom: "16px", fontWeight: 600 }}
        >
          Ready to Start Your AI Journey?
        </Title>
        <Text style={{ fontSize: "16px", opacity: 0.95 }}>
          Join our community of learners and innovators. Choose a subscription
          plan that fits your goals.
        </Text>
        <div style={{ marginTop: "30px" }}>
          <Button
            type="default"
            size="large"
            data-aos="flip-left"
            style={{
              background: "#000",
              color: "#fff",
              border: "none",
              marginRight: "15px",
              padding: "10px 24px",
              borderRadius: "6px",
            }}
            onClick={() => navigate("/pricing")}
          >
            View Pricing Plans
          </Button>
          <Button
            size="large"
            style={{
              background: "#fff",
              color: "#000",
              padding: "10px 24px",
              border: "none",
              borderRadius: "6px",
            }}
          >
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StatsAndCTA;
