import { useState, useEffect, useRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs  } from 'react-pdf/dist/esm/entry.webpack';
import '../Modal.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Flipbook(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const width = containerWidth / 2;
                const height = (width * 210) / 297;
                setDimensions({ width, height });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const renderPage = useCallback(
            (pageNumber) => (
                <div key={pageNumber}>
                    <Page width={dimensions.width} pageNumber={pageNumber + 1} /> {/* Page number corrected */}
                </div>
            ),
            [dimensions.width]
        );
    
    function pagesList() {
        const pages = [];
        const range = 2; // Number of pages to pre-render before and after the current page
        for (let i = 0; i < numPages; i++) {
            if (i === pageNumber || Math.abs(i - pageNumber) <= range) {
                pages.push(renderPage(i));
            } else {
                pages.push(
                    <div key={i} className="page-placeholder" style={{ width: dimensions.width, height: dimensions.height }}>
                        <div className="loading-spinner"></div>
                    </div>
                );
            }
        }
        return pages;
    }

    return (
        <div ref={containerRef} className="flipbook-container">
            <Document
                file="./portfolio.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                className='modal-90w'
            >        
            <HTMLFlipBook 
                width={dimensions.width} 
                height={dimensions.height}
                onFlip={(e) => setPageNumber(e.data)}
                showCover={false}>
                {pagesList()}
            </HTMLFlipBook>
            </Document>
        </div>

    );
}
export default Flipbook;