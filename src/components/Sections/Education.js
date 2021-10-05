import { Box, Grid, GridItem } from "@chakra-ui/layout";
import React from "react";
import GoBack from "../GoBack";
import Title from "../Title";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";

const Education = () => {
  const { english } = useContext(StoreContext);

  return (
    <Box>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <GoBack />
        </GridItem>

        <GridItem colSpan={1} colStart={[3]} colEnd={[4]}>
          <Title title={english ? "Education" : "Educación"} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Education;
