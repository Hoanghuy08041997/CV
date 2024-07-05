import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import ProfilePicture from './components/ProfilePicture';
import WorkExperience from './components/WorkExperience';
import EducationHistory from './components/EducationHistory';
import Project from './components/Project';
import Achievements from './components/Achievements';
import ContactInfo from './components/ContactInfo';
import Skills from './components/Skill';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <ProfilePicture />
            <div className="row">
              <div className="col-md-8">
                <WorkExperience />
                <Project />
                <Achievements />
              </div>
              <div className="col-md-4">
                <ContactInfo />
                <Skills />
                <EducationHistory />
              </div>
            </div>
          </>
        } />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
