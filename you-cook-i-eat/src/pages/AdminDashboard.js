import React from 'react';
import { Typography, Box, Grid, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useSpring, animated } from 'react-spring';

// Sample data
const data = [
  { name: 'Jan', Sales: 400, Orders: 240 },
  { name: 'Feb', Sales: 300, Orders: 139 },
  { name: 'Mar', Sales: 200, Orders: 980 },
  { name: 'Apr', Sales: 278, Orders: 390 },
  { name: 'May', Sales: 189, Orders: 480 },
];

const signUps = [
  { name: 'Jan', Users: 120 },
  { name: 'Feb', Users: 230 },
  { name: 'Mar', Users: 300 },
  { name: 'Apr', Users: 280 },
  { name: 'May', Users: 320 },
];

const topItems = [
  { name: "Burgers", value: 240 },
  { name: "Pizza", value: 300 },
  { name: "Sushi", value: 200 },
  { name: "Pasta", value: 180 },
  { name: "Salads", value: 278 },
];

const users = [
  { id: 1, name: 'Eric Tan', status: 'Active' },
  { id: 2, name: 'Kevin Yang', status: 'Inactive' },
  { id: 3, name: 'Binal Patel', status: 'Active' },
  { id: 4, name: 'Tiffany Tran', status: 'Active' },
  { id: 5, name: 'Chris El-Kehdy', status: 'Inactive' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#85144b'];

function AdminDashboard() {
  const theme = useTheme();
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { duration: 500 }
  });

  return (
    <Box sx={{ flexGrow: 1, my: 4}} >
      <animated.div style={fadeInUp}>
        <Typography variant="h4" gutterBottom color="primary">
          Admin Dashboard
        </Typography>
      </animated.div>
      <Grid container spacing={3} style={{ display: 'flex', alignItems: 'stretch' }}>
        {/* Dynamic sections with animations */}
        {[
          { title: 'Sales & Orders Overview', Component: SalesOrdersChart },
          { title: 'User Sign-ups Trends', Component: UserSignUpsChart },
          { title: 'Top Selling Items', Component: TopSellingItemsChart },
          { title: 'User Management', Component: UserManagementTable }
        ].map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <animated.div style={{ ...fadeInUp, delay: 100 * index }}>
              <Paper sx={{ p: 2, backgroundColor: '#ffffff', height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  {section.title}
                </Typography>
                <section.Component />
              </Paper>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function SalesOrdersChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Sales" fill="#8884d8" animationDuration={1500} />
        <Bar dataKey="Orders" fill="#82ca9d" animationDuration={1500} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function UserSignUpsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={signUps}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Users" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}

function TopSellingItemsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={topItems} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
          {topItems.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

function UserManagementTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">{user.name}</TableCell>
              <TableCell align="right">{user.status}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary">Edit</Button>
                <Button variant="contained" color="secondary" sx={{ ml: 1 }}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminDashboard;