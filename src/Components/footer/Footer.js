
import "./footer.css";
export default function Footer ()  {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'black',
  padding: '20px',
  textAlign: 'center',
  color: 'white',
  marginTop: '30px',
};


