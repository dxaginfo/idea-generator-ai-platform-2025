import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <LightbulbIcon sx={{ fontSize: 40 }} color="primary" />,
      title: 'AI-Powered Idea Generation',
      description:
        'Generate fresh, engaging content ideas for blogs, videos, and social media in seconds using our advanced AI technology.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} color="primary" />,
      title: 'Trend Analysis',
      description:
        'Stay ahead of the curve with our trend analysis feature that identifies popular topics in your niche.',
    },
    {
      icon: <CalendarMonthIcon sx={{ fontSize: 40 }} color="primary" />,
      title: 'Content Calendar',
      description:
        'Plan and organize your content strategy with our intuitive content calendar and scheduling tools.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            Never Run Out of Content Ideas Again
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 4 }}>
            Generate endless creative content ideas for blogs, videos, and social media with AI-powered assistance
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              size="large"
              color="secondary"
              sx={{ mr: 2, px: 4, py: 1.5 }}
            >
              Get Started Free
            </Button>
            <Button
              component={RouterLink}
              to="/generator"
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5, color: 'white', borderColor: 'white' }}
            >
              Try Demo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Key Features
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign="center" paragraph sx={{ mb: 6 }}>
          Discover how our platform can transform your content creation process
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4 }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How it Works */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" paragraph sx={{ mb: 6 }}>
            Generate content ideas in three simple steps
          </Typography>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  1. Enter Your Topic
                </Typography>
                <Typography variant="body1" paragraph>
                  Start by entering your niche, industry, or specific topic you want to create content about.
                </Typography>

                <Typography variant="h4" gutterBottom>
                  2. Generate Ideas
                </Typography>
                <Typography variant="body1" paragraph>
                  Our AI analyzes trending topics, keywords, and content formats to generate tailored content ideas.
                </Typography>

                <Typography variant="h4" gutterBottom>
                  3. Save & Schedule
                </Typography>
                <Typography variant="body1" paragraph>
                  Save your favorite ideas and add them to your content calendar for easy planning and execution.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card raised sx={{ borderRadius: 4, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://source.unsplash.com/random?content"
                  alt="Content creation process"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Transform Your Content Strategy?
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4 }}>
            Join thousands of content creators who are streamlining their content creation process
          </Typography>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            size="large"
            color="secondary"
            sx={{ px: 4, py: 1.5 }}
          >
            Start Creating Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;