import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShareIcon from '@mui/icons-material/Share';
import { Idea } from '../store/slices/ideaSlice';

interface IdeaCardProps {
  idea: Idea;
  onSave: (idea: Idea) => void;
  onSchedule: (idea: Idea) => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onSave, onSchedule }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {idea.title}
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Chip 
            label={idea.category} 
            size="small" 
            color="primary" 
            variant="outlined" 
            sx={{ mr: 1 }} 
          />
        </Box>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          {idea.description}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
          {idea.keywords.map((keyword, index) => (
            <Chip key={index} label={keyword} size="small" variant="outlined" />
          ))}
        </Box>
      </CardContent>
      
      <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Box>
          <Tooltip title="Schedule content">
            <IconButton onClick={() => onSchedule(idea)} aria-label="schedule">
              <CalendarTodayIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share idea">
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </Box>
        
        <Box>
          <Button 
            variant="outlined" 
            startIcon={idea.isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            onClick={() => onSave(idea)}
          >
            {idea.isSaved ? 'Saved' : 'Save'}
          </Button>
          <Button variant="contained" sx={{ ml: 1 }}>
            Expand
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default IdeaCard;