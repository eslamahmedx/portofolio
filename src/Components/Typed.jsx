import React from 'react';
import Typewriter from 'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect" style={{ color: '#cfffe6', marginTop: 8 }}>
      <Typewriter
        options={{
          strings: [
            'Front-End Developer',
            'React.js Developer',
            'UI / Web Interface'
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Typed;
