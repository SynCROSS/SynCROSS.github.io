import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const HomeHeaderBlock = styled.header`
  min-height: 95vh;
  min-width: 100vw;
  background: linear-gradient(165deg, #f5f5f5 50%, #fff 50%);
`;

const HeadLine = styled.h1`
  font-weight: 900;
  font-size: 5rem;
  margin: 0 auto 20px;
  line-height: 1.2;
`;

const Job = styled.h3`
  font-size: 1.5rem;
  font-weight: 100;
  color: #aaa;
`;

const RouterLink = styled.a`
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 1.2rem 40px 1.2em 20px;
  position: relative;
  width: 140px;
  font-size: 1.2rem;
`;

const FontAwesomeIconBlock = styled(FontAwesomeIcon)`
  margin-left: 10px;
  position: absolute;
  transition: all 0.15s ease-in-out;
  opacity: 0.5;
  top: 50.5%;
  transform: translate(0, -50%);
`;

const HomeHeader = () => {
  const [right, setRight] = useState(false);

  const toggleRight = () => setRight(!right);

  return (
    <HomeHeaderBlock className="flex jc-center ai-center flex-direction-col">
      <Job>Frontend Developer</Job>
      <HeadLine>
        SynCROSS, <br /> The Knowledge Explorer
      </HeadLine>
      <Link href="/Work">
        <RouterLink onMouseOver={toggleRight} onMouseLeave={toggleRight}>
          My Work{' '}
          <FontAwesomeIconBlock
            icon={faArrowRight}
            className="fa-icon"
            style={
              right && right
                ? { right: '20px', opacity: '1' }
                : { right: '25px', opacity: '.5' }
            }
          />
        </RouterLink>
      </Link>
    </HomeHeaderBlock>
  );
};

export default HomeHeader;
