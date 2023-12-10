import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuestionId: 0,
  answers: [],
}

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setNextQuestion: (state) => {
      state.currentQuestionId += 1
    },

    setAnswer: (state, action) => {
      state.answers.push({
        "question_id": 1,
        "answer_id": action.payload
      })
    },

    removeAnswer: (state, action) => {
      const answerIdToRemove = action.payload;
      state.answers = state.answers.filter(answer => answer.answer_id !== answerIdToRemove);
    }
  }
})

export const { setNextQuestion, setAnswer, removeAnswer } = quizSlice.actions;
export default quizSlice.reducer;