import QuizCard from "../../components/quiz";
import ClientHeader from "../../shared/client-header/client-header";
import { Box } from "@mui/material";

const QuizPage = () => {
  return (
    <>
      <Box>
        <ClientHeader title={`Демо-тест`} />
      </Box>
      <QuizCard />
    </>
  )
}

export default QuizPage;