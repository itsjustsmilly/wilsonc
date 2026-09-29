// Turns every standalone Markdown image into a numbered <figure>.
//   ![alt](src "caption")  ->  <figure><img><figcaption>FIG.02  caption</figcaption></figure>
// The title is used as the caption; if there is none, the alt text is used.
// Numbering starts at 02 when the entry has a cover image (the cover is FIG.01).

function isWhitespace(node) {
  return node.type === 'text' && !node.value.trim();
}

export default function rehypeFigures() {
  return (tree, file) => {
    const frontmatter = file.data?.astro?.frontmatter ?? {};
    let n = frontmatter.image ? 1 : 0;

    const visit = (parent) => {
      if (!parent.children) return;
      parent.children = parent.children.map((node) => {
        if (node.type !== 'element') return node;
        const meaningful = node.tagName === 'p' ? node.children.filter((c) => !isWhitespace(c)) : [];
        if (meaningful.length === 1 && meaningful[0].type === 'element' && meaningful[0].tagName === 'img') {
          const img = meaningful[0];
          const caption = img.properties.title || img.properties.alt || '';
          delete img.properties.title;
          img.properties.loading = 'lazy';
          img.properties.decoding = 'async';
          n += 1;
          const label = `FIG.${String(n).padStart(2, '0')}`;
          return {
            type: 'element',
            tagName: 'figure',
            properties: { className: ['fig'] },
            children: [
              img,
              {
                type: 'element',
                tagName: 'figcaption',
                properties: {},
                children: [
                  { type: 'element', tagName: 'span', properties: { className: ['fig-label'] }, children: [{ type: 'text', value: label }] },
                  { type: 'element', tagName: 'span', properties: { className: ['fig-text'] }, children: [{ type: 'text', value: caption }] },
                  { type: 'element', tagName: 'span', properties: { className: ['fig-dims'], ariaHidden: 'true' }, children: [] },
                ],
              },
            ],
          };
        }
        visit(node);
        return node;
      });
    };

    visit(tree);
  };
}
