Friend Tracker

Friend Tracker is a responsive relationship management web application designed to help users maintain meaningful connections with friends by tracking communication history, interaction frequency, and relationship goals.

The application provides an organized and user-friendly interface where users can view friend profiles, perform quick interactions such as calls, texts, and video calls, and monitor communication activity through analytics and timelines.

1. Project Overview

This project was built using React and modern frontend development practices. The main goal was to create a clean, interactive, and fully responsive user experience while keeping the application structure scalable and maintainable.

The app dynamically loads friend data from a JSON source and allows interaction tracking through LocalStorage persistence.

2. Key Features

2.1 Dynamic Friend Management

- Displays friend information dynamically from friends.json
- Individual Friend Details page for each contact
- Shows relationship goals, contact frequency, tags, and status

2.2 Interaction Tracking

Users can:
- Make a Call
- Send a Text
- Start a Video Call

Each interaction is automatically stored in LocalStorage and reflected throughout the application.

2.3 Timeline System

- Displays a complete interaction history
- Shows Call, Text, and Video activities
- Includes filtering functionality by interaction type

2.4 Analytics Dashboard

- Built using Recharts
- Visualizes interaction data with a Pie Chart
- Dynamically counts Call, Text, and Video interactions from LocalStorage

2.5 Toast Notifications

- Instant feedback when interactions occur
- Improves overall user experience

2.6 Responsive Design

- Fully responsive for mobile, tablet, and desktop devices
- Built following the provided Figma-inspired layout

3. Technologies Used

- React
- React Router
- Tailwind CSS
- DaisyUI
- Recharts
- React Icons
- React Hot Toast
- LocalStorage API

4. How Interaction Tracking Works

1. User opens a Friend Details page
2. User clicks Call, Text, or Video
3. The interaction is saved in LocalStorage
4. Timeline page displays the interaction history
5. Analytics page visualizes interaction statistics in real time

