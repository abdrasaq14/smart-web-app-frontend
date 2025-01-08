import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { AiOutlineMore } from "react-icons/ai";
import CardLayout from "../Cards/CardLayout";
import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
interface TableRowData {
  [key: string]: string | number;
}

interface TableTemplateProps {
  data: TableRowData[];
  columns: string[];
  columnToStyle?: number;
  columnCustomStyle?: React.CSSProperties;
  extraAction?: boolean;
  makeRowClickable?: boolean;
  onActionClick?: (row: TableRowData) => void;
  extraActionIcon?: React.ReactNode;
}

const TableTemplate: React.FC<TableTemplateProps> = ({
  data,
  columns,
  columnToStyle,
  columnCustomStyle,
  makeRowClickable,
  extraAction = false,
    onActionClick,
  extraActionIcon = <AiOutlineMore />,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="dynamic table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={column}
                  sx={{
                    fontWeight: "bold",
                    borderRadius:
                      index === 0
                        ? "8px 0 0 8px"
                        : index === columns.length - 1 && !extraAction
                        ? "0 8px 8px 0"
                        : "0",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  {column}
                </TableCell>
              ))}
              {extraAction && (
                <TableCell
                  align="right"
                  sx={{
                    fontWeight: "bold",
                    borderRadius: "0 8px 8px 0",
                    backgroundColor: "#f5f5f5",
                  }}
                ></TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: "none" } }}
              >
                {columns.map((column, colIndex) => {
                  console.log(
                    "columnToStyleRRRR",
                    columnToStyle,
                    colIndex,
                    columnToStyle === colIndex
                  );
                  return (
                    <TableCell
                      sx={
                        columnToStyle === colIndex
                          ? columnCustomStyle
                          : undefined
                      }
                      key={column}
                    >
                      {makeRowClickable ? (
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            makeRowClickable &&
                            navigate(`${row.id}`)
                          }
                        >
                          {row[column]}
                        </span>
                      ) : (
                        row[column]
                      )}
                    </TableCell>
                  );
                })}
                {extraAction && (
                  <TableCell align="right">
                    <IconButton
                      onClick={() => onActionClick && onActionClick(row)}
                    >
                      {extraActionIcon}
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15]}
        component="div"
        count={data.length}
        rowsPerPage={7}
        page={1}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
      />
    </>
  );
};

export default TableTemplate;
