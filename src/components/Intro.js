import "../styles/intro.css";
const Intro = () => {
  return (
    <div className="title__container" data-aos="zoom-in" data-aos-offset="50" data-aos-duration="400">
      <h1 className="title">
        Hey, I'm <b>Isaac Chung</b>. <span className="wave">👋</span>
      </h1>
      <br />
      <h1 className="title">I'm an aspiring software engineer, passionate about combining tech and communities.</h1>
      <br />
      <a href="mailto:isaackcchung8@gmail.com" className="intro__link">
        Let's Chat
      </a>
    </div>
  );
};

export default Intro;
