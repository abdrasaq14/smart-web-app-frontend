import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const rows = [
    {
        time: 'Sun · 14 April, 04:25 AM',
        alert: 'ABU-235LK',
        site: 'Oshodi',
        zone: 'Oshodi',
        district: 'District A',
        activity: 'Overloading',
        status: 'Pending'
    },
    {
        time: 'Sun · 14 April, 04:25 AM',
        alert: 'ABU-235LK',
        site: 'Agure',
        zone: 'Agure',
        district: 'District B',
        activity: 'Downtime',
        status: 'Resolved'
    },
    {
        time: 'Sun · 14 April, 04:25 AM',
        alert: 'ABU-235LK',
        site: 'Terise',
        zone: 'Terise',
        district: 'District C',
        activity: 'Surge',
        status: 'Pending'
    },
    {
        time: 'Sun · 14 April, 04:25 AM',
        alert: 'ABU-235LK',
        site: 'Valley',
        zone: 'Valley',
        district: 'District D',
        activity: 'High temp.',
        status: 'Resolved'
    },
];

export const AlertHistoryTable = () => {
    return (<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Date/Time</TableCell>
                    <TableCell align="right">Alert ID</TableCell>
                    <TableCell align="right">Site</TableCell>
                    <TableCell align="right">Zone</TableCell>
                    <TableCell align="right">District</TableCell>
                    <TableCell align="right">Activity</TableCell>
                    <TableCell align="right">Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.site}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.time}
                        </TableCell>
                        <TableCell align="right">{row.alert}</TableCell>
                        <TableCell align="right">{row.site}</TableCell>
                        <TableCell align="right">{row.zone}</TableCell>
                        <TableCell align="right">{row.district}</TableCell>
                        <TableCell align="right">{row.activity}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>);
}