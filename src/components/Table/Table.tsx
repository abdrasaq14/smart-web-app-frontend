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
  columnToStyle?: number; // Index of the column to style
  columnCustomStyle?: React.CSSProperties; // Custom style for the whole column
  extraAction?: boolean;
  onActionClick?: (row: TableRowData) => void;
  actionType?: "openLink" | "showPopUp";
  extraActionPopUpContent?: React.ReactNode;
  makeRowClickable?: boolean;
  rowLink?: string | ((row: TableRowData) => void);
  extraActionIcon?: React.ReactNode;
  styleCell?: (value: string | number, column: string) => React.CSSProperties; // Custom style for individual cells
}

const TableTemplate: React.FC<TableTemplateProps> = ({
  data,
  columns,
  columnToStyle,
  columnCustomStyle,
  makeRowClickable,
  rowLink,
  extraAction = false,
  extraActionPopUpContent,
  onActionClick,
  actionType,
  extraActionIcon = <AiOutlineMore />,
  styleCell,
}) => {
  const navigate = useNavigate();
  const [visiblePopUpIndex, setVisiblePopUpIndex] = React.useState<
    number | null
  >(null);
  const popUpRef = React.useRef<HTMLDivElement | null>(null);

  // Close popup on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popUpRef.current &&
        !popUpRef.current.contains(event.target as Node)
      ) {
        setVisiblePopUpIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <TableContainer component={Paper} className="overflow-y-visible">
        <Table aria-label="dynamic table" className="overflow-y-visible">
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
          <TableBody className="overflow-y-visible">
            {data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="overflow-y-visible"
                sx={{ "&:last-child td, &:last-child th": { border: "none" } }}
              >
                {columns.map((column, colIndex) => {
                  const cellStyle =
                    columnToStyle === colIndex ? columnCustomStyle : undefined;

                  const conditionalStyle = styleCell
                    ? styleCell(row[column], column)
                    : undefined;

                  return (
                    <TableCell
                      key={column}
                      sx={{
                        ...cellStyle, // Apply whole-column styling if applicable
                        ...conditionalStyle, // Apply conditional cell styling if applicable
                      }}
                    >
                      {makeRowClickable ? (
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            makeRowClickable && typeof rowLink === "function"
                              ? rowLink(row)
                              : navigate(rowLink as string)
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
                  <TableCell align="right" className="relative">
                    <IconButton
                      onClick={() =>
                        actionType === "showPopUp"
                          ? setVisiblePopUpIndex(
                              visiblePopUpIndex === rowIndex ? null : rowIndex
                            )
                          : onActionClick && onActionClick(row)
                      }
                    >
                      {extraActionIcon}
                    </IconButton>
                    {visiblePopUpIndex === rowIndex && (
                      <div
                        ref={popUpRef}
                        className="absolute right-[5px] z-10 bottom-[-70px] flex text-sm items-center justify-center gap-4 p-2 flex-col min-w-[8rem] min-h-[5rem] bg-white rounded-lg shadow-md border border-primary-border"
                      >
                        {extraActionPopUpContent}
                      </div>
                    )}
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
