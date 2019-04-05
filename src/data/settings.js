export default {
  title: "Settings",
  items: [
    {
      title: "google drive",
      items: [
        {
          title: "sign in",
          items: [
            {
              title: "starts correctly when no data saved yet"
            },
            {
              title: "saves changes after app reloads"
            }
          ]
        },
        {
          title: "sign out"
        }
      ]
    },
    {
      title: "save/load from/to google drive"
    },
    {
      title: "import"
    },
    {
      title: "export"
    },
    {
      title: "delete",
      items: [
        {
          title: "deletes selected data"
        },
        {
          title: "error if nothing selected"
        }
      ]
    },
    {
      title: "(web only) set number of pages"
    },
    {
      title: "(mobile only) download db",
      items: [
        {
          title: "downloads with progress"
        },
        {
          title: "prints notive if not fully downloaded"
        },
        {
          title: "removes db"
        }
      ]
    },
    {
      title: "set language"
    }
  ]
};
