import React from 'react'

export default function About({mode}) {
  return (
    <div className="container my-5" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
      <h2 className="text-center mb-4">About <b><i>TextUtils</i></b></h2>
      <p><b>
        <b><i>TextUtils</i></b> is a powerful web application designed for efficient text manipulation. Whether you're a professional writer, a student, or someone who works with text regularly, TextUtils provides a suite of features to enhance your productivity.
      </b></p>
      <div className="text-features" >
        <ul className="list-group">
          <li className="list-group-item" style={{
                            color: mode === 'dark' ? 'white' : 'black',
                            backgroundColor:"transparent"
                        }}><b>First case to Uppercase:</b> Transform the first character of your text to uppercase.</li>
          <li className="list-group-item" style={{
                            color: mode === 'dark' ? 'white' : 'black',
                            backgroundColor:"transparent"
                        }}><b>Lowercase:</b> Convert all characters in your text to lowercase.</li>
          <li className="list-group-item" style={{
                            color: mode === 'dark' ? 'white' : 'black',
                            backgroundColor:"transparent"
                        }}><b>PascalCase:</b> Combine words by capitalizing all words and removing spaces.</li>
          <li className="list-group-item" style={{
                            color: mode === 'dark' ? 'white' : 'black',
                            backgroundColor:"transparent"
                        }}><b>CamelCase:</b> Combine words by capitalizing the first letter of each word except the first one.</li>
          <li className="list-group-item" style={{
                            color: mode === 'dark' ? 'white' : 'black',
                            backgroundColor:"transparent"
                        }}><b>Remove Extra Spaces:</b> Clean up your text by removing unnecessary spaces.</li>
          <li className="list-group-item" style={{
                            color: mode === 'dark' ? 'white' : 'black',
                            backgroundColor:"transparent"
                        }}><b>Copy Text:</b> Easily copy text to your clipboard with one click.</li>
          <li className="list-group-item" style={{
                            color: mode === 'dark' ? 'white' : 'black',
                            backgroundColor:"transparent"
                        }}><b>Calculate Word Count:</b> Get the total count of words in your text.</li>
          <li className="list-group-item" style={{
                            color: mode === 'dark' ? 'white' : 'black',
                            backgroundColor:"transparent"
                        }}><b>Calculate Character Count:</b> Measure the number of characters, including or excluding spaces, tabs, and newline characters.</li>
        </ul>
      </div>
    </div>
  )
}
