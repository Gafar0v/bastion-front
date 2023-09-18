import { Button, Card, CardContent, Paper, ThemeProvider, Typography } from "@mui/material";
import { defaultTheme } from "../../theme";

const Candidat = ({ id, firstname, lastname, description }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Paper
        sx={{
          border: "2px solid #DC3545",
          padding: '16px',
          margin: "20px",
        }}
      >
        <Typography variant="h5">
          {`Кандидат №${id}`} - {`${description}`}
        </Typography>
        <Typography variant="h4" color="#9C9C9C">
          ФИО: {`${firstname} ${lastname}`}
        </Typography>


      </Paper>
    </ThemeProvider>
  )
}

export default Candidat;