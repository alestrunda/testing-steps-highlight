export default {
  title: "Lessons",
  items: [
    {
      title: "reset top score"
    },
    {
      title: "delete lesson"
    },
    {
      title: "run lekce",
      items: [
        {
          title: "timer"
        },
        {
          title: "progressbar"
        },
        {
          title: "immediate eval"
        },
        {
          title: "question eval",
          items: [
            {
              title: "type-in",
              items: [
                {
                  title: "error if empty"
                }
              ]
            },
            {
              title: "self-rating"
            }
          ]
        },
        {
          title: "lesson type",
          items: [
            {
              title: "picture"
            },
            {
              title: "audio"
            },
            {
              title: "custom field"
            },
            {
              title: "phrase",
              items: [
                {
                  title: "hint type",
                  items: [
                    {
                      title: "audio"
                    },
                    {
                      title: "custom field"
                    },
                    {
                      title: "picture"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "lesson eval",
          items: [
            {
              title: "list of questions",
              items: [
                {
                  title: "correct/wrong"
                },
                {
                  title: "if wrong shows the wrong answer"
                }
              ]
            },
            {
              title: "sets new best score if better than the previous one"
            }
          ]
        }
      ]
    },
    {
      title: "after question answered new rating set for that word"
    }
  ]
};
