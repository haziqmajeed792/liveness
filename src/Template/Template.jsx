import "../Style/template.css";

const Template = ({ children }) => {
const title = import.meta.env.VITE_SURVEY_TITLE
const description = import.meta.env.VITE_SURVEY_DESCRIPTION
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

      </header>
      <hr style={{ border: '1px solid #19b394', width: '100%' }} />

      {/* Main Body Content */}
      <main className="container">{children}</main>

      {/* Footer */}
      {/* <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} My App. All Rights Reserved. |
          <a href="#"> Privacy Policy</a>
        </p>
      </footer> */}
    </div>
  );
};

export default Template;