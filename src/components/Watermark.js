function Watermark({ mouseX, mouseY, docX, docY }) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = (docX / width) * 10 + 1;
  const y = (docY / height) * 1;
  console.log(x, y);

  return (
    <span
      style={{
        backgroundPosition: `${mouseX}px ${mouseY}px`,
        filter: `blur(${y}px) contrast(${x})`,
      }}
      className="watermark"
    ></span>
  );
}

export default Watermark;
