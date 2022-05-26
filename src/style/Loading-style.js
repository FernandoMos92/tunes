import styled from 'styled-components';

const Load = styled.div`

  height: 36px;
  left: 50%;
  margin-left: -300px;
  overflow: visible;
  position: absolute;
  top: 40%;
  user-select: none;
  width: 600px;

  div {
  animation: move 3s linear infinite;
  color: #575656;
  font-family: Helvetica , Arial , sans-serif;
  font-size: 2rem;
  font-weight: 900;
  height: 62px;
  opacity: 0;
  position: absolute;
  text-shadow: -1.5px -3px 6px rgb(0, 210, 42) , 1.5px 3px 6px rgb(5, 110, 6);
  transform: rotate(360deg);
  width: 20px;
}

div:nth-child( 1 ) {
  animation-delay: -0.2s;
}

div:nth-child( 2 ) {
  animation-delay: -0.4s;
}

div:nth-child( 3 ) {
  animation-delay: -0.8s;
}

div:nth-child( 4 ) {
  animation-delay: -1.2s;
}

div:nth-child( 5 ) {
  animation-delay: -1.8s;
}

div:nth-child( 6 ) {
  animation-delay: -2.2s;
}

div:nth-child( 7 ) {
  animation-delay: -2.6s;
}

@keyframes move {

  0% {
    left: 0;
    opacity: 0;
  }

  35% {
    left: 41%;
    opacity: 1;
    transform: rotate(0deg);
  }

  65% {
    left: 59%;
    opacity: 1;
    transform: rotate(0deg);
  }

  100% {
    left: 100%;
    opacity: 0;
    transform: rotate(-360deg);
  }
}

@keyframes move {

  0% {
    left: 0;
    opacity: 0;
  }

  35% {
    left: 41%;
    opacity: 1;
    transform: rotate(0deg);
  }

  65% {
    left: 59%;
    opacity: 1;
    transform: rotate(0deg);
  }

  100% {
    left: 100%;
    opacity: 0;
    transform: rotate(-360deg);
  }
}

@keyframes move {

  0% {
    left: 0;
    opacity: 0;
  }

  35% {
    left: 41%;
    opacity: 1;
    transform: rotate(0deg);
  }

  65% {
    opacity: 1;
    right: 59%;
    transform: rotate(0deg);
  }

  100% {
    opacity: 0;
    right: 100%;
    transform: rotate(-360deg);
  }
}

@keyframes move {

  0% {
    opacity: 0;
    right: 0;
  }

  35% {
    opacity: 1;
    right: 41%;
    transform: rotate(0deg);
  }

  65% {
    opacity: 1;
    right: 59%;
    transform: rotate(0deg);
  }

  100% {
    opacity: 0;
    right: 100%;
    transform: rotate(-360deg);
  }
}

.hidden-class {
  display: none;
}

`;

export default Load;
