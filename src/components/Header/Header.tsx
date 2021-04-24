import "./header.scss";
interface HeaderProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="header-container">
      <div className="header-title">{title}</div>
      <div className="header-subtitle"> {subtitle}</div>
    </div>
  );
}

export default Header;
