import React, { useEffect, useState } from "react";
import tw from "twin.macro";

import TwContainer from "./twContainer";
import Icon from "./icon";
import styled from "@emotion/styled";
import asanoha from "../images/asanoha.svg";
import { useDidMount } from "rooks";

function RandomWords({ words, ...props }) {
  const typeSpeed = 80;
  const deleteSpeed = 18;
  const pause = 600;

  const [mounted, setMounted] = useState(false);

  useDidMount(() => setMounted(true));

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
    <span tw="whitespace-nowrap" {...props}>
      {!mounted ? words[0] : text || <>&nbsp;</>}
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
            tw="text-green-700 dark:text-green-300 font-mono"
          />
        ) : (
          <span
            key={str}
            tw="whitespace-nowrap font-display tracking-widest font-thin"
          >
            {str.trim()}{" "}
          </span>
        )
      )}
    </div>
  );
}

const Pattern = styled.div`
  mask-repeat: repeat;
  mask-size: 103px;
  mask-position: center;
  mask-image: url("${asanoha}");
  margin-left: 2px;
  margin-top: 6px;
`;

export default function LandingArtwork({ i18n }) {
  return (
    <div tw="bg-gradient-to-b from-white dark:from-black">
      <TwContainer tw="flex flex-col md:flex-row items-center p-10 gap-10 z-10 text-center md:text-left justify-center">
        <div tw="relative">
          <div tw="absolute inset-0 z-0">
            <Pattern tw="absolute dark:bg-pulse bg-darkpulse inset-[-120vh] md:inset-[-100vw] xl:inset-[-75vw]" />
          </div>
          <Icon
            tw="relative h-48 w-48 md:m-10 xl:m-20 lg:w-56 lg:h-56 text-green-800 dark:text-green-200"
            icon="etc"
          />
        </div>
        <Text
          tw="relative text-3xl md:text-4xl space-y-2 md:space-y-4 lg:space-y-5 lg:text-5xl flex flex-col text-shade-dark w-[22rem]"
          {...i18n}
        />
      </TwContainer>
    </div>
  );
}
