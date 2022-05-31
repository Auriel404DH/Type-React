import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <h1>Information</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod atque obcaecati
        dolores eum explicabo pariatur alias. Eius sunt reprehenderit assumenda laborum? Omnis
        deserunt veniam esse. Sequi ex ducimus cupiditate?
      </p>
      <button className="btn" onClick={() => Navigate('/', { replace: true })}>
        К ТуДушушке :-)
      </button>
    </div>
  );
};

export default AboutPage;
