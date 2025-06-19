const { Configuration, OpenAIApi } = require('openai');

// OpenAI API Configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Generate content ideas using OpenAI API
 * @param {string} topic - The main topic to generate ideas about
 * @param {string} category - The content category (Blog, Video, Social Media, etc.)
 * @param {number} count - Number of ideas to generate
 * @returns {Promise<Array>} - Array of generated content ideas
 */
exports.generateContentIdeas = async (topic, category, count = 5) => {
  try {
    // This is a placeholder for the actual OpenAI API call
    // In a real app, we would make a call to the OpenAI API
    
    const prompt = `Generate ${count} ${category || 'content'} ideas about ${topic}. Each idea should include a catchy title, a brief description, and 3-5 relevant keywords.`;
    
    // Simulate API response
    const ideas = Array.from({ length: count }, (_, i) => ({
      title: `${topic} ${category || ''} Idea ${i + 1}`,
      description: `This is a generated content idea about ${topic} for ${category || 'any'} format.`,
      category: category || 'General',
      keywords: ['content', topic.toLowerCase(), category?.toLowerCase() || 'general', `keyword-${i + 1}`],
    }));
    
    return ideas;
  } catch (error) {
    console.error('Error generating content ideas:', error);
    throw new Error('Failed to generate content ideas');
  }
};