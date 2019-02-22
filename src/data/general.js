const menu = {
  title: "menu",
  items: [
    {
      title: "working links"
    },
    {
      title: "swipe to left for close"
    }
  ]
};

const backbutton = {
  title: "backbutton",
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

const dialogs = {
  title: "confirm dialog opened when performing dangerous action"
};

const saving = {
  title: "saves changes permanently"
};

const noInternetConnection = {
  title: "handles no internet connection"
};

export default {
  title: "General",
  items: [menu, backbutton, dialogs, saving, noInternetConnection]
};
