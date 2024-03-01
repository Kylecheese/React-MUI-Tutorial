import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
        <Table aria-label='simple table' stickyHeader> </Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell align='center'>Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                tableData.map(row => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                     <TableCell> {row.id}</TableCell>
                     <TableCell> {row.first_name}</TableCell>
                     <TableCell> {row.last_name}</TableCell>
                     <TableCell> {row.email}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </TableContainer>
  )
}
const tableData = [{
    "id": 1,
    "first_name": "Duky",
    "last_name": "Queyos",
    "email": "dqueyos0@paypal.com",
    "gender": "Male",
    "ip_address": "121.19.222.79"
  }, {
    "id": 2,
    "first_name": "Thain",
    "last_name": "Ridewood",
    "email": "tridewood1@163.com",
    "gender": "Genderfluid",
    "ip_address": "5.102.201.85"
  }, {
    "id": 3,
    "first_name": "Anthia",
    "last_name": "Duffus",
    "email": "aduffus2@zdnet.com",
    "gender": "Female",
    "ip_address": "60.25.181.183"
  }, {
    "id": 4,
    "first_name": "Erie",
    "last_name": "Sherebrook",
    "email": "esherebrook3@ca.gov",
    "gender": "Male",
    "ip_address": "66.38.37.12"
  }, {
    "id": 5,
    "first_name": "Lanette",
    "last_name": "Stoffersen",
    "email": "lstoffersen4@bloomberg.com",
    "gender": "Female",
    "ip_address": "29.244.41.67"
  }, {
    "id": 6,
    "first_name": "Kaitlynn",
    "last_name": "Angrick",
    "email": "kangrick5@stanford.edu",
    "gender": "Female",
    "ip_address": "176.94.193.110"
  }, {
    "id": 7,
    "first_name": "Elden",
    "last_name": "Lumox",
    "email": "elumox6@dedecms.com",
    "gender": "Male",
    "ip_address": "222.13.239.223"
  }, {
    "id": 8,
    "first_name": "Dorothee",
    "last_name": "Marsland",
    "email": "dmarsland7@washington.edu",
    "gender": "Female",
    "ip_address": "111.164.151.133"
  }, {
    "id": 9,
    "first_name": "Davey",
    "last_name": "Cud",
    "email": "dcud8@latimes.com",
    "gender": "Male",
    "ip_address": "240.89.39.52"
  }, {
    "id": 10,
    "first_name": "Hubey",
    "last_name": "Slate",
    "email": "hslate9@independent.co.uk",
    "gender": "Male",
    "ip_address": "12.91.96.84"
  }]

