
# Blueprint: German Vocab App

## Application Overview

This application is a German vocabulary learning app designed to help users learn German words through a modern, interactive flashcard interface. It incorporates a Spaced Repetition System (SRS) to optimize learning, allowing users to focus on words they find more difficult. The app will include words from various CEFR levels (A1, A2, B1, B2) and will allow users to filter words by their part of speech (noun, verb, adjective, etc.).

## Implemented Features:

*   **Modern UI:** A visually appealing and intuitive interface based on the user-provided HTML and CSS.
*   **Comprehensive Vocabulary:** An expanded word list that includes not just nouns, but also verbs, adjectives, adverbs, and other parts of speech.
*   **Part-of-Speech Filtering:** Buttons to filter the word cards by their part of speech.
*   **Spaced Repetition System (SRS):** The core logic is based on the user-provided JavaScript, which implements an SRS.
    *   Swiping left ("I know this") will increase the review interval for a word.
    *   Swiping right ("I don't know this") will reset the review interval, causing the word to appear again soon.
*   **Interactive Elements:**
    *   Swipe gestures for marking words as known or unknown.
    *   Click-to-reveal meanings.
    *   Audio pronunciation for each word.
    *   A "celebration" screen when a study session is complete.
*   **Data Persistence:** The app will use `localStorage` to save the user's progress and the SRS state.

## Current Plan

The current plan is to modify the application to include all parts of speech and allow filtering by them.

### Steps:

1.  **Update `index.html`:**
    *   Integrate the user-provided HTML structure.
    *   Add filter buttons for all relevant parts of speech (e.g., Noun, Verb, Adjective).
2.  **Update `main.js`:**
    *   Expand the `masterVocabList` to include a diverse range of parts of speech with associated data (e.g., `{ word: 'laufen', meaning: 'to run', partOfSpeech: 'Verb', ... }`).
    *   Modify the filtering logic to handle the new part-of-speech filters.
    *   Ensure the SRS logic, card creation, and event handling from the user-provided script are correctly implemented and adapted.
3.  **Update `style.css`:**
    *   Integrate the user-provided CSS for the modern UI.
    *   Add any necessary adjustments to style the new filter buttons or other UI elements.
4.  **Testing:**
    *   Thoroughly test all functionalities: filtering, swiping, SRS logic, audio playback, and data persistence.
