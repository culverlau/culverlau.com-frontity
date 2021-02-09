const settings = {
  name: "culverlau.com-frontity",
  state: {
    frontity: {
      url: "https://wp.culverlau.com",
      title: "Culver Lau",
      description: "Web Design. Photography. Videography."
    }
  },
  packages: [
    {
      name: "culverlau-theme"
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // "url": "https://test.frontity.org",
          // "postTypes": [
          //   {
          //     type: "destinations",
          //     endpoint: "destinations",
          //     archive: "/destinations"
          //   }
          // ]
          url: "https://wp.culverlau.com",
          homepage: "/home",
          postsPage: "/blog/",
          categoryBase: "/blog/category",
          tagBase: "/blog/tag",
          authorBase: "/blog/author",
          postTypes: [
            {
              type: "/blog/wp_template_part",
              endpoint: "template-parts",
            },
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
