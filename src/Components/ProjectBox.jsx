import React from 'react';

const ProjectBox = ({ projectPhoto, projectName, projectGithub, projectDemo }) => {
  return (
    <article
      className="projectBox"
      style={{
        display: 'flex',
        flexDirection: 'column',           // مهم: عمودي (صورة فوق، نص تحت)
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(1,138,123,0.14)',
        borderRadius: 14,
        overflow: 'hidden',
        padding: 16,
        width: '100%',
        maxWidth: 520,
        boxSizing: 'border-box',
        transition: 'transform .28s ease, box-shadow .28s ease',
        margin: '0 auto',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(1,138,123,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* IMAGE - fixed ratio, centered */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
        <img
          src={projectPhoto}
          alt={projectName}
          style={{
            width: '100%',
            maxWidth: 360,
            height: 'auto',
            objectFit: 'cover',
            borderRadius: 8,
            border: '1px solid rgba(1,138,123,0.08)',
          }}
        />
      </div>

      {/* TITLE */}
      <h3 style={{
        alignSelf: 'flex-start',
        margin: '6px 0 10px 6px',
        color: '#018a7b',
        fontSize: '1.25rem',
        letterSpacing: 0.2,
      }}>
        {projectName}
      </h3>

      {/* DESCRIPTION */}
      <p style={{
        alignSelf: 'flex-start',
        margin: '0 6px 16px 6px',
        color: '#dfeee6',
        lineHeight: 1.5,
        fontSize: '0.95rem',
      }}>
        A responsive meal discovery web app. Search by name, category, area, or ingredients. Built with TheMealDB API.
      </p>

      {/* BUTTONS */}
      <div style={{
        width: '100%',
        display: 'flex',
        gap: 12,
        justifyContent: 'flex-start',   // يبدأ من اليسار داخل الكارد
        marginTop: 6,
      }}>
        {projectGithub && (
          <a
            href={projectGithub}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
            }}
          >
            <button style={{
              background: '#018a7b',
              color: '#fff',
              border: 'none',
              padding: '8px 14px',
              borderRadius: 10,
              cursor: 'pointer',
              fontWeight: 600,
              boxShadow: '0 6px 18px rgba(1,138,123,0.12)'
            }}
            onMouseEnter={(e)=> e.currentTarget.style.background = '#00b09a'}
            onMouseLeave={(e)=> e.currentTarget.style.background = '#018a7b'}
            >
              GitHub
            </button>
          </a>
        )}

        {projectDemo && (
          <a
            href={projectDemo}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button style={{
              background: 'transparent',
              color: '#018a7b',
              border: '1.5px solid rgba(1,138,123,0.22)',
              padding: '8px 14px',
              borderRadius: 10,
              cursor: 'pointer',
              fontWeight: 600,
            }}
            onMouseEnter={(e)=>{
              e.currentTarget.style.background = '#018a7b';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e)=>{
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#018a7b';
            }}
            >
              Demo
            </button>
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectBox;
