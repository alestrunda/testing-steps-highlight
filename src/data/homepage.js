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
          title: "is found if word exists"
        },
        {
          title: "is not found if word does not exist"
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
          title: "on icon click"
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
      title: "adds rating when clicked on rating icons"
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
      title: "pagination"
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
