// @desc    Get calendar events
// @route   GET /api/calendar
// @access  Private
exports.getEvents = async (req, res) => {
  try {
    // In a real app, we would fetch events from the database
    // using req.user.id to get only the events created by the current user
    
    // For demo purposes, we'll return mock events
    const events = [
      {
        id: 'event-1',
        title: 'Write Blog Post: 10 Content Ideas for Summer',
        description: 'Create a listicle of summer content ideas for small businesses',
        category: 'Blog Post',
        start: '2025-06-25T10:00:00Z',
        end: '2025-06-25T12:00:00Z',
        allDay: false,
      },
      {
        id: 'event-2',
        title: 'Record Video: Social Media Tips',
        description: 'Record and edit a short video about social media best practices',
        category: 'Video',
        start: '2025-06-27T14:00:00Z',
        end: '2025-06-27T16:00:00Z',
        allDay: false,
      },
      {
        id: 'event-3',
        title: 'Schedule Instagram Posts for Week',
        description: 'Prepare and schedule content for Instagram for the upcoming week',
        category: 'Social Media',
        start: '2025-06-29T00:00:00Z',
        end: '2025-06-29T23:59:59Z',
        allDay: true,
      },
    ];

    res.status(200).json({
      success: true,
      count: events.length,
      data: events,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

// @desc    Create a calendar event
// @route   POST /api/calendar
// @access  Private
exports.createEvent = async (req, res) => {
  try {
    const { title, description, category, start, end, allDay } = req.body;

    // Validate input
    if (!title || !start) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title and start time',
      });
    }

    // In a real app, we would save the event to the database
    // with a reference to the current user (req.user.id)
    
    // For demo purposes, we'll just return the created event with an ID
    const event = {
      id: `event-${Date.now()}`,
      title,
      description: description || '',
      category: category || 'General',
      start,
      end: end || start,
      allDay: allDay || false,
    };

    res.status(201).json({
      success: true,
      data: event,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

// @desc    Update a calendar event
// @route   PUT /api/calendar/:id
// @access  Private
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, start, end, allDay } = req.body;

    // In a real app, we would update the event in the database
    // after checking that it belongs to the current user
    
    // For demo purposes, we'll just return the updated event
    const event = {
      id,
      title,
      description: description || '',
      category: category || 'General',
      start,
      end: end || start,
      allDay: allDay || false,
    };

    res.status(200).json({
      success: true,
      data: event,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

// @desc    Delete a calendar event
// @route   DELETE /api/calendar/:id
// @access  Private
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    // In a real app, we would delete the event from the database
    // after checking that it belongs to the current user
    
    // For demo purposes, we'll just return success
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};