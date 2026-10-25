"use client";

import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";
import { visuallyHidden } from "@mui/utils";

// Format helper rupiah
const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
};

// Data dummy disesuaikan persis dengan stok/barang
const rows = [
  {
    id: 1,
    code: "PRD-001",
    name: "Sepatu Lari Nike Air Zoom",
    category: "Sepatu",
    price: 1500000,
    stock: 25,
    status: "Tersedia",
  },
  {
    id: 2,
    code: "PRD-002",
    name: "Bola Sepak Adidas Pro",
    category: "Peralatan",
    price: 450000,
    stock: 8,
    status: "Stok Menipis",
  },
  {
    id: 3,
    code: "PRD-003",
    name: "Raket Badminton Yonex",
    category: "Peralatan",
    price: 850000,
    stock: 0,
    status: "Habis",
  },
  {
    id: 4,
    code: "PRD-004",
    name: "Jersey Specs Indonesia",
    category: "Pakaian",
    price: 250000,
    stock: 50,
    status: "Tersedia",
  },
  {
    id: 5,
    code: "PRD-005",
    name: "Matras Yoga Kettler",
    category: "Aksesoris",
    price: 320000,
    stock: 12,
    status: "Tersedia",
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  { id: "code", numeric: false, disablePadding: true, label: "Kode" },
  { id: "name", numeric: false, disablePadding: false, label: "Nama Barang" },
  { id: "category", numeric: false, disablePadding: false, label: "Kategori" },
  { id: "price", numeric: true, disablePadding: false, label: "Harga" },
  { id: "stock", numeric: true, disablePadding: false, label: "Stok" },
  { id: "status", numeric: false, disablePadding: false, label: "Status" },
  { id: "action", numeric: false, disablePadding: false, label: "Aksi" },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className="border-b border-border-light dark:border-border-dark">
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            slotProps={{
              input: { "aria-label": "pilih semua barang" },
            }}
            sx={{
              color: "inherit",
              "&.Mui-checked": { color: "var(--color-brand-primary)" },
              "&.MuiCheckbox-indeterminate": {
                color: "var(--color-brand-primary)",
              },
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            className="text-text-sub-light dark:text-text-sub-dark font-semibold border-b border-border-light dark:border-border-dark"
          >
            {headCell.id !== "action" ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                sx={{
                  color: "inherit !important",
                  "& .MuiTableSortLabel-icon": { color: "inherit !important" },
                }}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      className="border-b border-border-light dark:border-border-dark"
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          variant="subtitle1"
          component="div"
          className="text-text-main-light dark:text-text-main-dark font-medium"
          sx={{ flex: "1 1 100%" }}
        >
          {numSelected} dipilih
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%", fontWeight: "bold" }}
          variant="h6"
          id="tableTitle"
          component="div"
        ></Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Hapus">
          <IconButton className="text-text-main-light dark:text-text-main-dark">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter data">
          <IconButton className="text-text-sub-light dark:text-text-sub-dark">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ProductTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage],
  );

  // Status Badge Component dengan Dark Mode Support
  const renderStatusBadge = (status) => {
    let bg =
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300/50 dark:border-emerald-800/50";
    if (status === "Stok Menipis")
      bg =
        "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300/50 dark:border-amber-800/50";
    if (status === "Habis")
      bg =
        "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300/50 dark:border-rose-800/50";

    return (
      <span
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${bg}`}
      >
        {status}
      </span>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          mb: 2,
          borderRadius: "0.75rem",
          overflow: "hidden",
          border: "1px solid",
          backgroundColor: "var(--color-card-light)",
          borderColor: "var(--color-border-light)",
          color: "var(--color-text-main-light)",
          ".dark &": {
            backgroundColor: "var(--color-card-dark)",
            borderColor: "var(--color-border-dark)",
            color: "var(--color-text-main-dark)",
          },
          transition: "background-color 0.2s, border-color 0.2s",
        }}
      >
        <TableContainer>
          <Table
            sx={{
              minWidth: 750,
              // Mengubah warna semua sel dan border di dalam tabel secara otomatis
              "& .MuiTableCell-root": {
                borderColor: "var(--color-border-light)",
                color: "var(--color-text-main-light)",
                ".dark &": {
                  borderColor: "var(--color-border-dark)",
                  color: "var(--color-text-main-dark)",
                },
              },
            }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.05) !important",
                      },
                    }}
                  >
                    <TableCell
                      padding="checkbox"
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        slotProps={{
                          input: { "aria-labelledby": labelId },
                        }}
                        sx={{
                          color: "inherit",
                          "&.Mui-checked": {
                            color: "var(--color-brand-primary)",
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      {row.code}
                    </TableCell>
                    <TableCell onClick={(event) => handleClick(event, row.id)}>
                      {row.name}
                    </TableCell>
                    <TableCell onClick={(event) => handleClick(event, row.id)}>
                      {row.category}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      {formatRupiah(row.price)}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      {row.stock}
                    </TableCell>
                    <TableCell onClick={(event) => handleClick(event, row.id)}>
                      {renderStatusBadge(row.status)}
                    </TableCell>
                    <TableCell align="left">
                      <Tooltip title="Edit">
                        <IconButton
                          size="small"
                          sx={{ color: "inherit" }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Hapus">
                        <IconButton
                          size="small"
                          color="error"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Baris per halaman:"
          sx={{
            color: "inherit",
            borderTop: "1px solid",
            borderColor: "var(--color-border-light)",
            ".dark &": {
              borderColor: "var(--color-border-dark)",
            },
            ".MuiTablePagination-selectIcon, .MuiTablePagination-actions button":
              {
                color: "inherit",
              },
          }}
        />
      </Paper>
    </Box>
  );
}
