React Practice
Started on: October 6, 2022

Credit: JavaScript Mastery
Link: https://www.youtube.com/watch?v=I1cpb0tYV74&ab_channel=JavaScriptMastery

used:
- redux
- tailwind css

for backend:
 - shazamCore from RapidApi Hub
 Link: https://rapidapi.com/tipsters/api/shazam-core

to Run:
 - we need api key for this create account and get that key
 - create .env file in frontend
 - create the following variable and add api after it, REACT_APP_SHAZAM_CORE_RAPID_API_KEY =
 - clear the cache and re run the server
 - npm cache clean --force

cons(in my point of view):
- if you wanna practice it just for redux then not go fot it,because redux not implemented properly, 
  we still passing data from child components to its  child components, while redux main benefit is not to pass data to components to components, get it from global state.
  