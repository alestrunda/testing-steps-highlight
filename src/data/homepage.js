const importItem = {
  title: "Import prepared lists",
  items: [
    {
      title: "available when no words in the app"
    },
    {
      title: "import runs successfully"
    }
  ]
};

const search = {
  title: "Search",
  description: "Homepage > Searchform",
  items: [
    {
      title: "autocomplete",
      items: [
        {
          title: "has results if word exists"
        },
        {
          title: "has no results if word does not exist"
        }
      ]
    },
    {
      title: "submit",
      items: [
        {
          title: "on text input submit"
        },
        {
          title: "on icon click (mobile only)"
        },
        {
          title: "on autocomplete item click"
        }
      ]
    }
  ]
};

const list = {
  title: "word list",
  items: [
    {
      title: "adds rating when clicked on rating icons",
      items: [
        {
          title: "correct"
        },
        {
          title: "wrong"
        }
      ]
    },
    {
      title: "sorting",
      items: [
        {
          title: "select"
        },
        {
          title: "switch"
        }
      ]
    },
    {
      title: "pagination",
      items: [
        {
          title: "switches page"
        },
        {
          title: "opens all page numbers when clicked on dots"
        }
      ]
    },
    {
      title: "after page changes, sorting and pagination",
      items: [
        {
          title: "is kept"
        },
        {
          title: "is reviewed if words change"
        }
      ]
    }
  ]
};

export default {
  title: "Homepage",
  items: [importItem, search, list]
};
