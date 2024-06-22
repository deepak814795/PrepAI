# Mock Interview Platform

[Live Demo](https://prepai-deepak-kushwaha.vercel.app/)

A platform to help users take mock interviews using Generative AI. Users can select their job description, tech stack, and years of experience. The AI then provides interview questions based on the input. Users can record their answers, which are converted to text and evaluated by the AI, providing feedback and a rating.

## Tech Stack

- **<span style="color:#007FFF">React</span>**: For building the user interface.
- **<span style="color:#007FFF">JavaScript</span>**: The main programming language used.
- **<span style="color:#007FFF">Whisper LLM</span>**: For converting speech to text.
- **<span style="color:#007FFF">Generative AI</span>**: For generating interview questions and evaluating responses.
- **<span style="color:#007FFF">Drizzle ORM</span>**: For database management.
- **<span style="color:#007FFF">Neon SQL Database</span>**: For storing user data and interview details.
- **<span style="color:#007FFF">Clerk</span>**: For authentication and user management.

## Features

- **Personalized Questions:** Generate questions based on the selected job description, tech stack, and experience.
- **Voice Recording:** Record answers using the built-in audio recorder.
- **Speech-to-Text:** Convert recorded audio answers to text.
- **AI Evaluation:** Get feedback, ratings, and areas of improvement for each answer.
- **User-Friendly Interface:** Easy-to-use interface for a seamless experience.

## Installation

### Prerequisites

- Node.js (version 14.x.x or higher)
- npm (version 6.x.x or higher) or yarn (version 1.x.x or higher)

### Clone the Repository

```javascript
git clone https://github.com/your-username/mock-interview-platform.git
cd mock-interview-platform
