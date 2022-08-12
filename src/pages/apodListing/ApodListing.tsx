// import Apod from "../apodComponent/ApodComponent"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./ApodListing.scss";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { showApod } from "../../redux/actions/apodAction";
import { useEffect, useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;

const ApodListing = () => {
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  const newValue = formatDate(value);

  function formatDate(value: any) {
    return value.toISOString().split("T")[0];
  }

  const apods = useSelector((state: any) => state.allApods.apods);
  const { url, date, title, explanation } = apods;
  const dispatch = useDispatch();

  const fetchApods = async () => {
    const response: any = await axios
      .get(`${nasaEndpoint}${nasaApiKey}&date=${newValue}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(showApod(response.data));
  };

  useEffect(() => {
    fetchApods();
  }, [apods]);

  return (
    <div className=" container text-center">
      <div className="dp">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            maxDate={new Date()}
            minDate={new Date("June 21, 1995")}
            label="Date desktop"
            inputFormat="yyyy-MM-dd"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div className=" mt-4">
        <div className="apodCard row justify-content-between align-items-center">
          <div className="image col-12 col-md-5">
            <img
              className="n-img"
              width="100%"
              height="570px"
              src={url}
              alt={title}
            />
          </div>
          <div className="content col-12 col-md-6">
            <h2 style={{ color: "white" }} className="title mt-4">
              {title}
            </h2>
            <h4 className="date-nasa">{date}</h4>
            <p className="desc-nasa">{explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApodListing;
