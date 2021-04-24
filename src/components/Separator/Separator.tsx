import "./separator.scss";
interface HeaderProps {
  title: string;
  subtitle: string;
}

function Separator({ title, subtitle }: HeaderProps) {
  return <div className="separator"></div>;
}

export default Separator;
