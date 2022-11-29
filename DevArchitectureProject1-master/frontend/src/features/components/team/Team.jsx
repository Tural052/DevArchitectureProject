import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllMembers } from '../about/aboutSlice';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './team.module.css';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const allMembers = useSelector(selectAllMembers);
  const navigate = useNavigate();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  };

  const teamView = allMembers.map((member) => {
    return (
      <div
        className={`${styles.team_member_container}`}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <div
          style={{
            background: '#B1B1B1'
          }}
        >
          <img src={member.img} alt="twc team" width="320" height="320" />
        </div>
        <h2>{member.name}</h2>
        <p>{member.position}</p>
        <p>{member.education}</p>
      </div>
    );
  });

  const handleMoreTeam = () => {
    navigate('/about/team');
  };

  return (
    <div className={`${styles.team_container}`}>
      <h2
        className={`text-center`}
        style={{
          marginBottom: '113px'
        }}
      >
        Peşəkar komandamız
      </h2>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        responsive={responsive}
        mouseTracking
        infinite
        items={teamView}
      />
      <button className="team-button" onClick={handleMoreTeam}>
        Hamısına bax
      </button>
    </div>
  );
};

export default Team;
