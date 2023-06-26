import s from './Header.module.scss';

const Header = () => {
  let heading = 'React challenge';
  let subheading = 'This is our first react challenge';

  
 return(
   <header>
     <h1 className={s.heading}>{heading}</h1>
     <h2 className={s.subheading}>{subheading}</h2>
   </header>
 );

};

export default Header;