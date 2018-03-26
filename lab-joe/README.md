Author: Joe Waine

Complete date: Monday, March 26, 2018

This lab was a real workout in getting the reducers to combine!!



Requirements
Feature Tasks
Refactor and add the following components

NoteUpdateForm
Create a NoteUpdateForm component that inherits a note through props and onSubmit is able to update the App's state with an updated note.

Refactor the NoteItem to have the following behavior
If the user double clicks on the notes content it should switch to the Edit View

Default view
Display the notes content and a delete button
Display a delete button that will remove the Note from the application's state
Edit View
Show the NoteUpdateForm and a Cancel Button
onSubmit or click of the cancel button in NoteUpdateForm it should switch back to the default view
App Component Tree
Your components should be nested in the following layout

App
  Landing
  Dashboard
   NoteCreateForm
   NoteList
     NoteItem
       NoteUpdateForm
Test
Test NoteCreateForm
Test your onChange handler
Test your onSubmit handler
Test NoteItem
Test the NoteItem's ability to remove a note from the App's state
Test NoteUpdateForm
Test the NoteUpdatesForm's ability to update a note in the App's state
Documentation
Write a description of the project in your README.md