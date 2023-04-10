import PropTypes from "prop-types";
import * as React from "react";
import { Suspense, memo, useEffect } from "react";
import WaitSpinner from "../waitSpinner/waitSpinner";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * Component with app header in responsive design
 */
const TableData = ({ headers, data, cellLinkName, onChange }) => {
  const styles = {
    linkCell: {
      color: "#1F497D",
      textDecoration: "none",
      cursor: "pointer",

      "&:hover": {
        color: "#FFFFFF",
        backgroundColor: "#1F497D",
      },
    },
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <Suspense fallback={<WaitSpinner />}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Data table">
            <TableHead>
              <TableRow>
                {headers.map((head) => {
                  return (
                    <TableCell key={head} sx={{ fontWeight: "bold" }}>
                      {head}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <StyledTableRow
                  key={row}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Object.entries(row).map(([key, value]) =>
                    key === cellLinkName ? (
                      <TableCell
                        key={key}
                        onClick={() => onChange(row.id)}
                        style={styles.linkCell}
                      >
                        {value}
                      </TableCell>
                    ) : (
                      key !== "id" && <TableCell key={key}>{value}</TableCell>
                    ),
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Suspense>
    </>
  );
};

TableData.propTypes = {
  cellLinkName: PropTypes.any,
  data: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
  headers: PropTypes.shape({
    map: PropTypes.func,
  }),
  onChange: PropTypes.func,
};
export default memo(TableData);
