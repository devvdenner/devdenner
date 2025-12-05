# Dev Denner Portfolio

Welcome to the **Dev Denner Portfolio**! This is a personal portfolio website built to showcase my projects, skills, and professional experience. It is designed with a focus on performance, modularity, and a premium user experience.

## 🚀 Technologies

This project is built using the following modern web technologies:

-   **[Next.js](https://nextjs.org/)**: The React Framework for the Web.
-   **[TypeScript](https://www.typescriptlang.org/)**: Typed JavaScript for better code quality and maintainability.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
-   **[pnpm](https://pnpm.io/)**: Fast, disk space efficient package manager.

## 🏗️ Architecture

The project follows a **Modular MVVM (Model-View-ViewModel)** architecture to ensure separation of concerns and scalability.

-   **`src/modules/`**: Contains feature-based modules (e.g., `home`, `about`, `projects`, `contact`).
    -   **`models/`**: TypeScript interfaces and types.
    -   **`viewmodels/`**: Business logic and state management (custom hooks).
    -   **`views/`**: React components for the UI.
-   **`src/_shared/`**: Reusable components, hooks, and utilities used across the application.

## 🛠️ Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have **Node.js** installed. This project uses **pnpm** as the package manager.

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd dev-denner
    ```

2.  Install dependencies:

    ```bash
    pnpm install
    ```

### Running the Development Server

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
src/
├── _shared/          # Shared components, hooks, and utils
├── app/              # Next.js App Router
├── modules/          # Feature modules (MVVM)
│   ├── about/
│   ├── contact/
│   ├── home/
│   └── projects/
└── ...
```

## 📄 License

This project is licensed under the MIT License.
