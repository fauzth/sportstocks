"use client";

import { useState } from "react";
import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";

const mockTransactions = [
  {
    id: "STK-IN-001",
    date: "2026-10-16",
    type: "Masuk",
    product: "Running Shoes Pro",
    category: "Sepatu",
    sku: "SPX-001-42-BLK",
    size: "42",
    color: "Hitam",
    quantity: 20,
    source: "Supplier SportX",
    status: "Selesai",
  },
  {
    id: "STK-OUT-001",
    date: "2026-10-16",
    type: "Keluar",
    product: "Running Shoes Pro",
    category: "Sepatu",
    sku: "SPX-001-42-BLK",
    size: "42",
    color: "Hitam",
    quantity: 2,
    source: "Penjualan",
    status: "Selesai",
  },
  {
    id: "STK-IN-002",
    date: "2026-10-15",
    type: "Masuk",
    product: "Training Shirt",
    category: "Baju",
    sku: "AF-TS-M-NVY",
    size: "M",
    color: "Navy",
    quantity: 15,
    source: "Supplier ActiveFit",
    status: "Selesai",
  },
  {
    id: "STK-OUT-002",
    date: "2026-10-15",
    type: "Keluar",
    product: "Sports Socks",
    category: "Kaos Kaki",
    sku: "SPX-SK-OS-WHT",
    size: "All Size",
    color: "Putih",
    quantity: 5,
    source: "Penjualan",
    status: "Selesai",
  },
  {
    id: "STK-IN-003",
    date: "2026-10-14",
    type: "Masuk",
    product: "Futsal Shoes",
    category: "Sepatu",
    sku: "ADS-FS-40-BLK",
    size: "40",
    color: "Hitam",
    quantity: 10,
    source: "Supplier Adidas",
    status: "Selesai",
  },
  {
    id: "STK-OUT-003",
    date: "2026-10-14",
    type: "Keluar",
    product: "Training Shorts",
    category: "Celana",
    sku: "AF-TSH-M-BLK",
    size: "M",
    color: "Hitam",
    quantity: 3,
    source: "Penjualan",
    status: "Selesai",
  },
  {
    id: "STK-IN-004",
    date: "2026-10-13",
    type: "Masuk",
    product: "Basket Shoes",
    category: "Sepatu",
    sku: "NKE-BS-43-WHT",
    size: "43",
    color: "Putih",
    quantity: 8,
    source: "Supplier Nike",
    status: "Selesai",
  },
  {
    id: "STK-OUT-004",
    date: "2026-10-13",
    type: "Keluar",
    product: "Training Shirt",
    category: "Baju",
    sku: "AF-TS-L-NVY",
    size: "L",
    color: "Navy",
    quantity: 4,
    source: "Penjualan",
    status: "Selesai",
  },
  {
    id: "STK-IN-005",
    date: "2026-10-12",
    type: "Masuk",
    product: "Sports Socks",
    category: "Kaos Kaki",
    sku: "SPX-SK-OS-BLK",
    size: "All Size",
    color: "Hitam",
    quantity: 30,
    source: "Supplier SportX",
    status: "Selesai",
  },
];

const columns = [
  { id: "id", label: "ID Transaksi", minWidth: 130 },
  { id: "date", label: "Tanggal", minWidth: 110 },
  { id: "type", label: "Jenis", minWidth: 100 },
  { id: "product", label: "Produk", minWidth: 170 },
  { id: "category", label: "Kategori", minWidth: 110 },
  { id: "sku", label: "SKU", minWidth: 160 },
  { id: "size", label: "Ukuran", minWidth: 90 },
  { id: "color", label: "Warna", minWidth: 100 },
  { id: "quantity", label: "Jumlah", minWidth: 90 },
  { id: "source", label: "Sumber / Tujuan", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 110 },
];

