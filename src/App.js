import React from 'react';
import { CardGrid, Counter } from './styles/cardstyles';
import Header from './Header';
import {GlobalStyles} from './styles/globalstyles';
import CardComponent from './Card';

function App() {

  return (
    <div class="wrapper">
      <GlobalStyles />
      <Header youtube={"https://www.youtube.com/watch?v=OyPq0xM7Bhw&t=3s"}reactclass={"props and state"}></Header>
      <ul>
        <li><Counter>Props</Counter>와 <Counter>States</Counter> 복습하기 위해서 만든 예제 </li>
        <li> 다행히 Styled Component 사용법 기억난다.</li>
        <li> 스타일 효율적으로 사용하는 법 궁금. createGlobalStyles와 각 컴포넌트 스타일 저작 차이</li>
        <li> Props 사용법 이해 💯. 컴포넌트 안에 있는 컴포넌트한테 props를 넘겨주려면 어떻게 해야할까?</li>
        <li> States 아직 자신이 없다. 일단 룰만 잘 따르면 되는 것 같다. 나중에 컨디션 사용해보기 </li>
      </ul>
        <CardGrid>     
          <CardComponent prop={"https://i.pinimg.com/564x/af/33/b2/af33b2e74952b66c6a87585b64295095.jpg"} title={"Card1"} description={"이렇게 하는게 맞는건가?"}></CardComponent>
          <CardComponent prop= {"https://i.pinimg.com/564x/b8/45/17/b84517dbfa493dff2bdbd5227d8a13e5.jpg"} title={"Card2"} description={"이렇게 하는게 맞는거 같아!"}></CardComponent>
        </CardGrid>
    </div>
  );
}

export default App;
