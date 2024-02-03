# Steps: 

step 1: Clone the Repository in your local Machine   ("https://github.com/Hmtgit7/Houseware")

step 2: run script ------>    npm instal or npm i 

step 3 : to open the project live in your local machine run -------> npm start

step 4: to run the tests run -------> npm run test

# Screenshot 

![Image of the otput of text cases](/src/assests/Screenshot%202024-02-03%20134850.png)

# Test Suites: 5 passed, 5 total Tests: 14 passed, 14 total Snapshots: 0 Total Time: 6.161 s

## Test Plan: 
Header Component Overview: The Header component manages the rendering of the header section in a todo application. It involves displaying a heading, an input field for adding new todos, and triggering actions upon new todo submissions.

## Test Types: 
Render Test: Ensure the correct rendering of the Header component with all its elements. Integration Test: Verify the component's interaction with the dispatch function provided. Test Cases: Render Test:

#### Case 1: Display Header Component

Render the Header component and confirm its presence in the document. Assert the rendering of the "todos" heading.

#### Case 2: Display Input Element

Check the rendering of the input element for adding new todos. Validate the correct attributes like placeholder and id.

### Integration Test:

#### Case 3: Dispatch ADD_ITEM Action on Enter Key Press

Simulate submitting a new todo using the Enter key. Mock the dispatch function and ensure it's called with the appropriate action. Wait for asynchronous updates to complete.

## Test Plan: 
Footer Component Overview: The Footer component handles the display of status and actions related to todos. It shows the count of active todos and offers an option to clear completed todos.

## Test Types: 
Render Test: Ensure the Footer component's correct rendering with all its elements. Functional Test: Check the component's response to user interactions, such as clicking the "Clear Completed" button. Test Cases: Render Test:

#### Case 1: Display Footer Component

Render the Footer component and check its presence in the document. Confirm the existence of elements for displaying todo count and the "Clear Completed" button.

#### Case 2: Show Correct Number of Active Todos

Render the Footer component with a list of active todos. Validate that the displayed todo count is accurate based on the provided active todos.

### Functional Test:

#### Case 3: 
Clear Completed Todos Render the Footer component with a list of completed todos. Simulate a click on the "Clear Completed" button. Mock the dispatch function and ensure it's called with the correct action. Implementation Details: Component File:

The Footer component is located at todo/components/footer.jsx.

## Test Plan: 
Input Component Overview: The Input component captures user input for creating new todos. It validates and sanitizes input, triggering the creation of a new todo on pressing the "Enter" key.

## Test Types: 
#### Render Test: 
Ensure the correct rendering of the Input component with the necessary input elements.

#### Functional Test: 
Check if the component correctly handles user input, triggers the onSubmit callback on pressing "Enter," and sanitizes input. Test Cases: Render Test:

#### Case 1: Display Input Component

Render the Input component and confirm its presence in the document. Verify the existence of an input element with the correct attributes.

#### Case 2: Input Element Attributes

Ensure that the rendered input element has the correct attributes, including data-testid, type, and placeholder.

#### Functional Test:

#### Case 3: Call onSubmit on Enter Key Press with Valid Input

Render the Input component with a mock onSubmit callback. Simulate typing valid input and pressing "Enter." Verify that the onSubmit callback is called with the sanitized input.

#### Case 4: Do Not Call onSubmit on Enter Key Press with Invalid Input

Render the Input component with a mock onSubmit callback. Simulate typing invalid input (below the minimum length) and pressing "Enter." Ensure that the onSubmit callback is not called.

#### Case 5: Sanitize Input Before Calling onSubmit

Render the Input component with a mock onSubmit callback. Simulate typing input with special characters and pressing "Enter." Verify that the onSubmit callback receives the sanitized input.

Implementation Details: Component File:

The Input component is located at todo/components/input.jsx.

## Test Plan: 
Item Component Overview: The Item component manages the rendering and interaction of a single todo item. It includes features like toggling completion status, removing the item, and editing the item's title.

## Test Types: 
#### Render Test: 
Ensure the correct rendering of the Item component with the necessary elements. Verify that the component displays the correct information for a given todo item.

#### Functional Test: 
Test the component's functionality for toggling completion, removing the item, and editing the item's title. Test Cases: Render Test:

#### Case 1: Display Todo Item Correctly

Render the Item component with a sample todo item. Confirm the presence of the todo item, toggle checkbox, label, and remove button in the document. Validate that the label displays the correct todo title, and the checkbox is not checked.

#### Case 2: Do Not Render Edit Input Initially

Verify that the input for editing the todo item is not initially rendered.

## Functional Test:

#### Case 3: Call TOGGLE_ITEM Dispatch on Checkbox Toggle

Render the Item component with a mock dispatch function. Simulate clicking the todo item's toggle checkbox. Confirm that the dispatch function is called with the TOGGLE_ITEM action.

#### Case 4: Call REMOVE_ITEM Dispatch on Remove Button Click

Render the Item component with a mock dispatch function. Simulate clicking the todo item's remove button. Confirm that the dispatch function is called with the REMOVE_ITEM action.

##### Case 5: Display Input for Editing on Label Double-Click

Render the Item component with a mock dispatch function. Simulate double-clicking the todo item's label. Use waitFor to wait for asynchronous updates. Confirm that the input for editing the todo item is rendered with the correct value.

## Case 6: Hide Input for Editing After Update

Render the Item component with a mock dispatch function. Simulate double-clicking the todo item's label, changing the input, and submitting. Use waitFor to wait for asynchronous updates. Confirm that the input for editing is no longer rendered after updating.

Implementation Details: Component File:

The Item component is located at todo/components/item.jsx.

## Test Plan: 
Main Component Overview: The Main component is responsible for displaying a list of todos based on the selected route (e.g., "/active", "/completed"). It also includes the functionality to toggle all todos.

## Test Types: 
##### Render Test: 
Ensure the correct rendering of the Main component with the necessary elements. Confirm that the todos are displayed correctly based on the provided data.

##### Functional Test: 
Test the component's functionality for toggling all todos based on the "Toggle All" checkbox. Test Cases: Render Test:

##### Case 1: Display Main Component with Visible Todos

Render the Main component with a list of todos. Confirm the presence of the main element, "Toggle All" checkbox, and todo list in the document. Verify that the "Toggle All" checkbox is not initially checked. Check if the todos are rendered correctly in the todo list.

##### Case 2: Do Not Render Main Component with No Visible Todos

Render the Main component with an empty list of todos. Confirm the presence of the main element, "Toggle All" checkbox, and todo list in the document. Verify that the "Toggle All" checkbox is not initially checked. Confirm that the todo list is not rendered.

## Functional Test:

##### Case 3: Toggle All Todos When "Toggle All" Checkbox is Clicked

Render the Main component with a list of todos and a mock dispatch function. Simulate clicking the "Toggle All" checkbox. Use waitFor to wait for asynchronous updates. Confirm that the dispatch function is called with the correct action when toggling all todos.Implementation Details: Component File:

The Main component is located at todo/components/main.jsx.