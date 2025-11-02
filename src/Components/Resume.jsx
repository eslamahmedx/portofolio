import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setwid] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setwid(window.innerWidth);
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <div className='ResumePage' style={{ background: '#0d0d0d', padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Document file={pdf} className="resumeview">
          <Page pageNumber={1} scale={wid < 700 ? ( wid > 475 ? 0.7 : 0.5 ) : 1}/>
      </Document>

      <a href={pdf} target='_blank' rel="noreferrer" download="Eslam-Ahmed-Resume.pdf" style={{ marginTop: 18 }}>
        <button className='downloadCV' type='button' style={{ background: '#00e676', border: 'none', padding: '10px 16px', borderRadius: 8, cursor: 'pointer' }}>
          <h3 style={{ margin: 0, color: '#00110a' }}><BsDownload/>&nbsp; Download CV</h3>
        </button>
      </a>

    </div>
  )
}

export default Resume;
