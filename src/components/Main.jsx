const Main = (props) => {
  const { data } = props;

  return (
    <div className="imgContainer">
      <img
        src={data.hdurl || "mars.png"}
        alt={data.title || "bg-img"}
        className="bgImage"
      />
    </div>
  );
};

export default Main;
