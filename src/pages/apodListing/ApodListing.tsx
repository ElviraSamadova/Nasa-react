import axios, { AxiosResponse } from "axios";
import "./ApodListing.scss";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showApod } from "../../redux/actions/apodAction";
import Apod from "../../components/apod/Apod";
// MUI IMPORTS
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { IStore } from "../../redux/reducers";

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT;
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;

const ApodListing = () => {
  const [value, setValue] = useState<any>(new Date());
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  const apods = useSelector<IStore>((state) => state.allApods.apods);
  const dispatch = useDispatch();

  const newValue = formatDate(value);

  function formatDate(value: any) {
    return value.toISOString().split("T")[0];
  }

  const fetchApods = async () => {
    axios
      .get(`${nasaEndpoint}${nasaApiKey}&date=${newValue}`)
      .then((response: AxiosResponse) => {
        dispatch(showApod(response.data));
      });
  };

  useEffect(() => {
    fetchApods();
  }, [apods]);

  const maxDate = useMemo(() => {
    return new Date();
  }, []);

  return (
    <div className="main-content container text-center">
      <div className="dp">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            maxDate={maxDate}
            minDate={new Date("June 21, 1995")}
            label="Date desktop"
            inputFormat="yyyy-MM-dd"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <Apod />
    </div>
  );
};

export default ApodListing;
