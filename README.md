# GROWW-T11
Team ID: GROWW-T11 | Team Members: Arnab Ghosh &amp; Sonal Prabhu

![Groww-website](https://user-images.githubusercontent.com/35455325/114377392-3d47f580-9ba4-11eb-83d9-f4f16f33669a.JPG)

# Technology Stack Used
1. ReactJS
2. MongoDB
3. NodeJS
4. Express

# Chatbot Frontend Folder Structure
* **src/app** - Contains Redux store and reducers
* **src/assets** - Contains image files
* **src/chatbot** - Contains chatbot config files which handle responses in chatbot
* **src/chatbot-widgets** - Custom components that are used by chatbot
* **src/components** - Contains basic pages for the dummy Groww website
* **src/services** - Includes function for login/logout

# Chatbot
We have used an npm package react-chatbot-kit developed by Fredrik Oseberg which can be found at [react-chatbot-kit](https://github.com/FredrikOseberg/react-chatbot-kit)

# Features
1. Based on the page context and the user context, the FAQ's that appear are different. Feel free to explore different set of questions shown to a logged in user, non-logged in user, KYC completed user, KYC incomplete user and a guest at different pages
2. To allow for the factor of usefulness of the FAQ's, a simple like/dislike button is provided for each question which affects the order in which questions appear to the user
3. At Account>Configure Settings, an option is provided to the user to set maximum orders per day. If the user happens to exceed this limit, the chatbot alerts the user about their purchase attempt.


Note: A "clear messages" button is given beside the chatbot icon. Feel free to clear away the clutter
