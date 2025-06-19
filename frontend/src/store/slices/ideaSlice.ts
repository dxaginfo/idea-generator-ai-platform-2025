import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import ideaService from '../../services/ideaService';

export interface Idea {
  id: string;
  title: string;
  description: string;
  category: string;
  keywords: string[];
  createdAt: string;
  isSaved: boolean;
}

interface IdeaState {
  ideas: Idea[];
  savedIdeas: Idea[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IdeaState = {
  ideas: [],
  savedIdeas: [],
  isLoading: false,
  error: null,
};

export const generateIdeas = createAsyncThunk(
  'ideas/generate',
  async ({ topic, category, count }: { topic: string; category: string; count: number }, { rejectWithValue }) => {
    try {
      const response = await ideaService.generateIdeas(topic, category, count);
      return response;
    } catch (error) {
      return rejectWithValue('Failed to generate ideas');
    }
  }
);

export const getSavedIdeas = createAsyncThunk('ideas/getSaved', async (_, { rejectWithValue }) => {
  try {
    const response = await ideaService.getSavedIdeas();
    return response;
  } catch (error) {
    return rejectWithValue('Failed to fetch saved ideas');
  }
});

export const saveIdea = createAsyncThunk(
  'ideas/save',
  async (idea: Omit<Idea, 'id' | 'createdAt' | 'isSaved'>, { rejectWithValue }) => {
    try {
      const response = await ideaService.saveIdea(idea);
      return response;
    } catch (error) {
      return rejectWithValue('Failed to save idea');
    }
  }
);

const ideaSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    clearIdeas(state) {
      state.ideas = [];
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Generate ideas
    builder.addCase(generateIdeas.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(generateIdeas.fulfilled, (state, action: PayloadAction<Idea[]>) => {
      state.isLoading = false;
      state.ideas = action.payload;
    });
    builder.addCase(generateIdeas.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Get saved ideas
    builder.addCase(getSavedIdeas.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSavedIdeas.fulfilled, (state, action: PayloadAction<Idea[]>) => {
      state.isLoading = false;
      state.savedIdeas = action.payload;
    });
    builder.addCase(getSavedIdeas.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Save idea
    builder.addCase(saveIdea.fulfilled, (state, action: PayloadAction<Idea>) => {
      state.savedIdeas.push(action.payload);
      state.ideas = state.ideas.map((idea) =>
        idea.title === action.payload.title ? { ...idea, isSaved: true } : idea
      );
    });
  },
});

export const { clearIdeas, clearError } = ideaSlice.actions;
export default ideaSlice.reducer;