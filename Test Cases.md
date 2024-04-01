## Test Cases for pdf_operations

### 1) Uploading PDF Files
   - No files are selected
   - Select Only PDF file
   - Duplicate file

### 2) Login
   - Invalid name and password

### 3) Register
   - All fields are required
   - Email already exists

### 4) Logout

### 5) Extract PDF
   a) Extract Single Page:
      - Test if the system successfully extracts a single specified page from a PDF file.
      - Verify that the extracted content matches the content of the specified page.
      - Ensure that the extracted page maintains the correct formatting and layout.

   b) Extract Range of Pages:
      - Test if the system can extract a range of consecutive pages from a PDF file (e.g., pages 1 to 5).
      - Verify that all pages within the specified range are extracted accurately.
      - Ensure that the extracted pages are in the correct sequential order.

   c) Extract Non-Consecutive Pages:
      - Test if the system can extract non-consecutive pages from a PDF file (e.g., pages 1, 3, and 5).
      - Verify that all selected pages are extracted correctly and in the specified order.
      - Ensure that the extracted pages contain the expected content from the original document.

   d) Extract Pages Order-wise:
      - Test if the extracted pages are in the correct order as per the PDF document's structure.

### 6) View/Download
   - Successfully view PDF
   - Successfully download PDF

### 7) Delete PDF
   - Successfully delete

### 8) Responsiveness
   - Check the website is Responsive or not
