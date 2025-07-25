import React from 'react';
import useClientSide from '../../hooks/useClientSide';

const ClientSideDemo = () => {
    const isClient = useClientSide();
    
    return (
        <div>
        <h1>Client-Side Rendering Demo</h1>
        {isClient ? (
            <>
                <p>This content is rendered on the client side.</p>
                <button onClick={() => alert('Hello there!')}>Click Me!</button>
                <p>Current time: {new Date().toLocaleTimeString()}</p>
                <p>Window width: {window.innerWidth}px</p>
                <p>Window height: {window.innerHeight}px</p>
                <p>Document title: {document.title}</p>
                <p>Document URL: {document.URL}</p>
                <p>Document referrer: {document.referrer}</p>
                <p>Document character set: {document.characterSet}</p>
                <p>Document last modified: {document.lastModified}</p>
                <p>Document ready state: {document.readyState}</p>
                <p>Document visibility state: {document.visibilityState}</p>
                <p>Document base URI: {document.baseURI}</p>
                <p>Document content type: {document.contentType}</p>
                <p>Document design mode: {document.designMode}</p>
            </>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
};

export default ClientSideDemo;
