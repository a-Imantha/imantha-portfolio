import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export async function compileMdx(source: string) {
  try {
    const compiled = await compile(source, {
      outputFormat: 'function-body',
      development: false,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    });

    return String(compiled);
  } catch (error) {
    console.error('Error compiling MDX:', error);
    throw error;
  }
}

