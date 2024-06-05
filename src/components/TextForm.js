import React, { useState } from 'react';
export default function TextForm({ heading, mode, showAlert, btnColor }) {
    const [text, setText] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    var pascal
    //Firsr case
    const handleFirstClick = () => {
        if (text.length > 0) {
            const transformed = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            setText(transformed);
            showAlert("Converted to First case",'Success');
        }
    };
    // Uppercase
    const handleUpClick = () => {
        setText(text.toUpperCase());
        showAlert("Converted to Uppercase",'Success');
    };

    // Lowercase
    const handleLoClick = () => {
        setText(text.toLowerCase());
        showAlert("Converted to Lowercase",'Success');
    };

    // PascalCase
    const handlePascalClick = () => {
        pascal = text.split(' ')
        pascal = pascal.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        pascal = pascal.join('');
        setText(pascal)
        pascal = ''
        showAlert("Converted to Pascal Case",'Success');
    };

    // CamellCase
    const handleCamellClick = () => {
        pascal = text.split(' ')
        pascal = pascal.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        pascal = pascal.join('');
        pascal = pascal.charAt(0).toLowerCase() + pascal.slice(1);
        setText(pascal)
        pascal = ''
        showAlert("Converted to Camell Case",'Success');
    }
    //Extra Spaces
    const handleExtraSpacelClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        showAlert("Removed Extra spaces",'Success');
    }
    // Clear textbox
    const handleClearClick = () => {
        setText('');
        showAlert("Textbox Cleared",'Success');
    };

    // Copy text
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        showAlert("Text Copied",'Success');
    };

    // Handle checkbox change
    const handleChange = () => {
        setIsChecked(!isChecked);        
    };

    // Calculate word count
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

    // Calculate character count
    const charCount = isChecked ? text.length : text.replace(/\s/g, '').length;

    return (
        <>
            <div className='container'   style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                <h1>{heading}</h1>
                <div className="mb-2">
                    <textarea
                        style={{
                            color: mode === 'dark' ? 'white' : 'black',
                            backgroundColor: mode === 'dark' ? '#808080b3' : 'white'
                        }}
                        className={`form-control text-${mode==='dark'? 'light':'dark'}`}
                        placeholder='Enter text here...'
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        id="myBox"
                        rows="10"
                    />
                    <label className="cl-checkbox my-2">
                        <input
                            checked={isChecked}
                            type="checkbox"
                            onChange={handleChange}
                        />
                        <span>Count Space, Enter and Tab as Characters</span>
                    </label>
                </div>
                <button type="button" className={`btn btn-${mode==='dark'? btnColor:'primary'} my-1 mx-1`} onClick={handleFirstClick}>Convert to Firstcase</button>
                <button type="button" className={`btn btn-${mode==='dark'? btnColor:'primary'} my-1 mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className={`btn btn-${mode==='dark'? btnColor:'primary'} my-1 mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="button" className={`btn btn-${mode==='dark'? btnColor:'primary'} my-1 mx-1`} onClick={handlePascalClick}>Convert to PascalCase</button>
                <button type="button" className={`btn btn-${mode==='dark'? btnColor:'primary'} my-1 mx-1`} onClick={handleCamellClick}>Convert to CamelCase</button>
                <button type="button" className={`btn btn-${mode==='dark'? btnColor:'primary'} my-1 mx-1`} onClick={handleExtraSpacelClick}>Remove Extra Spaces</button>
                <button type="button" className={`btn btn-${mode==='dark'? btnColor:'primary'} my-1 mx-1`} onClick={handleClearClick}>Clear text</button>
                <button type="button" className={`btn btn-${mode==='dark'? btnColor:'primary'} my-1 mx-1`} onClick={handleCopyClick}>Copy text</button>
            </div>
            <div className="container my-2" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='my-2'>Your text summary</h2>
                <p><b>{wordCount} Words and {charCount} Characters</b></p>
                <p><b>Slow read ("100 WPM") takes {wordCount / 100} min to read</b></p>
                <p><b>Normal read ("125 WPM") takes {wordCount / 125} min to read</b></p>
            </div>
        </>
    );
}
