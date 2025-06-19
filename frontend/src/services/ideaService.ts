import axios from 'axios';
import { API_URL } from '../config';
import { Idea } from '../store/slices/ideaSlice';

const ideaService = {
  generateIdeas: async (topic: string, category: string, count: number) => {
    try {
      // For demo purposes, we'll simulate API response
      // In a real app, you would make an API request
      // const response = await axios.get(
      //   `${API_URL}/ideas/generate?topic=${topic}&category=${category}&count=${count}`
      // );
      // return response.data;
      
      // Mock response with simulated API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const mockIdeas: Idea[] = Array.from({ length: count }, (_, i) => ({
        id: `idea-${i}`,
        title: `${topic} ${category} Idea ${i + 1}`,
        description: `This is a generated content idea about ${topic} for ${category} format.`,
        category,
        keywords: ['content', topic.toLowerCase(), category.toLowerCase(), `keyword-${i + 1}`],
        createdAt: new Date().toISOString(),
        isSaved: false,
      }));
      
      return mockIdeas;
    } catch (error) {
      throw error;
    }
  },

  getSavedIdeas: async () => {
    try {
      // For demo purposes, we'll simulate API response
      // const response = await axios.get(`${API_URL}/ideas/saved`);
      // return response.data;
      
      // Mock response
      const mockSavedIdeas: Idea[] = [
        {
          id: 'saved-1',
          title: 'How to Boost Your Social Media Engagement',
          description: 'A comprehensive guide to increasing engagement on various social media platforms.',
          category: 'Blog Post',
          keywords: ['social media', 'engagement', 'marketing', 'content strategy'],
          createdAt: new Date().toISOString(),
          isSaved: true,
        },
        {
          id: 'saved-2',
          title: '10 Tips for Creating Viral Video Content',
          description: 'Learn the secrets behind videos that get millions of views and shares.',
          category: 'Video',
          keywords: ['viral', 'video content', 'youtube', 'tiktok'],
          createdAt: new Date().toISOString(),
          isSaved: true,
        },
      ];
      
      return mockSavedIdeas;
    } catch (error) {
      throw error;
    }
  },

  saveIdea: async (idea: Omit<Idea, 'id' | 'createdAt' | 'isSaved'>) => {
    try {
      // For demo purposes, we'll simulate API response
      // const response = await axios.post(`${API_URL}/ideas/save`, idea);
      // return response.data;
      
      // Mock response
      return {
        id: `saved-${Date.now()}`,
        ...idea,
        createdAt: new Date().toISOString(),
        isSaved: true,
      };
    } catch (error) {
      throw error;
    }
  },
};

export default ideaService;