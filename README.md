# Automate-LinkedIn: Your Superhuman LinkedIn Post Writer Expert

Automate-LinkedIn is an AI-powered application built with Next.js that generates LinkedIn posts based on user descriptions. By leveraging Gemini's API, the app enables users to easily craft posts, making it perfect for professionals looking to save time and generate creative content for their LinkedIn profiles.

**Video Link**: [Watch Demo](https://www.awesomescreenshot.com/video/35679718?key=d2d4d00d1fb457306934a4577106b50c)

## Features
- **AI Post Generation**: Users provide a description, and the app generates a professional LinkedIn post based on the input
- **Gemini API Integration**: Utilizes Gemini's API to process natural language descriptions
- **Post Editing**: Edit generated posts before finalizing
- **Copy to Clipboard**: Easy one-click copying of generated posts
- **Regenerate Option**: Generate alternative versions of your posts
- **Responsive Design**: Works seamlessly across different devices
- **Modern UI**: Clean interface with Tailwind CSS styling

## Tech Stack
- Next.js 15.1.5
- React 19
- TypeScript
- Tailwind CSS
- Jest for testing
- Google Generative AI (Gemini)

## Installation

### Prerequisites
- Node.js (>= 18.0)
- npm or yarn (package manager)

### Steps to Get Started
1. Clone the repository:
    ```bash
    git clone https://github.com/Jagroop2001/automate-linkedin
    cd automate-linkedin
    ```
2. Install the dependencies:
    ```bash
    npm install
    # OR
    yarn install
    ```
3. Set up your Gemini API key:
    - Create a `.env.local` file in the root of the project.
    - Add your Gemini API key to the file:
    ```bash
    GEMINI_AI_API_KEY="YOUR GEMINI API KEY"
    ```
4. Run the development server:
    ```bash
    npm run dev
    # OR
    yarn dev
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

## Testing
Run the test suite with:
```bash
npm test
# OR
yarn test
```

## Usage
1. Open the app in your browser.
2. Enter a description of the LinkedIn post you want to generate.
3. The app will communicate with Gemini's API to generate a post based on your input.
4. You can then use or modify the generated post before publishing it on LinkedIn.
5. Use the available options to:
    - Copy the post to clipboard
    - Regenerate a new version
    - Edit the post manually
    - Save your changes

## Contributing
Contributions are welcome! If you have any ideas for features or improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
