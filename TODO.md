# TODO List

## Not Found Route

### Error Boundary

Fix the Error Boundary so that it displays the NotFound Route on incorrect route names. However, allow the Error Boundary to catch all other errors that aren't related to route names.

## Attraction Route

### Survey Authorization

Use react-router's "auth" example to create the protected routes of the survey questions.

Check if the "Take Survey" button has been clicked: Use the state attribute during navigation then check it in the first React element.

Only allow navigation to the previous questions or the question after the current index: Check the current URL or parameter (this preferred) against the index which should be saved in the context.

Only allow navigation to the results page after all questions have been answered: Check if the current index is equal to the length of the questions array during navigation.

Only allow navigation to the next question after the current question is answered: Check if the object in the current index is filled during navigation.

Use context to display all answered questions: Context should contain all the questions, options, and selected answers. Map the array of objects to the results page.

Clear the context when the user navigates out of the survey: The array of objects containing the questions and answers should be set to null as well as the current index when the navigation does not contain the "survey" route.

Context must contain: The current index as a number and an array of objects as properties. Changing the current index, Checking the object at the index for completeness, Checking the current index against the length of the question array, 

Sample Usage: The user selects an answer and clicks on the next question button. This updates the current index's object to be the question and selected answer. Then it attempts to navigate to the next question. Catch the navigation and ask if the current object is correctly filled and the navigation goes to the current index plus one. If it does not, handle appropriately. If it does, change the current index to the question being navigated to and allow navigation.

### Survey Questions

Save all survey questions in a json file.
