import '../App.css';
import Flipbook from './Flipbook';
import React, { useState, useEffect, useRef } from 'react';

function FlipPage() {
    const [showPopup, setShowPopup] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        console.log(containerRef.current.clientWidth)
        if(containerRef.current.clientWidth < 900) {
            setShowPopup(true);
        } else {
        setShowPopup(false)
        }
        const timer = setTimeout(() => {
        setShowPopup(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handler = () => {
        const url = 'https://drive.google.com/file/d/1zVDdazZOHGOPmWDpKen_0gm4E7pxydEu/view'
        var win = window.open(url, '_blank');
        console.log('here')
        win.focus();
    }
    return (
        <div ref={containerRef} className="App">
            <header className="App-header">
                <div className='pdfbutton' onClick={handler}>View this booklet as pdf</div>
                <Flipbook/>
                {showPopup && <div className="popup show">View this page on big screen for better experience.</div>}
            </header>
        </div>
    );
}

export default FlipPage;
