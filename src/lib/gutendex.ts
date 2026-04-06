export interface GutendexAuthor {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

export interface GutendexBook {
  id: number;
  title: string;
  authors: GutendexAuthor[];
  subjects: string[];
  formats: Record<string, string>;
  download_count: number;
}

export interface GutendexResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: GutendexBook[];
}

/**
 * Mapper for our local categories to Gutendex topics or search terms.
 * Since Gutendex is heavily English, we use English search terms but filter by language=es (or keep both if we want more results).
 */
const CATEGORY_MAP: Record<string, string> = {
  'c-astronomia': 'astronomy',
  'c-aventura': 'adventure',
  'c-ciencias': 'science',
  'c-ficcion': 'fiction',
  'c-filosofia': 'philosophy',
  'c-fisica': 'physics',
  'c-historia': 'history',
  'c-matematicas': 'mathematics',
  'c-misterio': 'mystery',
  'c-mitos': 'mythology',
  'c-poesia': 'poetry',
  'c-romance': 'romance',
};

/**
 * Fetches books from Gutendex based on a category ID.
 */
export async function fetchBooksByCategory(categoryId: string): Promise<GutendexBook[]> {
  const searchTerm = CATEGORY_MAP[categoryId] || 'fiction';
  
  // We search for books matching the topic in Spanish (or we can fallback if not enough results)
  try {
    const res = await fetch(`https://gutendex.com/books/?search=${searchTerm}&languages=es`);
    if (!res.ok) throw new Error('Error fetching from gutendex');
    const data: GutendexResponse = await res.json();
    
    // If not enough Spanish books, let's just fetch english as fallback (for demo purposes)
    if (data.results.length < 3) {
        const fallBackRes = await fetch(`https://gutendex.com/books/?search=${searchTerm}`);
        const fallbackData = await fallBackRes.json();
        return fallbackData.results.slice(0, 5);
    }
    
    return data.results.slice(0, 5); // Return top 5
  } catch (error) {
    console.error('Gutendex fetch error:', error);
    return [];
  }
}

/**
 * Given a book, fetches its plain text content and splits it into paragraphs.
 */
export async function fetchBookText(bookId: number): Promise<string[]> {
  try {
    // First get the exact URLs from the book metadata
    const infoRes = await fetch(`https://gutendex.com/books/${bookId}/`);
    const bookInfo: GutendexBook = await infoRes.json();
    
    // Find plain text URL (utf-8 preferred)
    const textUrl = bookInfo.formats['text/plain; charset=utf-8'] 
      || bookInfo.formats['text/plain']
      || bookInfo.formats['text/plain; charset=us-ascii'];
      
    if (!textUrl) {
      return ['Este libro no tiene formato de texto plano disponible en Project Gutenberg.'];
    }

    const textRes = await fetch(textUrl);
    let text = await textRes.text();

    // Text parsing/cleaning logic
    // Gutenberg usually has headers/footers we might ideally want to strip,
    // but for our prototype we will just split by double line breaks.
    
    // A simple heuristic to skip the "The Project Gutenberg eBook..." header.
    const startMarker = "*** START OF THE PROJECT GUTENBERG EBOOK";
    const startIdx = text.indexOf(startMarker);
    if (startIdx !== -1) {
      // Find the next newline after the start marker
      const actualStart = text.indexOf('\\n', startIdx);
      if (actualStart !== -1) {
        text = text.slice(actualStart);
      }
    }

    const endMarker = "*** END OF THE PROJECT GUTENBERG EBOOK";
    const endIdx = text.indexOf(endMarker);
    if (endIdx !== -1) {
      text = text.slice(0, endIdx);
    }

    // Split by double newline/return to get paragraphs
    const paragraphs = text
      .split(/\r?\n\r?\n/)
      .map((p) => p.replace(/\r?\n/g, ' ').trim()) // flatten line breaks inside paragraphs
      .filter((p) => p.length > 50); // Keep only substantial paragraphs

    return paragraphs.length > 0 ? paragraphs : ['No se pudieron extraer párrafos legibles de este libro.'];
  } catch (error) {
    console.error('Error fetching book content:', error);
    return ['Hubo un eror intentando extraer el contenido de este libro.'];
  }
}
