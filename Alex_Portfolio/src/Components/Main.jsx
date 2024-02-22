import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBars, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
import { Button, Modal  } from 'antd';
import '../App.css';
import AboutPage from './AboutPage/AboutPage';


const Main = () => {
  const [localTime, setLocalTime] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchLocalTime = async () => {
      const response = await fetch('http://worldtimeapi.org/api/timezone/Africa/Addis_Ababa');
      const data = await response.json();
      const dateTime = new Date(data.datetime);
      const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      const formattedTime = dateTime.toLocaleTimeString(undefined, timeOptions);
      setLocalTime(formattedTime);
    };

    fetchLocalTime();
  }, []);
  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };
  const handleDownloadClick = () => {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the path of your CV file
    link.href = '../assets/My_cv.pdf'; // Adjust the path as needed
    // Set the download attribute to specify the filename for the downloaded file
    link.download = 'Alexander_k_Alema_cv.pdf'; // Adjust the filename as needed
    // Trigger a click event on the anchor element to initiate the download
    link.click();
  };
  return (
    <main>
      <div className="user-info">
        <div className="user-details" onClick={handleModalOpen} >
          <img src="alex_icon.jpeg" alt="User Avatar" className="user-avatar" style={{border: '2px solid #1890ff'}} />
          <p className="user-name"style={{color:'#1890ff'}}>Alexander K. Alema</p>
        </div>
        <div className="location-details">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
          <p className="location-text">Addis Ababa, Ethiopia -</p>
          <p className="local-time" style={{color:'#1890ff'}}>{localTime}</p>
        </div>
      </div>
      <Modal
        title="About Me"
        open={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <AboutPage />
      </Modal>
      <section className="hero">
        <div className="hero-content">
            <div style={{width:"700px"}}>
                <h1 className="hero-title">Welcome to My Portfolio</h1>
                <p className="hero-description">I'm excited to share my work with you!</p>
                <Button
                    type="default"
                    className="cv-button"
                    icon={<FontAwesomeIcon icon={faDownload} />}
                    size="large"
                    style={{ color: '#2F54EB', borderColor: '#2F54EB' }}
                    onClick={handleDownloadClick}
                >
                    Download CV
                </Button>
            </div>
        </div>
        <div class="hero-image">
            <img src="alex_hero.jpg" alt="Alexander K. Alema" class="hero-image__img"/>
        </div>
    </section>


      <div className="button-container">
        <div className="revolving-text-container">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <path id="circlePath" d="M60 10 a 50 50 0 0 1 0 100 a 50 50 0 0 1 0 -100" fill="none" />
            <text>
                <textPath href="#circlePath" startOffset="25%" style={{ fill: '#2F54EB' }}>
                Works
                </textPath>
            </text>
        </svg>

        </div>
        <Link to="/work" className="circular-button">
          <div class="image-icon"></div>
        </Link>
      </div>
    </main>
  );
};

export default Main;