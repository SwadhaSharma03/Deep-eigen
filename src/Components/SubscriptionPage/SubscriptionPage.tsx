import React from "react";
import { Card, Row, Col, Typography, Button } from "antd";
import { motion, Variants } from "framer-motion";
import './SubscriptionPage.css';

const { Title, Paragraph, Text } = Typography;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const plans = [
  {
    name: "Basic",
    price: "$9.99 / month",
    features: ["Course Access", "Limited AI App Access"],
    popular: false,
  },
  {
    name: "Standard",
    price: "$19.99 / month",
    features: ["Course Access", "Full AI App Access", "Community Support"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$29.99 / month",
    features: ["Course Access", "Full AI App Access", "1-on-1 Mentoring", "Early Access to Features"],
    popular: false,
  },
];

const SubscriptionPage: React.FC = () => {
  return (
    <motion.div
      className="subscription-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Title level={2} className="subscription-title" style={{ textAlign: "center", marginBottom: 40, color: '#ff6f61' }}>
        Choose Your Plan
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {plans.map(({ name, price, features, popular }) => (
          <Col xs={24} sm={12} md={8} key={name}>
            <motion.div variants={itemVariants}>
              <Card
                className={`plan-card ${popular ? "popular" : ""}`}
                bordered={false}
                hoverable
              >
                {popular && <div className="popular-badge">Popular</div>}

                <Title level={3} className="plan-name">{name}</Title>
                <Text className="plan-price">{price}</Text>

                <ul className="plan-features">
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Button type={popular ? "primary" : "default"} block className="subscribe-button">
                  Subscribe
                </Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default SubscriptionPage;
