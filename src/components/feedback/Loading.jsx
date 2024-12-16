const Loading = ({ status, error, children }) => {
  if (status == "pending") {
    return <h1>جاري التحميل ...</h1>;
  }
  if (status == "failed") {
    return <h1>{error}</h1>;
  }
  return <>{children}</>;
};

export default Loading;
