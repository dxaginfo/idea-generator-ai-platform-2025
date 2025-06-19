import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import calendarService from '../../services/calendarService';

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  category: string;
  start: string;
  end: string;
  allDay: boolean;
}

interface CalendarState {
  events: CalendarEvent[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CalendarState = {
  events: [],
  isLoading: false,
  error: null,
};

export const getCalendarEvents = createAsyncThunk('calendar/getEvents', async (_, { rejectWithValue }) => {
  try {
    const response = await calendarService.getEvents();
    return response;
  } catch (error) {
    return rejectWithValue('Failed to fetch calendar events');
  }
});

export const addCalendarEvent = createAsyncThunk(
  'calendar/addEvent',
  async (event: Omit<CalendarEvent, 'id'>, { rejectWithValue }) => {
    try {
      const response = await calendarService.addEvent(event);
      return response;
    } catch (error) {
      return rejectWithValue('Failed to add calendar event');
    }
  }
);

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Get calendar events
    builder.addCase(getCalendarEvents.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCalendarEvents.fulfilled, (state, action: PayloadAction<CalendarEvent[]>) => {
      state.isLoading = false;
      state.events = action.payload;
    });
    builder.addCase(getCalendarEvents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Add calendar event
    builder.addCase(addCalendarEvent.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addCalendarEvent.fulfilled, (state, action: PayloadAction<CalendarEvent>) => {
      state.isLoading = false;
      state.events.push(action.payload);
    });
    builder.addCase(addCalendarEvent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { clearError } = calendarSlice.actions;
export default calendarSlice.reducer;