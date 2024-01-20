import ProjectCart from "./ProjectCart";

export default function ProjectList() {
  return (
    <div className="mx-10 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10">
      <ProjectCart
        title="Todo Application"
        img="project1.png"
        link="https://todo-apps-ochre.vercel.app/"
        body="Next.js Todo App with JWT, Prisma, Neon (serverless PostgreSQL),
    and TypeScript. Seamlessly manage tasks with JWT authentication,
    Prisma for database integrity, and Tailwind CSS for a modern and
    responsive user interface. Developed with TypeScript for enhanced
    code reliability."
      />
      <ProjectCart
        title="My Notes Application"
        img="project2.png"
        link="https://mynotes-saputra.netlify.app/"
        body="Developed as the final assignment for IDCamp 2023's React
        Intermediate Class, my React Notes App showcases expertise in
        React, JavaScript, and Tailwind CSS. Seamlessly integrating the
        Dicoding API, the app delivers a dynamic and enriched note-taking
        experience. This project stands as a testament to my front-end
        development skills, API integration, and successful completion of
        the intermediate React class."
      />
      <ProjectCart
        title="Blog Application"
        img="project4.png"
        link="https://drive.google.com/file/d/1vg_zjVLQIDvbly2y0_VSUQl2lQiH_Q5D/view?usp=sharing"
        body="Blog application built using PHP and using the Laravel framework. Implementing authentication and authorization features to enhance this application. Using MYSQL as DBMS and using Eloquent ORM. Users can upload their posts and be read by all users, users can also upload their own images. Each post has a category, and only admin can add a category."
      />
      <ProjectCart
        title="BookShelf Application"
        img="project3.png"
        link="https://bookself-apps.netlify.app/"
        body="Developed as the final project for IDCamp 2023's
        Basic-Beginner Front-End Class, Bookshelf App reflects
        foundational skills in vanilla JavaScript. The application underscores proficiency in utilizing
        local storage and session storage for efficient data management.
        This project marks a key achievement in my front-end development
        journey, offering hands-on experience in creating interactive web
        applications."
      />
    </div>
  );
}
