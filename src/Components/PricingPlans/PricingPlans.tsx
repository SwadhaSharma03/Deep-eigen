import React from "react";
import { Row, Col, Card, Button, Typography } from "antd";

const { Title, Text } = Typography;

const PricingPlans = () => {
  const plans = [
    {
      title: "Basic",
      price: "$19/mo",
      features: ["Access to AI Labs", "Community Support", "5 Projects"],
      button: "Get Started",
    },
    {
      title: "Pro",
      price: "$49/mo",
      features: ["Everything in Basic", "Priority Support", "20 Projects", "Advanced AI Tools"],
      button: "Upgrade Now",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "$99/mo",
      features: ["Everything in Pro", "Dedicated Account Manager", "Unlimited Projects"],
      button: "Contact Sales",
    },
  ];

  return (
    <div style={{ padding: "60px 20px", background: "#f9f9f9" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <Title level={2}>Choose Your Plan</Title>
        <Text type="secondary">
          Flexible pricing designed for learners, startups, and enterprises.
        </Text>
      </div>

      <Row gutter={[32, 32]} justify="center">
        {plans.map((plan, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              title={<Title level={3}>{plan.title}</Title>}
              bordered={false}
              style={{
                textAlign: "center",
                borderRadius: "12px",
                boxShadow: plan.highlight
                  ? "0 4px 20px rgba(76,82,248,0.3)"
                  : "0 2px 10px rgba(0,0,0,0.1)",
                background: plan.highlight ? "linear-gradient(135deg, #4C52F8, #A855F7)" : "#fff",
                color: plan.highlight ? "white" : "black",
              }}
              headStyle={{
                textAlign: "center",
                background: plan.highlight ? "transparent" : "#fafafa",
                color: plan.highlight ? "white" : "black",
              }}
            >
              <Title level={2} style={{ marginBottom: "20px", color: plan.highlight ? "white" : "#4C52F8" }}>
                {plan.price}
              </Title>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: "10px", color: plan.highlight ? "white" : "gray" }}>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                type={plan.highlight ? "primary" : "default"}
                size="large"
                style={{
                  background: plan.highlight ? "white" : "#4C52F8",
                  color: plan.highlight ? "#4C52F8" : "white",
                  border: "none",
                  borderRadius: "8px",
                }}
              >
                {plan.button}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PricingPlans;
