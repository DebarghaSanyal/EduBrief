import os
from dotenv import load_dotenv
import nltk
import google.generativeai as genai
import assemblyai as aai

# Load environment variables
load_dotenv()
ASSEMBLYAI_API_KEY = os.getenv("ASSEMBLYAI_API_KEY")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# Configure APIs
aai.settings.api_key = ASSEMBLYAI_API_KEY
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-2.0-flash-lite")   # gentai model name (Must be free version)

# Download NLTK data
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('punkt_tab')  # zip

print("Initialization complete.")