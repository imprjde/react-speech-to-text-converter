import "./App.css";
import MicAnimation from "./Components/MicAnimation";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

function App() {
  const { transcript, listening } = useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript);

  console.log(isCopied);

  return (
    <div className="App">
      <div className="flex flex-col md:flex-row m-auto justify-center items-center">
        <h1 className="mt-10 text-white font-bold text-3xl md:text-4xl">
          Speech To Text Converter
        </h1>
        <div
          className={`mt-5 md:mt-10 ml-0 md:ml-10 ${
            listening ? "opacity-1" : "opacity-0"
          } `}
        >
          <MicAnimation />
        </div>
      </div>
      <div className="bg-white m-auto mt-10 w-[22rem] md:w-[50rem] min-h-[25rem] rounded-md md:flex flex-col">
        <div className="flex-grow px-4 text-left text-lg font-semibold my-4 py-4 md:py-0 ">
          {" "}
          <span className="text-left">{transcript}</span>
        </div>
        <div className="hidden md:flex flex-row justify-between mx-10 mb-4">
          <button
            onClick={() => {
              setCopied(transcript);
            }}
            className="bg-gradient-to-r from-pink-700 to-pink-500 text-white font-semibold px-4 py-2 rounded-md"
          >
            {isCopied
              ? " ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ Copied‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ "
              : "Copy to clipboard"}
          </button>
          <button
            onClick={() => {
              SpeechRecognition.startListening({ continuous: true });
            }}
            className="bg-gradient-to-r from-pink-700 to-pink-500 text-white font-semibold px-4 py-2 rounded-md"
          >
            Start Listening
          </button>
          <button
            onClick={SpeechRecognition.stopListening}
            className="bg-gradient-to-r from-pink-700 to-pink-500 text-white font-semibold px-4 py-2 rounded-md"
          >
            Stop Listening
          </button>
        </div>
      </div>

      <div className="flex md:hidden m-auto justify-center mt-10 space-x-8 ">
        <button
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
          className="bg-gradient-to-r from-pink-700 to-pink-500 text-white font-semibold px-4 py-3 rounded-md"
        >
          Start Listening
        </button>
        <button
          onClick={SpeechRecognition.stopListening}
          className="bg-gradient-to-r from-pink-700 to-pink-500 text-white font-semibold px-4 py-3 rounded-md"
        >
          Stop Listening
        </button>
      </div>
      <div className="flex md:hidden m-auto justify-center mt-10 ">
        <button
          onClick={() => setCopied(transcript)}
          className="bg-gradient-to-r from-pink-700 to-pink-500 text-white font-semibold px-4 py-3  rounded-md"
        >
          {isCopied
            ? " ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎ ‎ Copied‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ "
            : "Copy to clipboard"}
        </button>
      </div>
    </div>
  );
}

export default App;
