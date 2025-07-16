# CleanCity – Test Cases (Week 2)

**Prepared By:** the debuggers
**Date:** July 7, 2025
**Phase:** Week 2 – Test Design & Early Execution

---

 TC01 – Register with Valid Details

 **Feature:** Registration Form
 **Description:** User fills in valid name, email, and matching passwords.
 **Steps:**

  1. Navigate to Register page
  2. Enter: Name = Sarah, Email = [sarah@test.com](mailto:sarah@test.com), Password = test123
  3. Click “Create Account”
 **Expected Result:** Account is created, success message is shown
 **Actual Result:** Registration successful
 **Status:** Pass

------

 TC02 – Register with Short Password

 **Feature:** Registration Form
 **Description:** Test rejection of weak passwords
 **Steps:**

  1. Enter: Name = John, Email = [john@test.com](mailto:john@test.com), Password = 12
  2. Submit the form
 **Expected Result:** Error message: “Password must be at least 3 characters long”
 **Actual Result:** Error message shown
 **Status:** Pass

---

 TC03 – Login with Correct Credentials

 **Feature:** Login Form
 **Description:** Log in with existing user
 **Steps:**

  1. Go to Login page
  2. Email: [user@cleancity.com](mailto:user@cleancity.com), Password: password123
* **Expected Result:** Redirect to Dashboard
* **Actual Result:** Redirect successful
* **Status:** Pass

---

 TC04 – Navigate to Feedback Page After Login

 **Feature:** Navigation Bar
 **Description:** Test authenticated page access
 **Steps:**

  1. Login
  2. Click “Feedback” from navbar
 **Expected Result:** Feedback page loads
 **Actual Result:** Loads successfully
 **Status:** Pass

---

 TC05 – Submit Valid Pickup Request

 **Feature:** Home Page – Pickup Form
 **Description:** Submit request with valid form fields
 **Steps:**

  1. Fill: Name = Mike, Location = Mombasa, Waste = Recyclable, Date = 2025-07-10
  2. Click “Submit Request”
 **Expected Result:** Success message shown, data saved
 **Actual Result:** Works as expected
 **Status:** Pass

---

 TC06 – Submit Pickup Without Name

 **Feature:** Home Page – Pickup Form
 **Description:** Test name field validation
 **Steps:**

  1. Leave name empty
  2. Fill other fields
  3. Submit
 **Expected Result:** Error message for full name
 **Actual Result:** Error displayed
 **Status:** Pass

---

 TC07 – Filter by Eldoret

 **Feature:** Dashboard – Filter
 **Description:** Select Eldoret from location dropdown
 **Steps:**

  1. Login → Go to Dashboard
  2. Set Location = Eldoret
 **Expected Result:** Only Eldoret requests shown
 **Actual Result:** Nairobi data shown
 **Status:** Fail (B001)

---

 TC08 – Submit Feedback with Valid Request ID

 **Feature:** Feedback Form
 **Description:** Send feedback for REQ003
 **Steps:**

  1. Fill: Request ID = REQ003, Reason = Missed Pickup, Comments = “Driver skipped my house.”
  2. Submit
 **Expected Result:** Success message shown
 **Actual Result:** Feedback saved
 **Status:** Pass

---

TC09 – Submit Feedback with Invalid Request ID

 **Feature:** Feedback Form
 **Description:** Enter fake request ID
 **Steps:**

  1. Enter: REQ999
  2. Fill rest of form and submit
 **Expected Result:** Error or rejection
 **Actual Result:** Accepted input
 **Status:** Fail (B003)

---

 TC10 – Admin Updates Request Status

 **Feature:** Admin Panel
 **Description:** Change REQ001 status to Completed
 **Steps:**

  1. Login as admin
  2. Select REQ001 and set status to “Completed”
  3. Click Update
 **Expected Result:** Status changes and table updates
 **Actual Result:** Status updated successfully
 **Status:** Pass