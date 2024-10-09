import { type FC, type ReactNode } from "react";
type HeaderProps = {
    children: ReactNode;
    image: {
        src: string,
        alt: string
    };
  };
  
  const Header: FC<HeaderProps> = ({image, children}) => {
      return (
          <header>
           <img {...image}/>
            {children}
        </header>

)
}
export default Header;