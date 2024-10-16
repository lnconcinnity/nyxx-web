
The following instructions are made by Copilot for ease of usage. Please pull an issue request if you have any concerns or whatnot in regards of installation or the likes.
### Instructions

1. **Download the Zip File**
   - Press the `<> Code` button on the repository page.
   - Select `Download ZIP`.

2. **Extract the Zip File**
   - Once the download is complete, extract the contents of the ZIP file.

3. **Ensure Node.js is Installed**
   - Check if Node.js is installed on your system.
   - If not, install Node.js from [this link](https://nodejs.org/).

4. **Open Command Prompt in the Folders**
   - Navigate to the `frontend` folder.
   - Type `cmd` in the search bar and press `Enter` to open Command Prompt in this directory.
   - Repeat the above steps for the `backend` folder.

5. **Install Core Dependencies**
   - In each Command Prompt window, type `npm install` and press `Enter`.

6. **Install Frontend Dependencies**
   - In the `frontend` folder Command Prompt, type:
     ```bash
     npm install react-bootstrap sass react bootstrap react-router-dom react-scroll-parallax @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons
     ```
     and press `Enter`.

7. **Install Backend Dependencies**
   - In the `backend` folder Command Prompt, type:
     ```bash
     npm install helmet express morgan http cors jsonwebtoken uuid express-jwt body-parser
     ```
     and press `Enter`.

8. **Start the Application**
   - Navigate back to the main project folder.
   - Type `cmd` in the search bar to open a new Command Prompt.
   - Once the prompt is shown.
   - To exit the prompt properly, first do `CTRL+C` which would then prompt you to input y/n (simply a yes or no). Once the process is finished, freely exit the prompt.
   - If any issues rise when testing, try running the following in the command prompt that's been opened for the main folder:
   ```
   npm install npm install -g babel-loader @babel/preset-react @babel/preset-typescript svgr/webpack customize-cra concurrently react-app-rewired
   ```
   