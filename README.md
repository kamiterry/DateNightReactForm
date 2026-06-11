# DateNightReactForm

This project is a visually refined, interactive RSVP web experience built with React. It presents a seafood-themed date night invitation in a clean, elegant format, allowing the recipient to select menu preferences and confirm their availability.

---

## Overview

The application combines a premium user interface with a simple RSVP workflow. Users can select their meal and wine preferences, choose a date, and submit their response. Upon submission, their selections are automatically formatted into an email and opened in their default email client for sending.

---

## Features

### User Interface
- A refined visual design using a deep blue and gold color palette  
- Clean layout inspired by formal dining invitations  
- Typography chosen for a classic, elegant tone  

### Menu Selection
- Fixed starter course  
- Selectable main course options  
- Selectable wine options  
- Options presented as clickable selections rather than form controls  

### Date Input
- Built-in date picker for easy selection of a preferred date  

### RSVP Submission
- Single submission action  
- Automatically generates a formatted email containing:
  - Starter
  - Selected main course
  - Selected wine
  - Chosen date  
- Opens the user’s default email client with the message pre-filled  

### User Experience
- Clear visual feedback when selections are made  
- Smooth interaction flow with subtle animation on submission  
- Simple, intuitive design requiring minimal effort from the user

**How It Works**
The user selects:

A main course
A wine option
A preferred date


When the submission button is clicked:

The application composes a structured email
The user’s email client opens with the content pre-filled

The user sends the email to confirm their RSVP

_License
This project is intended for personal use and can be adapted as needed._

---

## Configuration

To ensure RSVP emails are sent to the correct address, update the following line in your code:

```javascript
const mailtoLink = `mailto:your@email.com?...```

