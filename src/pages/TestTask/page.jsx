import { Box} from "@mui/material";
import ClientHeader from "../../shared/client-header/client-header";
import TestTask from "../../components/test-task";

const TestTaskPage = () => {
  return (
    <>
      <Box>
        <ClientHeader title="Отправка задания"/>
      </Box>

      <TestTask />
    </>
  );
};

export default TestTaskPage;
