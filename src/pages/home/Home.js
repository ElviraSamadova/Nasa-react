import "./Home.scss";
import React, { useState, useEffect } from "react";
import HttpClient from "../../HttpClient";
import { useTranslation } from "react-i18next";
// import DatePicker from "react-multi-date-picker";
// import transition from "react-element-popper/animations/transition";

const Home = () => {
  const [apod, setApod] = useState(Object);
  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      setApod(apodData.data);
    });
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <div className="info">
        <h3>{t("title")}</h3>
        <h5 className=" mt-2">
          {apod.title} - <i>{apod.date}</i>
        </h5>
      </div>
      {apod && (
        <div>
          <div className="nasa-img">
            {" "}
            <img
              style={{ objectFit: "cover", marginTop: "20px" }}
              src={apod.url}
              alt="APOD"
              width="100%"
              height="400px"
            />
          </div>
          <p className="nasa-desc">{apod.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Home;

// import React, { useEffect } from "react";
// import CalendarContainer from "../../components/Calendar/CalendarContainer";
// import ModalImageContainer from "../../components/ModalImage/ModalImageContainer";
// import Content from "../../components/Content/Content";
// import "react-calendar/dist/Calendar.css";
// import "../../App.scss";
// import "../../3d.css";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { setImage } from "../../redux/image-reducer";
// import { setModalImage, setModalImages } from "../../redux/modal-reducer";
// import { setImagesArray } from "../../redux/month-image-reducer";
// import { formatDate } from "../../HttpClient";

// const App = props => {
//   const {
//     image,
//     setImage,
//     modalImages,
//     setModalImage,
//     setImagesArray,
//   } = props;

//   const getDate = () => {
//     return !localStorage.getItem("date")
//       ? new Date()
//       : new Date(localStorage.getItem("date"));
//   };

//   useEffect(() => {
//     setImage(getDate());
//     setImagesArray(getDate());
//   }, []);

//   let onChange = value => {
//     const localDate = formatDate(value);
//     const currentDate = formatDate(new Date());

//     localDate === currentDate
//       ? localStorage.removeItem("date")
//       : localStorage.setItem("date", value);

//     setImage(value);
//   };

//   const onActiveStartDateChange = ({ activeStartDate, value, view }) => {
//     setImagesArray(activeStartDate);
//   };

//   return (
//     <div>
//       <div
//         style={{
//           position:'absolute',
//           marginTop:'10vh',
//           top:280,
//           width: "100%",
//           height: 'auto',
//           zIndex: -5,
//           boxShadow: 'rgb(0 0 0 / 35%) 0px 0px 200px 133px',
//         }}
//       />
//       <div className="content d-flex justify-content-between">
//         <CalendarContainer className="w-100" onChange={onChange} onActiveStartDateChange={onActiveStartDateChange} value={getDate()}/>

//         <Content  img={image} setModal={setModalImage} />
//       </div>
//       <ModalImageContainer images={modalImages} setModal={setModalImage} />
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   image: state.imageReducer,
//   modalImages: state.modalReducer,
//   monthImages: state.monthImageReducer.imagesArray,
//   isLoadMonthImages: state.monthImageReducer.isLoad,
// });

// const AppContainer = compose(
//   connect(mapStateToProps, {
//     setImage,
//     setModalImage,
//     setModalImages,
//     setImagesArray,
//   })
// )(App);

// export default AppContainer;
