const Youtube = ({ src }) => (
  <iframe
    className="rounded"
    width="560"
    height="315"
    src={src}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

export default Youtube;
