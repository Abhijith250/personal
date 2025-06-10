import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>

      <div className="job">
        <div className="job-header">
          <h3 className="job-title">Software Engineer - III</h3>
          <span className="job-date">Mar 2025 - Present</span>
        </div>
        <h4 className="job-location">Khoros, Bangalore, India</h4>
        <ul>
          <li>Spearheaded major UI enhancements using React, TypeScript, and GraphQL, significantly improving user engagement on the Khoros Community platform.</li>
          <li>Designed and delivered a moderation dashboard that enables efficient management of community content.</li>
          <li>Championed web accessibility by implementing WCAG-compliant features, enhancing usability for user groups.</li>
          <li>Developed a nearby events feature that uses user latitude and longitude to accurately identify and display the closest events.</li>
          <li>Mentored junior developers, led code reviews, and guided frontend architecture decisions to align with product goals.</li>
          <li>Collaborated with product owners and stakeholders in Agile environments to align feature scope with roadmap goals and sprint outcomes.</li>
        </ul>
      </div>

      <div className="job">
        <div className="job-header">
          <h3 className="job-title">Software Engineer - II</h3>
          <span className="job-date">Mar 2024 - Mar 2025</span>
        </div>
        <h4 className="job-location">Khoros, Bangalore, India</h4>
        <ul>
          <li>Led development of configurable widgets and multi-item drag-and-drop features using React and TypeScript, enhancing personalization and interactivity.</li>
          <li>Improved application performance by reducing redundant GraphQL queries and implementing efficient state management strategies.</li>
          <li>Designed and maintained dynamic email templates using Handlebars.js, supporting Zoom workflow integrations.</li>
          <li>Delivered a discussion-style idea-sharing module, boosting community engagement and user collaboration.</li>
          <li>Participated in code reviews, sprint planning, and backlog grooming, contributing to improved code quality and team productivity.</li>
        </ul>
      </div>

      <div className="job">
        <div className="job-header">
          <h3 className="job-title">Software Engineer - I</h3>
          <span className="job-date">Aug 2022 - Mar 2024</span>
        </div>
        <h4 className="job-location">Khoros, Bangalore, India</h4>
        <ul>
          <li>Collaborated with QA to perform manual and regression testing, and wrote unit tests using Jest, improving UI stability.</li>
          <li>Contributed to the development of interactive, reusable frontend components using React, TypeScript, and GraphQL.</li>
          <li>Diagnosed and resolved critical production issues, ensuring timely support and platform reliability.</li>
          <li>Implemented foundational accessibility features aligned with WCAG standards, enhancing platform inclusivity.</li>
          <li>Participated in Agile ceremonies, worked cross-functionally, and consistently delivered features aligned with sprint goals.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
