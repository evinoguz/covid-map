import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const covidUrl = "https://covid-19-statistics.p.rapidapi.com/reports";

const headers = {
  "x-rapidapi-key": "ad6bb313ddmsh062704acbce640fp18e651jsnd2e76e1075ed",
  "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
};

const getData = createAsyncThunk("covid/getData", async ({ code, query }) => {
  const params = { iso: code, q: query };
  const req1 = axios.get(covidUrl, { params, headers });
  // ülke verileri
  const req2 = axios.get(
    code ? `https://restcountries.com/v3.1/alpha/${code}` : `https://restcountries.com/v3.1/name/${query}`
  );

  // İki api isteği aynı anda at
  const responses = await Promise.all([req1, req2]);
  const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
  };
  delete covid.cities;
  delete covid.region;
  return { covid, country: responses[1].data[0] };
});

export default getData;
