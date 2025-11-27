interface WordSegment {
  text: string;
  isSpace: boolean;
}

// Convert a single paragraph string → list of WordSegments
export function processParagraph(text: string): WordSegment[] {
  return text.split(/(\s+)/).map(segment => ({
    text: segment,
    isSpace: /^\s+$/.test(segment)
  }));
}

// Convert an array of paragraph strings → array of WordSegment arrays
export function processManifesto(texts: string[]): WordSegment[][] {
  return texts.map(p => processParagraph(p));
}

// Compute the global word indices for animation based on processed paragraphs
export function calculateWordIndices(processed: WordSegment[][]): number[] {
  const indices: number[] = [];
  let globalIndex = 0;

  processed.forEach(paragraph => {
    paragraph.forEach(word => {
      if (!word.isSpace) {
        indices.push(globalIndex);
      }
      globalIndex++;
    });
  });

  return indices;
}
