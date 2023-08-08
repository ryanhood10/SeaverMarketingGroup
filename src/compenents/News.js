// News.js

import React from 'react';
import './assets/News.css';

const News = () => {
  return (
    <div className="news-container">
      <h1 className="news-title">News and Announcements</h1>
      <div className="news-content">
        <div className="news-item">
          <h2 className="news-item-title">New Season Announcement</h2>
          <p className="news-item-date">June 8, 2023</p>
          <p className="news-item-description">
            We are excited to announce the start of the new season for our youth basketball team! Registration is now open, and tryouts will be held on July 15th. Don't miss out on the opportunity to join our team and showcase your skills.
          </p>
        </div>
        <div className="news-item">
          <h2 className="news-item-title">Upcoming Tournament</h2>
          <p className="news-item-date">June 15, 2023</p>
          <p className="news-item-description">
            Our team will be participating in the upcoming tournament held in our city. Get ready to cheer for our players as they compete against other talented teams. Stay tuned for more details and the tournament schedule.
          </p>
        </div>
        {/* Add more news items here */}
      </div>
    </div>
  );
};

export default News;
