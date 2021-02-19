
Demo : https://stark-lowlands-18341.herokuapp.com/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Tech stack used:

- React.js
- Redux as a state management library
- React Router for client side routing
- Redux Thunk middleware to dispatch async actions(calling API)
- HTML5
- CSS3
- Zomato API's : Goto https://developers.zomato.com/documentation to see the list of available API’s

### Answers to technical questions

1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

Please find the effort taken,
_ Analysis of the requirement - 2 hr
_ Design the flow - 2 hr
_ Constructed required libraries - 30 mins
_ Implemented the Redux store for the State management - 2 hrs
_ Designed and Developed the components in ReactJS - 12 hrs
_ Validated Lighthouse Audit
Total effort took for this assignment: 18+ hrs

Given more time,
I would like to add below tasks as part of this assignment,
_ Implementation of Jest for Unit Testing
_ Implementation of Refine Search
_ Focused on enhancing UI design and Interactions
_ Added Webaccessability WCAG 2.0/2.1 AA compliant for the all the pages
_ Improvised Lighthouse audit Results
_ Additional Tesing Coverage would be added before giving it to testing team
like cross browser testing etc, page responsive and Adding more debug logs for investigation

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

   The example snippet for Redux thunk is the below one which i have used to dispatch forgot password dialogue box in login page.

   I have used function to collect entered email to check with fetch API and throws error status if the email is not present in the Database.

            export function forgotPasswordAjax(email) {
            return async dispatch => {
            const response = await Client.forgotPassword(email);
            try {
            if (response.status === 'error') {
            dispatch(showErrorToast(response.message));
            } else {
            await dispatch(forgotPasswordSuccess());
            }
            } catch (error) {
            dispatch(showErrorToast(error));
            }
            };
            }

3. How would you track down a performance issue in production?
   Have you ever had to do this?
   Replicate the scenario in the staging environment using the same set of parameters.
   I would run a load test on the api call to find out how many concurrent calls can it handle from time to time. Log the results and identify the bottleneck. Will acquire the performance team inputs for further debugging.

4. How would you improve the API that you just used?
   Currently this api only returns restaurant list based on one parameter which is city. If we have used that data before and cached it for later use then we will miss the updated list which may occur after caching the data. The same api can add a timestamp call on city basis or entire api basis to determine if we have the upto date data from last cache or we should make a brand new call and get newer data.

5. Please describe yourself using JSON.
   I am very comfortable with JSON parsing in javascript.
   JSON api is available in javascript, where it is simply an object and it allows for clean and maintainable code.

6. Added Screenshot of Lighthoue Audit

![alt text](https://github.com/srpari/RestaurantSearch/blob/main/Captured_LightHouse.PNG?raw=true)

