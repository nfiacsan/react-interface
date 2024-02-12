import { useState } from "react";

export default function Button({
  mainText,
  secondaryText,
  popup,
}: {
  mainText: string;
  secondaryText?: string;
  popup?: React.ReactNode;
}) {
  const [showPopup, setShowPopup] = useState(false);

  function handleClick() {
    if (popup) setShowPopup(!showPopup);
  }
  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center py-2 px-4 mx-2"
    >
      <div className="font-semibold">{mainText}</div>
      <div className="text-sm font-light">{secondaryText}</div>
      {showPopup && <div className="absolute">{popup}</div>}
    </button>
  );
}