export default function TableTransaksi({ transactions = mockTransactions }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState("date");
  const [order, setOrder] = useState("desc");

  const sortedTransactions = [...transactions].sort((a, b) => {
    const aValue = a[orderBy] ?? "";
    const bValue = b[orderBy] ?? "";

    if (typeof aValue === "number" && typeof bValue === "number") {
      return order === "asc" ? aValue - bValue : bValue - aValue;
    }

    const comparison = String(aValue).localeCompare(String(bValue), "id", {
      numeric: true,
    });

    return order === "asc" ? comparison : -comparison;
  });

  const lastPage =
    rowsPerPage === -1
      ? 0
      : Math.max(0, Math.ceil(sortedTransactions.length / rowsPerPage) - 1);

  const safePage = Math.min(page, lastPage);

  const visibleRows =
    rowsPerPage === -1
      ? sortedTransactions
      : sortedTransactions.slice(
          safePage * rowsPerPage,
          safePage * rowsPerPage + rowsPerPage,
        );

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === "asc";

    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
    setPage(0);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(`${date}T00:00:00`));
  };

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: 3,
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
      <TableContainer sx={{ maxHeight: 600, overflowX: "auto" }}>
        <Table
          stickyHeader
          size="small"
          sx={{
            minWidth: 0,
            "& .MuiTableCell-root": {
              borderColor: "var(--color-border-light)",
              color: "var(--color-text-main-light)",
              ".dark &": {
                borderColor: "var(--color-border-dark)",
                color: "var(--color-text-main-dark)",
              },
            },
            "& th, & td": {
              fontSize: "11px",
              whiteSpace: "nowrap",
            },
          }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    minWidth: column.minWidth,
                    backgroundColor: "var(--color-app-light) !important",
                    color: "var(--color-text-sub-light) !important",
                    ".dark &": {
                      backgroundColor: "var(--color-app-dark) !important",
                      color: "var(--color-text-sub-dark) !important",
                    },
                    fontWeight: 700,
                    fontSize: 13,
                    whiteSpace: "nowrap",
                  }}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleSort(column.id)}
                    sx={{
                      color: "inherit !important",
                      "& .MuiTableSortLabel-icon": {
                        color: "inherit !important",
                      },
                    }}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.length > 0 ? (
              visibleRows.map((transaction) => (
                <TableRow
                  hover
                  key={transaction.id}
                  sx={{
                    "&:last-child td": { borderBottom: 0 },
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.05) !important",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {transaction.id}
                  </TableCell>

                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    {formatDate(transaction.date)}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={transaction.type}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        borderRadius: 1.5,
                        backgroundColor:
                          transaction.type === "Masuk"
                            ? "rgba(16, 185, 129, 0.15)"
                            : "rgba(244, 63, 94, 0.15)",
                        color:
                          transaction.type === "Masuk" ? "#10b981" : "#f43f5e",
                        border: "1px solid",
                        borderColor:
                          transaction.type === "Masuk"
                            ? "rgba(16, 185, 129, 0.3)"
                            : "rgba(244, 63, 94, 0.3)",
                      }}
                    />
                  </TableCell>

                  <TableCell sx={{ fontWeight: 600 }}>
                    {transaction.product}
                  </TableCell>

                  <TableCell>{transaction.category}</TableCell>

                  <TableCell sx={{ whiteSpace: "nowrap" }}>
                    {transaction.sku}
                  </TableCell>

                  <TableCell>{transaction.size}</TableCell>

                  <TableCell>{transaction.color}</TableCell>

                  <TableCell>
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        color:
                          transaction.type === "Masuk" ? "#10b981" : "#f43f5e",
                      }}
                    >
                      {transaction.type === "Masuk" ? "+" : "-"}
                      {transaction.quantity}
                    </Box>
                  </TableCell>

                  <TableCell>{transaction.source}</TableCell>

                  <TableCell>
                    <Chip
                      label={transaction.status}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        borderRadius: 1.5,
                        backgroundColor: "rgba(148, 163, 184, 0.15)",
                        color: "var(--color-text-sub-light)",
                        ".dark &": {
                          color: "var(--color-text-sub-dark)",
                        },
                        border: "1px solid",
                        borderColor: "var(--color-border-light)",
                        ".dark &": {
                          borderColor: "var(--color-border-dark)",
                        },
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  align="center"
                  sx={{
                    py: 6,
                    color: "var(--color-text-sub-light)",
                    ".dark &": {
                      color: "var(--color-text-sub-dark)",
                    },
                  }}
                >
                  Belum ada transaksi barang masuk atau keluar.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={sortedTransactions.length}
        page={safePage}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, { label: "Semua", value: -1 }]}
        labelRowsPerPage="Baris per halaman:"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} dari ${count !== -1 ? count : `lebih dari ${to}`}`
        }
        sx={{
          color: "inherit",
          borderTop: "1px solid",
          borderColor: "var(--color-border-light)",
          ".dark &": {
            borderColor: "var(--color-border-dark)",
          },
          ".MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows, .MuiTablePagination-selectIcon, .MuiTablePagination-actions button":
            {
              color: "inherit",
              fontSize: 13,
            },
        }}
      />
    </Paper>
  );
}
