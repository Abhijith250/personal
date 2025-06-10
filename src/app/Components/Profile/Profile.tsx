"use client";
import React from 'react';
import Image from 'next/image';
import './Profile.css';

const Profile = () => (
  <section className="profile">
    <div className="image-container">
      <Image 
        src="/images/profile.jpg" 
        alt="Profile" 
        width={500} 
        height={500} 
        className="rounded-full" 
      />
    </div>

    <div className="section-text">
      <div className="profile-text">
        <p className="profile-intro">Hello, I am</p>
        <h1 className="profile-title">Abhijith</h1>
        <p className="profile-role">Frontend Developer</p>
          <p className="profile-description">
        I love building beautiful, performant web experiences. With a strong focus on clean design and accessibility, I turn ideas into functional products.
      </p>
      <p className="profile-description">
        Experienced in React, TypeScript, and GraphQL, I enjoy solving real-world problems through intuitive UIs.
      </p>
      <p className="profile-description">
        Outside of coding, you will often find me exploring new technologies, following design trends, or travelling.
      </p>
        <div className="profile-btn">
          <button className="resume" onClick={() => window.open('/abhi-resume.pdf')}>
            Download Resume
          </button>
        </div>
      </div>

      <div className="social-container">
   <a href="https://www.linkedin.com/in/b-e-abhijith-560584192/" target="_blank" rel="noopener noreferrer">
    <Image src="/images/linked.png" alt="LinkedIn" width={48} height={48} />
  </a>
  
  <a href="mailto:abhi.eswar.250@example.com" target="_blank" rel="noopener noreferrer">
    <Image src="/images/mail.png" alt="Gmail" width={48} height={48} />
  </a>
  
  <a href="https://www.instagram.com/awebhi" target="_blank" rel="noopener noreferrer">
    <Image src="/images/inst.png" alt="Instagram" width={48} height={48} />
  </a>
      </div>
    </div>
  </section>
);

export default Profile;
