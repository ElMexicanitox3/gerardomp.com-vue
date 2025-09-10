import { marked } from 'marked';

export const useMarkdown = (text: string) => {
  return marked.parse(text);
};
