import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';


function DashboardPage() {
  return (
    <div>
     <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Metric 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Metric 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Metric 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Metric 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Metric 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description for Metric 3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}


export default DashboardPage;