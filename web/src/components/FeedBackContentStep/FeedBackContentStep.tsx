import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../CloseButton/CloseButton";
import { ScreensShotButton } from "../ScreensShotButton/ScreensShotButton";
import { feedbackType, feedbackTypes } from "../WidgetForm/WidgetForm";

interface FeedBackContentStepProps {
  feedbackType: feedbackType;
  onFeedBackRestartRequest: () => void;
  onFeedBackSent: () => void;
}

export function FeedBackContentStep({
  feedbackType,
  onFeedBackRestartRequest,
  onFeedBackSent,
}: FeedBackContentStepProps) {
  const [screenShot, setScreenShot] = useState<string | null>(null);
  const feedBackTypeInfo = feedbackTypes[feedbackType];
  const [comment, setComment] = useState("");

  function handleSubmitFeedBack(event: FormEvent) {
    event.preventDefault();

    console.log({ screenShot, comment });

    onFeedBackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedBackRestartRequest}
          className="contentButtonArrow"
        >
          <ArrowLeft weight="bold" className="buttonArrowLeft" />
        </button>
        <span className="contenteBoxFeeback">
          <img
            className="ImgContentBoxFeedBack"
            src={feedBackTypeInfo.image.source}
            alt={feedBackTypeInfo.image.alt}
          />
          {feedBackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedBack} className="contentFeedBack">
        <textarea
          className="textAreaFeedBack focus"
          placeholder="Conte com detalhes o que esta contecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="footerContent">
          <ScreensShotButton
            screenShot={screenShot}
            onScreenShotTook={setScreenShot}
          />
          <button
            disabled={comment.length === 0}
            type="submit"
            className="buttonFooterFeedBack"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
