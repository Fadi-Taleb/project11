import React, { useState } from 'react';

function Paragraph() {
  const [style, setStyle] = useState({
    color: 'red',
    fontSize: '14px'
  });

  return (
    <p
  style={style}
  onMouseEnter={() => setStyle({ color: 'blue', fontSize: '20px' })}
  onMouseLeave={() => setStyle({ color: 'red', fontSize: '14px' })}
>
  je suis un paragraphe de test en react
</p>

  );
}

export default Paragraph;
