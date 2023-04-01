import Login from "../../components/Auth/Login";
import logo from "../../imgs/logo.png";
import crownImg from "../../imgs/crown.png";
import heartImg from "../../imgs/heart.png";
import bellImg from "../../imgs/bell.png";
import careerImg from "../../imgs/career.png";
import facebook from "../../imgs/facebook.png";
import youtube from "../../imgs/youtube.png";
import insta from "../../imgs/insta.png";
import tt from "../../imgs/tt.png";
import twitter from "../../imgs/twitter.png";
import headerPic from "../../imgs/header-pic.png";
import securityPic from "../../imgs/securiti.png";
import careerPic from "../../imgs/career-pic.png";
import premiumPic from "../../imgs/premium-pic.png";
import aboutImg from "../../imgs/about.png";
import Sidebar from "../../components/Sidebar/Sidebar";
import Premium from "../../components/Premium/Premium";

const LoginPage = () => {
  return (
    <>
      {/* <Sidebar /> */}
      {/*--------------  SIDEBAR  -----------------  */}
      <div>
        <img className="auth-logo" src={logo} alt="" />
      </div>
      <div className="auth__sidebar">
        <div className="auth__sidebar-links">
          <div className="sidebar__links-img">
            <img src={heartImg} alt="" />
          </div>
          <p>О нас</p>
        </div>
        <div className="auth__sidebar-links">
          <div className="sidebar__links-img">
            <img src={crownImg} alt="" />
          </div>
          <p>Премиум</p>
        </div>
        <div className="auth__sidebar-links">
          <div className="sidebar__links-img">
            <img src={bellImg} alt="" />
          </div>
          <p>
            Ваша <br /> безопасность
          </p>
        </div>
        <div className="auth__sidebar-links">
          <div className="sidebar__links-img">
            <img src={careerImg} alt="" />
          </div>
          <p>Карьера</p>
        </div>
      </div>
      {/*--------------  СONTENT  -----------------  */}
      <div className="auth-container">
        <section className="auth__header">
          <Login />
          <div className="auth__header-img">
            <img src={headerPic} alt="" />
          </div>
        </section>

        <section className="about">
          <div className="about-text">
            <h2 className="main-title">Почему мы?</h2>
            <p className="main-desc">
              Наш сайт является одной из самых популярных платформ на
              сегодняшнем рынке знакомств. Мы стараемся создать наиболее удобные
              условия для наших юзеров и предоставить все удобства для
              приватного знакомства людей на нашей платформе. Войдите и узнайте
              все на своем примере! Если у вас еще нет аккаунта, вы можете
              пройти легкую регистрацию и начать знакомиться с людьми!
            </p>
          </div>
          <div className="about-img">
            <img src={aboutImg} alt="about img" />
          </div>
        </section>

        <section className="premium">
          <div className="premium-img">
            <img src={premiumPic} alt="" />
          </div>
          <div className="premium-text">
            <h2 className="main-title">Станьте премиум юзером</h2>
            <p className="main-desc">
              Если вы станете нашим Премиум юзеров, у вас будет ранний доступ ко
              всем новым фичам нашего сайта, а так же доступ к дополнительным
              функциям для лучшего поиска своего партнера.{" "}
            </p>
            <button className="main-btn">Стать Премиум юзером</button>
          </div>
        </section>

        <section className="security">
          <div className="security-text">
            <h2 className="main-title">Ваша безопасность</h2>
            <p className="main-desc">
              Ваша безопасное общение является для нас приоритетным качеством,
              поэтому наша команда по защите данных юзеров постоянно обновляет
              наши системы безопасности и идет в ногу со временем. Все данные
              медиа и переписок остаются в полной приватности под паролем самих
              юзеров, и ни у кого нет доступа к этим данным.
            </p>
            <button className="main-btn">Начать регистрацию</button>
          </div>
          <div className="security-img">
            <img src={securityPic} alt="" />
          </div>
        </section>

        <section className="career">
          <div className="career-img">
            <img src={careerPic} alt="" />
          </div>
          <div className="career-text">
            <h2 className="main-title">Карьера</h2>
            <p className="main-desc">
              Наша команда постоянно пополняется новыми сотрудниками! Мы
              стараемся создать лучшие условия для наших сотрудников, чтобы все
              могли работать в удобстве и не отвлекаться на какие либо
              неудобства. Если у нас появляется вакансия, мы сразу же постим ее
              на нашем сайте. Не упустите свою возможность присоединиться к
              нашей команде!
            </p>
            <button className="main-btn">Посмотреть вакансии</button>
          </div>
        </section>
        {/*--------------  FOOTER  -----------------  */}
        <footer className="footer">
          <div className="footer__col">
            <p className="footer__col-item">Социальные сети</p>
            <ul className="footer__col-icons">
              <li className="footer__col-icon">
                <img src={facebook} alt="" />
              </li>
              <li className="footer__col-icon">
                <img src={youtube} alt="" />
              </li>
              <li className="footer__col-icon">
                <img src={insta} alt="" />
              </li>
              <li className="footer__col-icon">
                <img src={tt} alt="" />
              </li>
              <li className="footer__col-icon">
                <img src={twitter} alt="" />
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <ul>
              <li className="footer__col-item">Часто задаваемые вопросы</li>
              <li className="footer__col-item">Контакты</li>
              <li className="footer__col-item">Для прессы</li>
            </ul>
          </div>
          <div className="footer__col">
            <ul>
              <li className="footer__col-item">
                <strong>Юредическая информация</strong>
              </li>
              <li className="footer__col-item">Конфиденциальность</li>
              <li className="footer__col-item">Условия пользователя</li>
            </ul>
          </div>
        </footer>
        <Premium />
      </div>
    </>
  );
};

export default LoginPage;
