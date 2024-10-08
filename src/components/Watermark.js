function Watermark({ mouseX, mouseY }) {
  return (
    <span
      style={{
        backgroundPosition: `${mouseX}px ${mouseY}px`,
      }}
      className="watermark"
    ></span>
  );
}

export default Watermark;
