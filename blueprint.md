# Blueprint: German Vocab App

## Application Overview

This application is a German vocabulary learning app designed to help users learn German words through a modern, interactive flashcard interface. It incorporates a Spaced Repetition System (SRS) to optimize learning.

## Key Learning Logic (Refined)

1.  **Daily 100 Words:** The app recommends a list of 100 words to study each day.
2.  **Leftover Preservation:** Words not successfully learned from the previous day stay in the current list.
3.  **50/50 Mix Rule:** For any empty slots in the 100-word list:
    *   50% are "Review" words (already encountered, based on SRS stats).
    *   50% are "New" words (never studied before).
4.  **Midnight Reset:** Every night at 12:00 AM, a new daily list is automatically generated upon the first app launch of the day.
5.  **Continuous Learning:** Once all 100 words are learned, the app automatically refills the list using the 50/50 mix rule to allow for further study.

## Current Plan

The current plan is to rewrite the recommendation and initialization logic in `main.js` to strictly follow the new user requirements.

### Steps:

1.  **Update `main.js` Logic:**
    *   Refactor `generateDailyList` to handle leftovers, 50% review, and 50% new words.
    *   Update `initApp` to check for date changes and trigger the reset.
    *   Modify the completion state in `renderWords` to trigger a refill instead of just stopping.
2.  **Ensure Data Persistence:** Continue using `localStorage` to track `wordStats` and the `currentVocabList`.
3.  **UI Feedback:** Ensure the user knows when a new list is generated or refilled.
