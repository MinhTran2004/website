import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import ItemInputSearch from '../ItemInputSearch';
import { Button, Menu, MenuItem } from '@mui/material';

interface Data {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  dataHeaderRow: any[],
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell> */}
        {props.dataHeaderRow.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
// fillter name
interface BasicMenu {
  setFillterName: (text: string) => void
}

const BasicMenu: React.FC<BasicMenu> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (text: string) => {
    props.setFillterName(text)
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FilterListIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose('_ID')}>ID</MenuItem>
        <MenuItem onClick={() => handleClose('Name')}>Tên khách hàng</MenuItem>
        <MenuItem onClick={() => handleClose('Phone')}>Số điện thoại</MenuItem>
      </Menu>
    </div>
  );
}

interface EnhancedTableToolbarProps {
  title: string,
  filterName: string,
  setFilterName: (text: string) => void;
}
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        { display: 'flex', justifyContent: 'space-between' }
      ]}
    >
      <Typography
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {props.title}
      </Typography>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Typography>{props.filterName ? "Tìm kiếm theo: " + props.filterName : ''}</Typography>
        <BasicMenu setFillterName={props.setFilterName} />
      </Box>
    </Toolbar>
  );
}

interface Props {
  title: string,
  dataTableHeader: any[],
  viewmodel: any,
  setSteps: (step: number) => void,
  setDataDetailOrder: (data: any) => void,
}

// o day nay

const TableOrderCancel: React.FC<Props> = (props) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('calories');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [nameSearch, setNameSearch] = React.useState("");
  const [fillterName, setFillterName] = React.useState('');

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = props.viewmodel.dataOrder.map((n: any) => n._id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (data: any) => {
    props.setSteps(1);
    props.setDataDetailOrder(data);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.viewmodel.dataOrder.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...props.viewmodel.dataOrder]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, props.dataTableHeader],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          title={props.title}
          setFilterName={setFillterName}
          filterName={fillterName}
        />
        <ItemInputSearch
          value={nameSearch}
          setValue={setNameSearch}
          placeholder="Nhập tên sản phẩm"
          fillter={fillterName}
          onPressSearch={props.viewmodel.getAllOrderByFilter}

        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.viewmodel.dataOrder.length}
              dataHeaderRow={props.dataTableHeader}
            />
            <TableBody>
              {visibleRows.map((row) => {
                const isItemSelected = selected.includes(row._id);
                const labelId = `enhanced-table-checkbox-${row._id}`;
                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(row)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      align='center'
                    >
                      {row._id}
                    </TableCell>
                    <TableCell align="left">{row.address.name}</TableCell>
                    <TableCell align="left">{row.address.detailAddress}</TableCell>
                    <TableCell align="left">{row.address.phone}</TableCell>
                    <TableCell align="left">{row.createAt}</TableCell>
                    <TableCell align="left">{row.totalCost}</TableCell>
                    <TableCell align="left">{row.paymentMethod}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="left" >
                      <Button variant="contained"
                        onClick={() => {
                          handleClick(row)
                        }}
                      >Xem chi tiết</Button>
                    </TableCell>
                  </TableRow>
                );
              })}

              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.viewmodel.dataOrder.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default TableOrderCancel;