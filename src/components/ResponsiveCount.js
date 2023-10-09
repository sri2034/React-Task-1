import React, { useState } from 'react';

function ResponsiveCount() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  return (
    <div>
      <textarea
        rows="7"
        cols="50"
        placeholder="Enter Text to Count Words"
        value={text}
        onChange={handleInputChange}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default ResponsiveCount;