import React from 'react';
import { NavLink } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <header>
        <h1>Welcome to Your E-Learning App</h1>
        <nav>
          <ul>
            <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
            <li><NavLink to="/concepts" activeClassName="active">Concepts</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Featured Projects</h2>
          <ul>
            <li>
              <h3>Project Name</h3>
              <p>Description of the project...</p>
              <NavLink to="/projects/project-id">View Details</NavLink>
            </li>
            {/* More project items */}
          </ul>
        </section>
        <section>
          <h2>Programming Concepts</h2>
          <ul>
            <li>
              <h3>Concept Name</h3>
              <p>Description of the concept...</p>
              <NavLink to="/concepts/concept-id">Learn More</NavLink>
            </li>
            {/* More concept items */}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your E-Learning App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
