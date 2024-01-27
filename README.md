# Education Website

## Overview

This repository contains the codebase for an education website. The primary purpose of this website is to provide an interactive platform for users to track their educational progress, view recent topics, and manage their enrolled courses.

## Features

### 1\. User Dashboard

- The '/user/dashboard' route presents a personalized dashboard for each user.
- Statistics such as achievements, enrolled courses, and completed courses are displayed using visually appealing cards.
- Users can track their progress and achievements.

### 2\. Recent Topics

- The website displays a section dedicated to recent topics, providing users with quick access to their courses.
- Users can view their enrolled courses, check individual units, and monitor completion percentages.

### 3\. Tailored Interests

- The 'Tailor Your Interests' feature allows users to add or remove courses based on their preferences.
- The modal interface, powered by the 'AddCoursesModal' component, facilitates a seamless user experience.

# User Routes

## 1\. /user/domestic

The '/user/domestic' route is designed to showcase different educational subjects. Each subject is presented as a card with dynamic styling and animations.

### Key Features:

- Subjects are dynamically fetched using the `getSubjects` function.
- Animated icons, colors, and shadows add an engaging visual experience.
- The 'Explore' button redirects users to the respective subject page.
- Responsive grid layout adapts to different screen sizes.

### Usage:

- Access the route by navigating to '/user/domestic' on the website.

## 2\. /user/profile

The '/user/profile' route provides a user's profile information.

### Key Features:

- Utilizes the `ProfileContent` component to display user details.
- User data includes personal information, achievements, completed courses, and more.
- Responsive design for optimal user experience.

### Usage:

- View your profile by navigating to '/user/profile' on the website.

## 3\. ProfileContent Component

The `ProfileContent` component is responsible for rendering the detailed content of the user's profile.

### Key Features:

- Fetches user data using the `getUser` function.
- Displays user statistics, achievements, completed courses, and more.
- Responsive layout for better readability.

### Usage:

- Integrated into the '/user/profile' route to render the user's profile content.

## 4\. /user/settings

The '/user/settings' route presents various user settings and preferences.

### Key Features:

- Components like `PersonalInformation`, `Profile`, and `Notification` are utilized.
- Provides a comprehensive interface for managing personal information.
- ComboboxContent is used for selecting the user's country.
- Responsive design for optimal user experience.

### Usage:

- Navigate to '/user/settings' to access and modify your account settings.

Note: Ensure to follow the appropriate routes on the website for an immersive user experience.

## How to Use

1.  Clone the repository.

    bashCopy code

    `git clone https://github.com/your-username/education-website.git`

2.  Install dependencies.

    bashCopy code

    `npm install`

3.  Run the development server.

    bashCopy code

    `npm run dev`

4.  Open the application in your browser.

    bashCopy code

    `http://localhost:3000`

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building web applications.
- [Sanity](https://www.sanity.io/) - Headless CMS for managing content.
- React Icons - Icon library for React.

## Contributors

- [Agara Sulaiman](https://github.com/airplaneboy)

## License

This project has not been licensed.
