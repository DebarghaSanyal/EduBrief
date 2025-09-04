import React, { useState } from "react";
import { FaPlay, FaUser, FaMoon, FaCog, FaBars, FaDownload } from "react-icons/fa";
import axios from 'axios';

const Main = () => {
  const [url, setUrl] = useState('');
  const [transcription, setTranscription] = useState('');
  const [summary, setSummary] = useState('');
  const [notes, setNotes] = useState('');
  const [isTranscriptionOpen, setIsTranscriptionOpen] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [audioAvailable, setAudioAvailable] = useState(false); // Added for Summary.mp3

  let apiBaseUrl;
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    apiBaseUrl = "http://localhost:5000";
  } else {
    apiBaseUrl = ""; // Use relative path for production
  }
  
  const handleImportUrl = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Import URL clicked - Start', { inputUrl: url });

    // Immediately convert and set the video URL
    let embedUrl = url;
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      if (videoId) {
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else {
        console.error('Invalid YouTube URL - No video ID found');
      }
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      if (videoId) {
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else {
        console.error('Invalid YouTube short URL - No video ID found');
      }
    } else {
      console.warn('URL not recognized as YouTube, using as-is:', url);
    }
    setVideoUrl(embedUrl);
    console.log('Video embed URL set immediately:', embedUrl);

    // Asynchronously fetch backend data
    try {
      // const response = await axios.post('http://localhost:5000/process_url', { url });
      // const filePath = response.data.file_path;
      // console.log('File path received:', filePath);

      // const fileUrl = `http://localhost:5000/${filePath}`;
      // console.log('Fetching from:', fileUrl);      

      const response = await axios.post(`${apiBaseUrl}/process_url`, { url });
      const filePath = response.data.file_path;
      console.log('File path received:', filePath);

      const fileUrl = `${apiBaseUrl}/${filePath}`;

      const jsonResponse = await axios.get(fileUrl);
      const data = jsonResponse.data;
      console.log('Fetched data:', data);

      setTranscription(data.Transcript || 'No transcription available');
      setSummary(data.Summarization || 'No summary available');
      setNotes(data.Notes || 'No notes available');
      setAudioAvailable(true); // Enable audio once backend processing is done
      console.log('State updated with backend data - End');
    } catch (error) {
      console.error('Error importing URL:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  };

  console.log('Component rendered with state:', { transcription, summary, notes, videoUrl, audioAvailable });

  return (
    <div className="bg-[#f5f3e5] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-green-700 text-white flex justify-between items-center px-6 py-4 shadow-md">
        <FaBars className="text-2xl cursor-pointer" />
        <h1 className="text-3xl font-semibold">EduBrief</h1>
        <div className="flex space-x-6">
          <FaUser className="text-2xl cursor-pointer" />
          <FaMoon className="text-2xl cursor-pointer" />
          <FaCog className="text-2xl cursor-pointer" />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div>
          <input
            type="text"
            placeholder="Paste video URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            onClick={handleImportUrl}
            className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition"
          >
            Import URL
          </button>

          {/* Video Player */}
          {videoUrl ? (
            <iframe
              className="w-full h-68 my-6 rounded-lg shadow-lg"
              src={videoUrl}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="bg-black w-full h-68 flex items-center justify-center my-6 rounded-lg shadow-lg">
              <FaPlay className="text-white text-4xl cursor-pointer" />
            </div>
          )}

          <button
            type="button"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition"
          >
            Save for Later
          </button>

        </div>




        {/* Right Section */}
        <div>
          {/* Transcription */}
          <div
            className="border border-gray-300 rounded-lg mb-4 shadow-sm cursor-pointer"
            onClick={() => setIsTranscriptionOpen(!isTranscriptionOpen)}
          >
            <h3 className="text-lg font-semibold text-gray-800 p-3 bg-gray-100 flex justify-between items-center">
              Transcription
              <span className="text-sm">{isTranscriptionOpen ? "▲" : "▼"}</span>
            </h3>
            {isTranscriptionOpen && (
              <div className="p-3 bg-white min-h-[100px] overflow-auto">
                {transcription || "Transcription will appear here after importing a URL."}
              </div>
            )}
          </div>


          {/* Summary */}
          <div
            className="border border-gray-300 rounded-lg mb-4 shadow-sm cursor-pointer"
            onClick={() => setIsSummaryOpen(!isSummaryOpen)}
          >
            <h3 className="text-lg font-semibold text-gray-800 p-3 bg-gray-100 flex justify-between items-center">
              Summary
              <span className="text-sm">{isSummaryOpen ? "▲" : "▼"}</span>
            </h3>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isSummaryOpen ? 'max-h-[500px]' : 'max-h-0'
                }`}
            >
              <div className="p-3 bg-white">
                {summary || "Summary will appear here after importing a URL."}
              </div>
            </div>
          </div>


          {/* Audio Insights */
            // src="http://localhost:5000/output/Summary.mp3"
          }
          <h3 className="text-lg font-semibold text-gray-800">Audio Insights:</h3>
          <p className="text-gray-600 text-sm mb-4">Key insights from the video's audio are summarized below</p>
          {audioAvailable ? (
            <audio
              controls
              className="w-full my-2 mt-8"              
              src={`${apiBaseUrl}/output/Summary.mp3`}
            >
              Your browser does not support the audio element.
            </audio>
          ) : (
            <div className="flex items-center border border-gray-300 rounded-lg p-3 my-2 shadow-sm mt-8">
              <FaPlay className="text-gray-700 cursor-pointer" />
              <div className="flex-grow mx-3 bg-gray-300 h-1 rounded"></div>
              <span className="text-gray-700">0:00</span>
            </div>
          )}

          {/* Notes Section */
            // "http://localhost:5000/output/notes.docx"
          }

          <a href={`${apiBaseUrl}/output/notes.docx`}
            download="notes.docx"
            className="text-blue-500">
            <h3 className="text-gray-800 text-lg font-semibold mt-8">Download short notes based on the video:</h3>
            <p className="text-gray-600 text-sm mb-4">Get concise notes covering up to 6 main topics with 5 key points each</p>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm cursor-pointer hover:bg-gray-100 mt-6">
              <span className="flex-grow">Notes.docx</span>
              <FaDownload />
            </div>
          </a>

        </div>
      </div>

      {/* Center Section */}
      <h3 className="text-lg font-semibold text-gray-800 mt-6 ml-14">Notes</h3>
      <div className="w-auto p-3 border border-gray-300 rounded-lg mb-20 shadow-sm bg-white min-h-[100px] overflow-auto ml-14 mr-14">
        {notes
          ? notes.split(/(Topic:)|\*/).map((line, index) => {
            if (line === "Topic:") {
              return (
                <span key={index} className="block font-semibold mt-2">
                  {line}
                </span>
              );
            } else if (line === "*") {
              return (
                <span key={index} className="block ml-4">
                  • {/* No text here, just the bullet */}
                </span>
              );
            } else if (line) {
              return (
                <span key={index} className="block ml-8">
                  • {line}
                </span>
              );
            }
            return null;
          })
          : "Notes will appear here after importing a URL."}
      </div>





      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-3xl font-bold">EduBrief</h2>
            <p className="text-sm text-gray-400 mt-2">Subscribe to our newsletter for the latest updates.</p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 rounded-l-lg text-black focus:outline-none"
              />
              <button
                type="button"
                className="bg-green-700 px-6 py-3 rounded-r-lg font-medium hover:bg-green-800 transition"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <h3 className="font-bold text-white">General</h3>
              <p className="mt-2">About Us</p>
              <p>Services</p>
              <p>Contact</p>
              <p>Feedback</p>
            </div>
            <div>
              <h3 className="font-bold text-white">Resources</h3>
              <p className="mt-2">Documentation</p>
              <p>Tutorials</p>
              <p>Community</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            <h3 className="font-bold text-white">Follow Us</h3>
            <p className="mt-2">Twitter | LinkedIn | Instagram | Facebook | Discord</p>
            <h3 className="font-bold text-white mt-6">Developers</h3>
            <p className="mt-2">Open Source Contributions</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>© 2025 EduBrief. All rights reserved.</p>
          <p>Terms & Conditions | Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Main;