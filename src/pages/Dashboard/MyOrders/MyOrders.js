import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { Container } from '@mui/material';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    //filter
    const myOrders = orders.filter(order => order.email == user.email);

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete your booking?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('The booking is deleted successfully!');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders)
                    }
                });
        }
        else {
            alert("not working")
        }
    }


    return (
        <div>
            <Container>
                <h2>Total Orders: {myOrders.length}</h2>
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="Appointments table">
                        <TableHead>
                            <TableRow>
                                <TableCell>OrderID</TableCell>
                                <TableCell align="right">No of items</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {myOrders.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row._id}
                                    </TableCell>
                                    <TableCell align="center">{row.totat_packet}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>
                                    <TableCell align="right"><button style={{ backgroundColor: "#d10d0d", color: "white", padding: "8px 18px", borderRadius: "6px" }} onClick={() => handleDeleteBooking(row._id)}>Cancel</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        </div>
    );
};

export default MyOrders;