import Header from '../Header/Header';
import Card from '../Card/Card';
import FlexWrap from '../FlexWrap/FlexWrap';
import s from './Main.module.scss';

const Main = (props) => {
 
  return (
    <main className={s.main}> 
      <FlexWrap>
        <Card />
        <Card />
        <Card />
      </FlexWrap>
    </main>
  );
};

export default Main;