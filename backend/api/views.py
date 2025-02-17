from django.http import JsonResponse
from backend.vector_db.chroma_client import create_collection, get_chroma_client, query_similar_profiles

def test_query(request):
    try:
        client = get_chroma_client()
        collection = create_collection(client, "travel_profiles")  # Or use get_collection if it already exists

        query = "Age: 30, Travel frequency: monthly, Preferences: hiking, beaches"
        results = query_similar_profiles(collection, {'description': query})
        return JsonResponse({'results': results}, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
