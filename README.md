### **Lesson 7: Input Elements and Accessibility - Classwork Assignment**

#### **Objective:**

In this lesson, students will continue building their **user registration form** by adding input elements with accessibility features, such as `accesskey` and `tabindex` attributes. These attributes help improve keyboard navigation and usability for all users.

---

### **Step-by-Step Guide:**

1. **Open Your Existing HTML File**:

   - Open the `index.html` file you created in **Lesson 5** inside the `user-registration-form` folder.
   - You will now continue building the form by adding input elements with `accesskey` and `tabindex` attributes for better accessibility.

2. **Add Labels and Text Input Fields with Accessibility**:

   - Add fields for **First Name** and **Last Name** using the `<input type="text">` tag. Use the `accesskey` attribute to allow users to focus on fields using keyboard shortcuts, and use `tabindex` to control the tab order:

     ```html
     <form action="#" method="POST">
       <h2>User Registration Form</h2>

       <label for="first-name" accesskey="f">First Name (Alt + F):</label>
       <input
         type="text"
         id="first-name"
         name="first-name"
         tabindex="1"
         required
       /><br /><br />

       <label for="last-name" accesskey="l">Last Name (Alt + L):</label>
       <input
         type="text"
         id="last-name"
         name="last-name"
         tabindex="2"
         required
       /><br /><br />
     </form>
     ```

3. **Add an Email Field with Accessibility**:

   - Add an input field for collecting the user’s **email address** using the `type="email"` attribute with `accesskey` and `tabindex`:
     ```html
     <label for="email" accesskey="e">Email (Alt + E):</label>
     <input
       type="email"
       id="email"
       name="email"
       tabindex="3"
       required
     /><br /><br />
     ```

4. **Add Password Fields with Accessibility**:

   - Add fields for **Password** and **Confirm Password** with `accesskey` and `tabindex`:

     ```html
     <label for="password" accesskey="p">Password (Alt + P):</label>
     <input
       type="password"
       id="password"
       name="password"
       pattern="(?=.*\d).{8,}"
       title="Must contain at least one number and be at least 8 characters long"
       tabindex="4"
       required
     /><br /><br />

     <label for="confirm-password" accesskey="c"
       >Confirm Password (Alt + C):</label
     >
     <input
       type="password"
       id="confirm-password"
       name="confirm-password"
       tabindex="5"
       required
     /><br /><br />
     ```

5. **Add Submit and Reset Buttons with Accessibility**:

   - Add a submit button and a reset button, ensuring both buttons are accessible:
     ```html
     <button type="submit" accesskey="r" tabindex="6">
       Register (Alt + R)
     </button>
     <button type="reset" accesskey="x" tabindex="7">
       Reset Form (Alt + X)
     </button>
     ```

6. **Save and Preview Your Form**:

   - Save your `index.html` file.
   - Open it in a browser and test the form fields. Use the `accesskey` shortcuts (e.g., `Alt + F` to focus on the First Name field) and `tabindex` to ensure the correct tabbing order.

7. **Submit Your Work**:
   - Once you've confirmed the form works as expected, submit the following:
     - The zipped `user-registration-form` folder with the updated `index.html` file.
   - Upload it to the classwork assignment on Google Classroom

---

### **Assessment Criteria**:

1. **Correct Use of Input Elements with Accessibility**:

   - The form includes text fields for first name, last name, email, and password fields with appropriate restrictions.
   - Each input field has `accesskey` and `tabindex` attributes to improve keyboard accessibility and navigation.

2. **Accessibility Features**:

   - `accesskey` attributes allow users to focus on form elements using keyboard shortcuts.
   - `tabindex` attributes ensure a logical and intuitive navigation order through the form fields.

3. **File Structure and Submission**:
   - The HTML file is well-organized and properly formatted.
