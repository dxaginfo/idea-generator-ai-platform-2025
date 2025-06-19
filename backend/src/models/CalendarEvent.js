const mongoose = require('mongoose');

const CalendarEventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    category: {
      type: String,
      required: [true, 'Please add a category'],
      enum: ['Blog Post', 'Video', 'Social Media', 'Email', 'Podcast', 'General'],
    },
    start: {
      type: Date,
      required: [true, 'Please add a start date'],
    },
    end: {
      type: Date,
      required: [true, 'Please add an end date'],
    },
    allDay: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    idea: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Idea',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CalendarEvent', CalendarEventSchema);