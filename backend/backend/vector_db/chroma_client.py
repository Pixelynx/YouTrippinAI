import chromadb
from chromadb.utils import embedding_functions

client = chromadb.PersistentClient(path="/path/to/persist/directory")

def create_collection(client, collection_name):
    return client.create_collection(
        name=collection_name,
        embedding_function=embedding_functions.DefaultEmbeddingFunction()
    )

def add_profile(collection, profile_data):
    collection.add(
        documents=[profile_data['description']],
        metadatas=[{k: v for k, v in profile_data.items() if k != 'description'}],
        ids=[str(profile_data['id'])]
    )

def query_similar_profiles(collection, query_data, n_results=5):
    results = collection.query(
        query_texts=[query_data['description']],
        n_results=n_results
    )
    return results
