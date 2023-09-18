import { useGetAllCandidatsQuery } from "../../services/candidatsApi";
import { Box, Typography } from "@mui/material";
import Candidat from "../../components/candidat";
import Header from "../../shared/header/header";
import ClientHeader from "../../shared/client-header/client-header";

const CandidatsPage = () => {
  const { data } = useGetAllCandidatsQuery();
  console.log(data);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-beetween"
        alignItems="center"
      >
        <ClientHeader title="Кандидаты"/>
      </Box>

      <Box>
        {data && data.map(item => {
          return (
            <Candidat
              id={item.id}
              firstname={item.firstname}
              lastname={item.lastname}
              description="На рассмотрении"
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default CandidatsPage;