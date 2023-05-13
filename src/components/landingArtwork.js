import React, { useEffect, useState } from "react";
import tw from "twin.macro";

import TwContainer from "./twContainer";
import Icon from "./icon";
import styled from "@emotion/styled";
import asanoha from "../images/asanoha.svg";

function RandomWords({ words }) {
  const typeSpeed = 80;
  const deleteSpeed = 18;
  const pause = 600;
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);
  const [text, setText] = useState("");

  // Type writer effect functionality
  useEffect(() => {
    let timer = "";
    const typeWriter = (words, isDeleting, loopNum, typingSpeed) => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    timer = setTimeout(
      () => typeWriter(words, isDeleting, loopNum, typingSpeed),
      typingSpeed
    );

    return () => clearTimeout(timer);
  }, [isDeleting, loopNum, text, typingSpeed, words]);

  return (
    <span tw="whitespace-nowrap text-green-300 font-mono">
      {text || <>&nbsp;</>}
    </span>
  );
}

function Text({ text, randomWords, ...rest }) {
  return (
    <div {...rest}>
      {text.split("%%").map((str) =>
        str === "$$" ? (
          <RandomWords
            key={str}
            words={Object.values(randomWords)}
            tw="text-green-300 font-mono"
          />
        ) : (
          <span
            key={str}
            tw="whitespace-nowrap font-display tracking-widest text-white font-thin"
          >
            {str.trim()}{" "}
          </span>
        )
      )}
    </div>
  );
}

const Pattern = styled.div`
  ${tw`w-full h-full overflow-hidden inset-0 absolute`}
  &:after {
    content: "";
    ${tw`absolute w-full h-full`}
    background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
    mask-image: url("${asanoha}");
    mask-repeat: repeat;
    -webkit-mask-image: url("${asanoha}");
    -webkit-mask-repeat: repeat;
  }
`;

const Background = styled.div`
  box-shadow: inset 0 0 5rem 0rem rgba(0, 0, 0, 0.4);
`;

export default function LandingArtwork({ i18n }) {
  return (
    <Background tw="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-600">
      <Pattern />
      <TwContainer tw="relative flex flex-col md:flex-row items-center z-10 my-24 text-center md:text-left">
        <div>
          <Icon
            tw="h-60 lg:h-72 mb-20 md:mb-0 md:mx-20 lg:mx-36 text-green-300"
            icon="etc"
          />
        </div>
        <Text tw="flex flex-col text-5xl lg:text-6xl space-y-4" {...i18n} />
      </TwContainer>
    </Background>
  );
}
