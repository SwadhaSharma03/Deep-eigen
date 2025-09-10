import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button, Typography, Layout } from 'antd';
import './HomePage.css';
import TopNavbar from './Navbar/TopNavbar';

// ✅ Import your background image
import FrontImage from '../Images/frontimage.png';
import StatsAndCTA from './Stats/StatsAndCTA';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, when: 'beforeChildren' },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

export const HomePage: React.FC = () => {
  return (
    <Layout className="home-dark-layout">
      <TopNavbar />
      <Content>
        {/* HERO SECTION */}
        <motion.section
          className="hero-section"
          style={{ backgroundImage: `url(${FrontImage})` }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="hero-overlay" />

          <motion.div className="hero-content" variants={itemVariants}>
          <Title data-aos="fade-left" className="hero-title">
              Shape the Future with AI <span className="highlight">Innovation</span>
            </Title>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Paragraph data-aos="fade-left"style={{fontWeight:"500"}} className="hero-subtitle">
              Master artificial intelligence through immersive courses and hands-on
              laboratory experiences. Join thousands of innovators building
              tomorrow&apos;s technology.
            </Paragraph>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-buttons">
            <Button type="primary" size="large" className="cta-button">
              Start Learning Today →
            </Button>
            <input type="text" placeholder="Enter email" className="cta-input" />
          </motion.div>
        </motion.section>
      </Content>
      <StatsAndCTA/>
    </Layout>
  );
};
