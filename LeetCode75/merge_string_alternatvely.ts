function mergeAlternately(word1: string, word2: string): string {
  const iterable = word1.length > word2.length ? word1 : word2;
  let result = '';

  for (let i = 0; i < iterable.length; i++) {
    if (word1[i] && word2[i]) {
      result += word1[i] + word2[i]
    }
    if (!word1[i] || !word2[i]) {
        result += iterable[i]
    }
  }

  return result;
};
