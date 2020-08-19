export const arxiv =
  "http://export.arxiv.org/api/query?search_query=cat:quant-ph&sortBy=submittedDate";

export const formatFeed = feed => {
  return feed.entry.map(entry => {
    return {
      title: entry.title[0],
      summary: entry.summary[0],
      authors: entry.author.map(author => author.name[0]).join(", "),
      id: entry.id[0],
      pdf: (entry.link.find(link => link["$"].type === "application/pdf") || {
        $: {
          href: null
        }
      })["$"].href,
      date: new Date(entry.updated[0])
    };
  });
};
