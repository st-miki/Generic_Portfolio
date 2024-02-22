import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Tag, Button, Modal,Row, Col, Carousel } from 'antd';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import CaseStudy from '../CaseStudy/CaseStudy';
import './WorkPage.css'; // Your custom CSS file

const WorkPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [caseStudyModalIsOpen, setCaseStudyModalIsOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  
  const getTagColor = (tag) => {
    switch (tag) {
      case 'UI':
        return 'blue';
      case 'UX':
        return 'cyan';
      case 'Frontend':
        return 'green';
      case 'Backend':
        return 'gold';
      case 'Design':
        return 'purple';
      default:
        return 'default';
    }
  };
  
  const works = [
      {
        id: 1,
        images: [
          { original: './Selam/selam1.png', thumbnail: './Selam/selam1.png' },
          { original: './Selam/selam2.png', thumbnail: './Selam/selam2.png' },
          { original: './Selam/selam3.png', thumbnail: './Selam/selam3.png' },
          { original: './Selam/selam4.png', thumbnail: './Selam/selam4.png' },
          { original: './Selam/selam5.png', thumbnail: './Selam/selam5.png' },
          { original: './Selam/selam6.png', thumbnail: './Selam/selam6.png' },
          { original: 'selam.png', thumbnail: '/selam.png' },
        ],
        title: 'Selam.et',
        tags: ['UI', 'Front-end', 'Design'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        caseStudy: 'View Case Study',
        caseStudyContent: (
          <div>
            <h2>Case Study for Selam.et</h2>
            <p>Case study content for Selam.ETH goes here.</p>
          </div>
        ),
      },
      // Add more works with their respective case study content
    
    {
      id: 2,
      images: [
        { original: './Ethrons/Ethrons1.png', thumbnail: './Ethrons/Ethrons1.png' },
        { original: './Ethrons/Ethrons2.png', thumbnail: './Ethrons/Ethrons2.png' },
        { original: './Ethrons/Ethrons3.png', thumbnail: './Ethrons/Ethrons3.png' },
        { original: './Ethrons/Ethrons4.png', thumbnail: './Ethrons/Ethrons4.png' },
        { original: './Ethrons/Ethrons5.png', thumbnail: './Ethrons/Ethrons5.png' },
        { original: './Ethrons/Ethrons6.png', thumbnail: './Ethrons/Ethrons6.png' },
        { original: './Ethrons/Ethrons7.png', thumbnail: './Ethrons/Ethrons7.png' },
        { original: './Ethrons/Ethrons8.png', thumbnail: './Ethrons/Ethrons8.png' },
        
      ],
      title: 'Ethrons',
      tags: ['Frontend', 'Design'],
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      caseStudy: 'View Case Study',
      caseStudyContent: (
        <div>
          <h2>Case Study for Selam.et</h2>
          <p>Case study content for Selam.ETH goes here.</p>
        </div>
      ),
    },
    {
      id: 3,
      images: [
        { original: './Mint/Mint2.png', thumbnail: './Mint/Mint2.png' },
        { original: './Mint/Mint1.png', thumbnail: './Mint/Mint1.png' },
        { original: './Mint/Mint3.png', thumbnail: './Mint/Mint3.png' },
        { original: './Mint/Mint4.png', thumbnail: './Mint/Mint4.png' },
        { original: './Mint/Mint5.png', thumbnail: './Mint/Mint5.png' },
        { original: './Mint/Mint6.png', thumbnail: './Mint/Mint6.png' },
        
      ],
      title: 'Mint',
      tags: ['Frontend', 'Backend'],
      description: 'Prepared a mobile app for employees to use and a desktop app for the employees with no access to smart phone, so they can use the desktops the ministry provides them to order food. Refer to this training manual my team prepared to see the working of the app. The admin, cafe committee, store keeper, and cafe manager desktop application was designed for super users (each with their specific access privileges) to manage activities like payment (deposit, withdrawal, refund), Dashboard statistics with detailed reports, Inventory and order management, Employee management, and more. The main language to be used for the system was to be Amharic, as stated as a non-functional requirement. For the admin, cafe committee, cafe manager, storekeeper, the users were handful and the language most knew was only Amharic. Hence their version of the system was made using Amharic language only. But from the employee side, the number of users was numerous accrediting to different language preference, hence their version of the system is made to accommodate 5 types of languages.',
      caseStudy: 'View Case Study',
      caseStudyContent: (
        <div>
          <h2>Case Study for Selam.et</h2>
          <p>Case study content for Selam.ETH goes here.</p>
        </div>
      ),
    },
  ];
  const featuredWorks = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200',
      title: 'Featured Work 1',
      description: 'Description for featured work 1.',
      caseStudy: 'View Case Study',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200',
      title: 'Featured Work 2',
      description: 'Description for featured work 2.',
      caseStudy: 'View Case Study',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200',
      title: 'Featured Work 3',
      description: 'Description for featured work 3.',
      caseStudy: 'View Case Study',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300x200',
      title: 'Featured Work 4',
      description: 'Description for featured work 3.',
      caseStudy: 'View Case Study',
    },
   
    // Add more dummy data as needed
  ];
  const [modalVisible, setModalVisible] = useState(false);

  // Function to handle opening modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Function to handle closing modal
  const closeModal = () => {
    setModalVisible(false);
  };
  const openImageViewer = (image) => {
    console.log("Selected Image:", image); // Log selected image for debugging
    setSelectedImage(image);
    setModalIsOpen(true);
  };
  

  const closeImageViewer = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const openCaseStudyModal = (work) => {
    setSelectedWork(work);
    setCaseStudyModalIsOpen(true);
  };

  const closeCaseStudyModal = () => {
    setCaseStudyModalIsOpen(false);
  };

  return (
    <div className="work-page">
      <div className="header">
        <p className="title">My Works</p>
        <Link to="/" className="go-back">
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '15px' }} />
          Go back 
        </Link>
      </div>
      <div className="work-cards">
        {works.map(work => (
          <Card key={work.id} className="work-card">
            <div className="bento-box">
              <div className="bento-box-item image">
              <ImageGallery
                items={work.images}
                showPlayButton={false}
                showFullscreenButton={true}
                additionalClass="image-gallery-custom-thumbnails"
                showThumbnails={false}
                renderLeftNav={(onClick, disabled) => (
                  <button className="image-gallery-custom-left-nav" onClick={onClick} disabled={disabled}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                )}
                renderRightNav={(onClick, disabled) => (
                  <button className="image-gallery-custom-right-nav" onClick={onClick} disabled={disabled}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                )}
                onClick={(event) => openImageViewer(event.target.src)}
                lazyLoad
                infinite={true}
              />

              </div>
              <div className="bento-box-item details">
              <div className="title-tags-card">
              <div className="title-link-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2>{work.title}</h2>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faLink} style={{ color: '#2f54eb', marginRight: '10px', fontSize: '20px' }} />
                    <FontAwesomeIcon icon={faGithub} style={{ color: '#2f54eb', fontSize: '20px' }} />
                  </div>
                </div>
                {work.tags.map((tag, index) => (
                  <Tag key={index} color={getTagColor(tag)}>
                    {tag}
                  </Tag>
                ))}
              </div>
                <div className="description-card">
                  <p>{work.description}</p>
                </div>
                <div className="case-study-card">
                <Button type="default" onClick={() => openCaseStudyModal(work)} className="custom-button">
                  {work.caseStudy}
                </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
        <p className="title">Featured Works</p>
          <Row gutter={[16, 16]} justify="center" className="featured-works">
            {featuredWorks.map((work, index) => (
              <Col key={work.id} xs={24} sm={12} md={6} lg={6} xl={6}>
            <Card
              className="work-card"
              cover={<img alt={work.title} src={work.image} />}
              actions={[
                <Button type="primary" onClick={openModal}>View Details</Button>,
                <Button type="default" onClick={openModal}>Case Study</Button>,
              ]}
            >
              <Card.Meta title={work.title} description={work.description} />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Detailed View */}
      <Modal
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
        width={800}
      >
        <Carousel>
          {featuredWorks.map(work => (
            <div key={work.id}>
              <img alt={work.title} src={work.image} style={{ width: '100%' }} />
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              {/* Add additional details here */}
            </div>
          ))}
        </Carousel>
      </Modal>
      </div>
      
        <Modal
          open={modalIsOpen}
          onCancel={closeImageViewer}
          footer={null}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}>
            <img
              src={selectedImage}
              alt="Image viewer not working"
              style={{
                maxWidth: '50%', // Adjust the width of the image
                height: 'auto',
                borderRadius: '10px', // Add border-radius to round the corners
              }}
            />
          </div>
        </Modal>

        <Modal
          open={caseStudyModalIsOpen}
          onCancel={closeCaseStudyModal}
          footer={null}
        >
          {selectedWork && (
            <CaseStudy
              title={selectedWork.title}
              content={selectedWork.caseStudyContent}
            />
          )}
        </Modal>

    </div>
  );
};

export default WorkPage;