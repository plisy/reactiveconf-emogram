# From React to Cloud - Emogram

Users expect their apps to be smart and amaze them in some way. Learn with us how to make a React app more intelligent with Cognitive Services and Microsoft Azure. Together we will build a fun application which gets information about people on a photo and picks just the right smiley face for them. You will see React, Azure Functions and Cognitive Services working together.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## References
TypeScript: https://www.typescriptlang.org/

### Step 0
Clone this repo and run the scripts above.

### Step 1 - Read the photo and send it to the service
	— Read the photo url from the disk
	— Call the service with the photo and log emotion data
	— Display the photo as an image in the stream
	— Make sure the Composer component fires onPostCreated with the URL and emotion data.
    - Add a typing for server response
	Service URL: https://faceprocessor.azurewebsites.net/api/EmotionDetector

### Step 2. Displaying a scaled image in a canvas
	- Add a canvas component to your Post component
	— Calculate the scale of the image 
	— Draw the image on the canvas
	— Use the emoticon from https://static-asm.secure.skypeassets.com/pes/v1/emoticons/smile/views/default_160 and draw it on the canvas using the faceRectangle data (remember to first load the image!)

### Step 3. Add the logic to determine which emoticon should be used depending on the person's emotions
	— Suggested: sort by emotions and pick top pick
	- Alternatively: go creative
