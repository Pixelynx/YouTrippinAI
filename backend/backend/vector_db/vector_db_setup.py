import os
import pandas as pd
from sentence_transformers import SentenceTransformer
from chroma_client import get_chroma_client, create_collection, add_profile

csv_filename = 'mountains_vs_beaches_preferences.csv'
KAGGEL_DATASET_PATH = os.environ.get('KAGGEL_DATASET_PATH')

def load_and_vectorize_kaggle_data(file_path):
    df = pd.read_csv(file_path)
    model = SentenceTransformer('all-MiniLM-L6-v2')
    
    profiles = []
    for _, row in df.iterrows():
        description = f"Age: {row['age']}, Travel frequency: {row['travel_frequency']}, Preferences: {row['preferences']}"
        embedding = model.encode(description)
        profiles.append({
            'id': str(row['id']),
            'description': description,
            'embedding': embedding.tolist()
        })
    
    return profiles

def add_profiles_to_db(collection, profiles):
    for profile in profiles:
        add_profile(collection, profile)

# Main execution
if __name__ == "__main__":
    client = get_chroma_client()
    collection = create_collection(client, "travel_profiles")
    
    kaggle_data = load_and_vectorize_kaggle_data(KAGGEL_DATASET_PATH)
    add_profiles_to_db(collection, kaggle_data)
