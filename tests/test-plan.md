# CleanCity QA Test Plan – Week 1

**Project:** CleanCity – Waste Pickup Scheduler
**Team Name:** The Debuggers
**Prepared By:** Fatuma Abdi
**Week:** 1 – Initial Setup & Planning
**Date:** July 2, 2025

Week 1: Initial Setup & Planning
Due: Wednesday, July 2, 2025
Repository initialized with project structure
tests folder created
Initial test plan and strategy documented (tests/test-plan.md)
Team member roles and responsibilities documented
Any initial setup scripts or environment notes

Deliverables
1. Repository initialized with project structure
we forked the CleanCity repository and created a new branch for our team.we maintained all initial files to ensure we had all information at hand incase we needed any clarification
2. tests folder created
we created a tests folder to make work easier and neat incase we needed to add more test files in the later stages of the project.
under the tests folder a test-plan.md file was created to document our test plan and strategy for the project at per with the phase on part of the project requirements
3. Initial test plan and strategy documentation(tests/test-plan.md)
in week 1 we planned to test some of the basic functions and behaviours of the app
these  included
- User registration and login form behavior
- Navigation between pages (Home, Login, Register, Dashboard, etc.)
- Waste pickup request form submission
- Role-based UI visibility (Admin link visible to admins only)
- Data persistence using localStorage
- fuctionality of different buttons on the app
- log out functionality

Initial bugs identified
- Eldoret filter returns Nairobi results — bug in filtering logic
- preferrred date of pickup the callender allows one to chose a date thats already past — may cause  scheduling issues
-  one can submit a feedback with an invalid ID this can cause confusion - functionality bug
- the alreaday have an account log in here  in the registration does not redirect to  login - UI/UX bug
- the navigation panel at the top covers response thus user has to keep scrolling to the top to see response - UI/UX bug

4. Team member roles and responsibilities documented
Fatuma Abdi – group leader: Writes test plan,records early issues
francisca obiero - identify early issues
stanley mwangi - test the app functionality
5. Any initial setup scripts or environment notes
there was no initial scripts 
but we created a test-environment.md file 


