import React, { useState } from "react";
import { Card, Tag, Row, Col, Button, Typography, Space } from "antd";
import "./CoursesPage.css"; // custom styles for colors + animations

const { Title, Paragraph } = Typography;

type Course = {
  id: number;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  tags: string[];
  duration?: string;
  students?: number;
  rating?: number;
  highlight?: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    level: "Beginner",
    description:
      "Master the core concepts of machine learning with hands-on projects and real-world applications.",
    tags: ["Python", "Scikit-learn", "Data Analysis"],
    highlight: "Most Popular",
  },
  {
    id: 2,
    title: "Deep Learning with Neural Networks",
    level: "Intermediate",
    description:
      "Dive deep into neural networks, backpropagation, and advanced architectures like CNNs and RNNs.",
    tags: ["TensorFlow", "PyTorch", "Neural Networks"],
  },
  {
    id: 3,
    title: "Natural Language Processing",
    level: "Intermediate",
    description:
      "Learn to process and understand human language using state-of-the-art NLP techniques.",
    tags: ["BERT", "Transformers", "Text Mining"],
    duration: "10 weeks",
    students: 1200,
    rating: 4.7,
  },
];

const filters = ["All Courses", "Beginner", "Intermediate", "Advanced", "Free"];

const CoursesPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Courses");

  const filteredCourses =
    selectedFilter === "All Courses"
      ? courses
      : courses.filter((course) => course.level === selectedFilter);

  return (
    <div className="courses-page">
      {/* Header */}
      <div className="courses-header">
        <Title level={2} style={{ color: "#fff" ,marginTop:"100px",fontSize:"22px"}}>
          AI Courses
        </Title>
        <Paragraph style={{ maxWidth: "600px", margin: "0 auto", color: "#f0f0f0",fontSize:"17px" }}>
          Learn from industry experts and build real-world AI applications. Our
          comprehensive curriculum covers everything from fundamentals to
          advanced techniques.
        </Paragraph>

        {/* Filters */}
        <Space style={{ marginTop: "36px" }} wrap>
          {filters.map((filter) => (
            <Button
              key={filter}
              type={selectedFilter === filter ? "primary" : "default"}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </Space>
      </div>

      {/* Courses Grid */}
      <Row gutter={[24, 24]} justify="center">
        {filteredCourses.map((course, index) => (
          <Col xs={24} sm={12} lg={10} key={course.id}>
            <Card
              className="course-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              title={
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{course.title}</span>
                  {course.highlight && (
                    <Tag color="purple">⭐ {course.highlight}</Tag>
                  )}
                </div>
              }
              bordered={false}
              hoverable
            >
              {/* Level */}
              <Tag
                color={
                  course.level === "Beginner"
                    ? "green"
                    : course.level === "Intermediate"
                    ? "blue"
                    : "red"
                }
              >
                {course.level}
              </Tag>

              {/* Description */}
              <Paragraph>{course.description}</Paragraph>

              {/* Tags */}
              <Space wrap>
                {course.tags.map((tag, i) => (
                  <Tag key={i} color="geekblue">
                    {tag}
                  </Tag>
                ))}
              </Space>

              {/* Footer Info */}
              <div className="course-footer">
                {course.duration && <span>⏳ {course.duration}</span>}
                {course.students && <span>👥 {course.students}</span>}
                {course.rating && <span>⭐ {course.rating}</span>}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoursesPage;
