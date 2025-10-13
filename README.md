# Implementation of the Alumni Association platform for the University/Institute

A basic alumni networking platform that allows students to search for alumni using intelligent search capabilities.

## 🎯 Project Overview

This is an alumni association platform for universities/institutes where students can search for alumni based on their requirements. The platform features a RAG-powered search system that understands natural language queries.

## ✨ Current Features (Planned)

### 🔍 Smart Alumni Search
- **Homepage with Search Bar**: Main landing page with search functionality
- **RAG-Powered Search**: Natural language search using Retrieval-Augmented Generation that understands queries like:
  - "Software engineers working at Google with 5+ years experience"
  - "Alumni from computer science who started their own company"
  - "Data scientists in Bangalore who graduated between 2018-2020"
- **Traditional Filter Options**: Classic filtering system alongside intelligent search
- **Search Results**: Alumni profiles displayed based on search criteria

### 🎨 Enhanced Experience (Must-Have)
- GSAP animations for better user interaction
- Improved UI/UX design - priority focus

## 🚀 Future Plans

### 📅 Event Management
- Admin can create events
- Alumni can host solo or group meetings
- Venue selection functionality
- Student application system for events with seat management

### 🔐 Authentication & Authorization
- Individual user IDs for each platform user
- Login system for personalized experience

## 🛠️ Technology Stack

- **Frontend**: React with React Router
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Full Stack**: MERN Stack
- **AI/ML**: RAG (Retrieval-Augmented Generation) for intelligent search
- **Package Manager**: npm
- **Animations**: GSAP

## 👥 Team & Current Workflow

**Project Leader:**
- **Aditya Raj Singh Ranawat** - Homepage development, team guidance, UI/UX focus, GSAP animations, full-stack development

**AI/ML Team (Current Phase):**
- **Aditya Bhaskar** - RAG search implementation and API setup
- **Aditya Modi** - RAG search implementation and API setup
- **Bhavik Mittal** - RAG search implementation and API setup

**Development Workflow:**
- **Phase 1 (Current)**: AI/ML team focuses on RAG search and API setup while leader develops and designs homepage while adding the Full-stack to the project
- **Phase 2**: Parallel workflow transitions - AI/ML team moves to full-stack development alongside continued AI/ML work

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm
- Git

### Fork & Setup Instructions for Beginners

**What is Forking?** 
Forking creates your own copy of this project on your GitHub account. You can make changes to your copy without affecting the original project.

#### Step 1: Fork the Repository
1. **Go to the top of this GitHub page**
2. **Click the "Fork" button** (top-right corner of the page)
3. **Select your GitHub account** to fork the repository to your profile
4. **Wait for GitHub to create your copy** (takes a few seconds)

#### Step 2: Clone Your Fork to Your Computer
1. **Open your forked repository** (it will be at `https://github.com/YOUR-USERNAME/alumni-association-platform`)
2. **Click the green "Code" button**
3. **Copy the URL** (should look like: `https://github.com/YOUR-USERNAME/alumni-association-platform.git`)
4. **Open VS Code or Terminal**
5. **Run these commands:**
   ```bash
   # Navigate to where you want the project folder
   cd Desktop
   
   # Clone your fork (replace YOUR-USERNAME with your actual GitHub username)
   git clone https://github.com/YOUR-USERNAME/alumni-association-platform.git
   
   # Enter the project folder
   cd alumni-association-platform
   ```

#### Step 3: Create a Development Branch
```bash
# Create and switch to a new branch called "dev"
git checkout -b dev

# Check which branch you're on (should show "dev")
git branch
```

#### Step 4: Connect to Original Repository (Upstream)
```bash
# Add connection to Aditya's original repository
git remote add upstream https://github.com/ADITYA-USERNAME/alumni-association-platform.git

# Check your connections (you should see "origin" and "upstream")
git remote -v
```

#### Step 5: Install Project Dependencies
```bash
# Install all required packages
npm install
```

#### Step 6: You're Ready to Code! 🎉

### Daily Workflow Commands

#### Before You Start Coding Each Day:
```bash
# Get latest changes from Aditya's repository
git fetch upstream
git merge upstream/main

# Make sure you're on your dev branch
git checkout dev
```

#### After You Finish Coding:
```bash
# Check what files you changed
git status

# Add all your changes
git add .

# Save your changes with a message
git commit -m "Describe what you changed"

# Send changes to your GitHub fork
git push origin dev
```

#### When You Want Aditya to Review Your Work:
1. **Go to your fork on GitHub** (`https://github.com/YOUR-USERNAME/alumni-association-platform`)
2. **Click "Pull Request"** 
3. **Select:** Base: `main` ← Compare: `dev`
4. **Write a title and description** of what you changed
5. **Click "Create Pull Request"**
6. **Wait for Aditya to review and merge**

### Quick Reference Commands
```bash
# See current branch
git branch

# Switch to dev branch
git checkout dev

# Check status of files
git status

# Get latest changes
git pull upstream main

# Push your work
git push origin dev
```

### ⚠️ Important Tips for Beginners:
- **Always work on the "dev" branch**, never directly on "main"
- **Pull latest changes before starting work each day**
- **Commit your changes frequently** with clear messages
- **Ask Aditya if you're stuck** - better to ask than break something!
- **Don't worry about making mistakes** - Git can undo almost everything

## 📞 Contact

**Team Lead**: Aditya Raj Singh Ranawat

---

**Status**: Planning Phase  
**Domain**: Web Development

*Note: This project is in early planning stages. Features and technical details will be updated as development progresses.*