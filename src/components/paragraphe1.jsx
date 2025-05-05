import { useState } from "react";

function Paragraphe1() {
  const [paragraph, setParagraph] = useState({
    color: "black",
    fontSize: "16px"
  });

  const handleMouseEnter = () => {
    setParagraph({
      color: "red",
      fontSize: "20px"
    });
  };

  const handleMouseLeave = () => {
    setParagraph({
      color: "black",
      fontSize: "16px"
    });
  };
return(
    <div>
        <p style={paragraph}
        onMouseEnter={c}
        onMouseLeave={quitter}>je change ma couloure et mon taille</p>
    </div>
)
}
export default Paragraphe1