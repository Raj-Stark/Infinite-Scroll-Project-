import { Box, Container, Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import CardBox from "./Components/CardBox";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${page}/posts`
    );

    const resultData = await res.json();

    setData((prev) => [...prev, ...resultData]);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;

    const innerHeight = window.innerHeight;

    const scrollTop = document.documentElement.scrollTop;

    try {
      if (scrollTop + innerHeight + 1 >= scrollHeight) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      <Container maxWidth="xl" sx={{ minHeight: "100vh" }} disableGutters>
        <Box
          sx={{
            paddingTop: "5rem",
            width: "100%",

            background: "#df1d1d",
          }}
        >
          <Grid container rowGap={4}>
            {data.map((item) => {
              return (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardBox {...item}></CardBox>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
