import { createSlice } from "@reduxjs/toolkit";

const storedJSON = localStorage.getItem("userResumeInfo");
const storedData = storedJSON ? JSON.parse(storedJSON) : {};

const initialState =
  {
    phone_number: storedData.phone_number ||  "+7",
    military_duty: storedData.military_duty || "",
    metro_station: storedData.metro_station || "",
    good_qualities: storedData.good_qualities || "",
    bad_qualities: storedData.bad_qualities ||  "",
    bad_habits: storedData.bad_habits ||  "",
    reasons_for_working: storedData.reasons_for_working ||  "",
    good_job_qualities:  storedData.good_job_qualities || "",
    resume_src: storedData.resume_src || "",
    email: "",
    education: storedData.education ||  "",
    busyness: storedData.busyness ||  "",
    demoTest: false,
    finalTest: false,
  };


export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      if (state.hasOwnProperty(field)) {
        state[field] = value;
      }
    },

    setDemoTest: (state) => {
      state.demoTest = true
    },

    setFinalTest: (state) => {
      state.finalTest = true
    }
  }
});

export const { setField } = resumeSlice.actions;
export default resumeSlice.reducer;