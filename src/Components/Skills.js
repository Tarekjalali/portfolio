import React from 'react';
import { CIcon } from '@coreui/icons-react';
import { cibRedux } from '@coreui/icons';

const Skills = () => {
  return (
    <div>
      <h1 style={{marginBottom :'30px' , marginLeft : '10px' , fontSize :'24px'}} > My Skills </h1>
     
      <div style={{ width: '300px', display: 'flex' }}>
        
        {/* First group of 4 icons (Frontend skills) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            marginBottom: '20px',
            width: '150px',
          }}
        >
          {/* ReactJS */}
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '27px' }}>
            <i style={{ color: 'white', fontSize: '2rem' }} className="icon-reactjs"></i>
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>ReactJS</span>
          </div>

          {/* JavaScript */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <i style={{ color: 'white', fontSize: '2rem' }} className="icon-javascript"></i>
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>JavaScript</span>
          </div>

          {/* CSS3 */}
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
            <i style={{ color: 'white', fontSize: '2rem' }} className="icon-css3"></i>
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>CSS3</span>
          </div>

          {/* HTML */}
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '29px' }}>
            <i style={{ color: 'white', fontSize: '2rem' }} className="icon-html"></i>
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>HTML</span>
          </div>
        </div>

        {/* Second group of 4 icons (Backend and tools) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            marginBottom: '20px',
            width: '150px',
          }}
        >
          {/* NodeJS */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
            <i style={{ color: 'white', fontSize: '2rem' }} className="icon-nodejs"></i>
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>NodeJS</span>
          </div>

          {/* MongoDB */}
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '16px' }}>
            <i style={{ color: 'white', fontSize: '2rem' }} className="icon-mongodb"></i>
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>MongoDB</span>
          </div>

          {/* GitHub Icon */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '14px' , marginRight :'5px' }}>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>GitHub</span>
          </div>

          {/* Redux Icon */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '11px' ,marginRight :'11px' }}>
            <CIcon style={{ fill: 'white', height: '32px', width: '32px' }} icon={cibRedux} />
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>Redux</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
