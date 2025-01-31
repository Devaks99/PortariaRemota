import "../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      {/* Logo Residence */}
      <div className="logo-residence">
        <img src="./src/img/logo.png" alt="logo residence" />
      </div>

      {/* Conteúdo do Banner */}
      <div className="banner-content">
        <img src="./src/img/familiaimage.png" alt="Sanpedro Residence" />
      </div>
    </div>
  );
};

export default Banner;