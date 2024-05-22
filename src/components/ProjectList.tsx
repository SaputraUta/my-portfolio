import ProjectCart from "./ProjectCart";

export default function ProjectList() {
  return (
    <div className="mx-10 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10">
      <ProjectCart
        title="Maintain Data Debitur - BRISPOT"
        img="project7.jpg"
        link="https://drive.google.com/file/d/1BjwfP0zpPOAGw-w5fUd3zp1_0ZTZSi3m/view?usp=sharing"
        body="A feature for maintaining debtor data for Bank Rakyat Indonesia was built on the BRISPOT web platform. This project was developed using CodeIgniter 3, Tailwind, Bootstrap, jQuery, and other technologies. The project was completed as part of my final internship project at Bank Rakyat Indonesia."
      />
      <ProjectCart
        title="Attendance App"
        img="project6.png"
        link="https://drive.google.com/file/d/1Hzd8yx2q8wsc4FYWcbguHKdVyIK_Jm3T/view?usp=sharing"
        body="An Online Attendance Application was developed using Laravel and Bootstrap as part of a PHP-Laravel bootcamp mini project. Four user roles were defined: Admin, Staff, PJ (Penanggung Jawab), and Assistant. Full access to all features was granted to Admin and Staff, including user management, attendance reports, generating attendance code, and others. Limited access was assigned to PJ and Assistant roles, with PJ allowed to generate attendance code and Assistants doesn't. The application was designed to facilitate attendance management with role-based access control."
      />
      <ProjectCart
        title="Edoroli"
        img="project5.jpg"
        link="https://edoroli.vercel.app/"
        body="An online platform that provides practical and efficient venue reservation information in managing event organizer preparations by providing features to access venue protocols, and book a venue for an event. Created using nextjs, typescript, tailwind and postgresql."
      />
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
