const menu = {
  title: "menu",
  items: [
    {
      title: "working links"
    },
    {
      title: "swipe left for close"
    }
  ]
};

const backbutton = {
  title: "(mobile only) backbutton",
  items: [
    {
      title: "closes menu"
    },
    {
      title: "or closes popup windows"
    },
    {
      title: "or move back in history"
    },
    {
      title: "or exists the app"
    }
  ]
};

const offline = {
  title: "(mobile only) works offline",
  items: [
    {
      title: "nothing breaks (especially lessons loading various data from API)"
    },
    {
      title: "if db downloaded",
      items: [
        {
          title: "autocomplete works from db"
        },
        {
          title: "loads word definition from db "
        }
      ]
    }
  ]
};

const dialogs = {
  title: "confirm dialog opened when performing dangerous action"
};

const saving = {
  title: "saves changes permanently"
};

const testData = {
  title: "test data vocabulary-scholar-test.json work fine"
};

export default {
  title: "General",
  items: [menu, backbutton, dialogs, offline, saving, testData]
};
