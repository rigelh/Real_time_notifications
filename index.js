import { DropDown } from "../../components/DropDown/DropDown.js";
import { Container } from "/obvia/components/Container.js";
import { Link } from "/obvia/components/Link/Link.js";
import { ArrayEx } from "../../lib/ArrayEx.js";
import { Image } from "/obvia/components/Image.js";
import { Button } from "../../components/Button/Button.js";
import { List } from "../../components/List.js";
import { Label, LabelType } from "../../components/Label.js";
import { Modal } from "../../components/Modal/Modal.js";
import { ModalSize } from "../../components/Modal/Modal.js";
import { Heading, HeadingType } from "/obvia/components/Heading.js";



var myContainer = new Container({
  id: "container_0",
  classes: ["col-12"],
  css: {
    display: "block",
    "justify-content": "space-between",
    "background-color": "white",
    color: "white",
    border: "none",

  },


  components: [{
    ctor: Container,
    props: {
      id: "container_1",
      type: "form-row",
      classes: ["col-12"],
      css: {
        display: "flex",
        "background-color": "#000000",
        color: "white",
        border: "none",
      },
      components: [
        {
          ctor: Container,
          props: {
            id: "container_2",
            classes: ["col-lg-2 col-md-2 col-sm-4"],

            css: {
              display: "block",
              "text-align": "-webkit-center",
            },
            components: [
              {
                ctor: Image,
                props: {
                  id: "Image_nav",
                  label: "photo",
                  src: "/obvia/assets/images/logo_black.jpg",
                  css: {
                    border: "none",
                    height: " 100%",
                    padding: "5px",
                    width: "118px",

                  },
                },
              },
            ]
          }
        },
        {
          ctor: Container,
          props: {
            id: "container_3",
            classes: ["col-lg-2 col-md-2 col-sm-4"],

            css: {
              display: "block",
              "text-align": "-webkit-center",

            },
            components: [
              {
                ctor: Link,
                props: {
                  id: "label",
                  href: "https://www.footlocker.co.uk/en/",
                  label: "Home",
                  css: {
                    "text-align": "center",
                    "text-align": "-webkit-center",
                    width: "fit-content",
                    "font-size": "0.80rem",
                    "font-weight": "500",
                  },
                  classes: ["links_Navbar_webpage"],
                },
              },
            ]
          }
        },
        {
          ctor: Container,
          props: {
            id: "container_4",
            classes: ["col-lg-2 col-md-2 col-sm-4"],

            css: {
              display: "block",
              "text-align": "-webkit-center",
            },
            components: [
              {
                ctor: Link,
                props: {
                  id: "labelabout",
                  label: "About",
                  href: "https://www.footlocker.co.uk/en/About.html",

                  css: {
                    width: "fit-content",
                    "font-size": "0.80rem",
                    "font-weight": "500",
                  },
                  classes: ["links_Navbar_webpage"],
                },
              },

            ]
          }
        },
        {
          ctor: Container,
          props: {
            id: "container_5",
            classes: ["col-lg-2 col-md-2 col-sm-4"],

            css: {
              display: "block",

            },
            components: [
              {
                ctor: DropDown,
                props: {
                  id: "Dropdown1",
                  valueField: "key",
                  labelField: "title",
                  label: "Brand  ",
                  dataProvider: new ArrayEx([
                    { key: "0", title: "Nike " },
                    { key: "1", title: "Adidas " },
                    { key: "2", title: "New balance " },
                  ]),
                },
              },

            ]
          }
        },
        {
          ctor: Container,
          props: {
            id: "container_6",
            classes: ["col-lg-2 col-md-2 col-sm-4"],

            css: {
              display: "block",
            },
            components: [
              {
                ctor: DropDown,
                props: {
                  id: "Dropdown2",
                  valueField: "key",
                  labelField: "title",
                  label: "Model ",

                  dataProvider: new ArrayEx([]),
                },
              },

            ]
          }
        },
        {
          ctor: Container,
          props: {
            id: "container_7",
            classes: ["col-lg-2 col-md-2 col-sm-4"],

            css: {
              display: "block",
              "text-align": "-webkit-center",
            },
            components: [
              {
                ctor: Button,
                props: {
                  id: "button_notification",
                  type: "",
                  value: "",

                  css: {
                    display: "block",
                    width: "38px",
                    height: "fit-content",
                    "background-color": "#f8f9fa",
                    color: "black",
                    "border-radius": "100px",
                  },
                  click: onclick,
                  classes: ["btn", "fa fa-bell"],
                },
              },

            ]
          }
        },
      ],
    }
  },




  {
    ctor: Modal,
    props: {
      id: 'modal_notifications',
      size: ModalSize.LARGE,
      title: '',
      css: {
        display: "block",
      },
      display: false,

      components: {
        "modalHeader": [{
          ctor: Heading,

          props: {

            label: 'Notifications',
          }
        },
        {
          ctor: Container,
          props: {
            type: "btn-group",
            id: "headerButtonsCnt",
            css: {
              gap: '.25rem'
            },
            components: [
              {
                ctor: Button,
                props: {
                  id: 'dismissButton',
                  type: "button",
                  classes: ["btn", "btn-sm", "btn-secondary"],
                  width: '2.5rem',
                  attr: {
                    "data-dismiss": "modal",
                    "aria-label": "Dismiss"
                  },
                  components: [{
                    ctor: Label,
                    props: {
                      id: 'fa',
                      labelType: LabelType.i,
                      classes: ["fas", "fa-times"]
                    }
                  }],
                  click: closemodal,
                }
              },

            ]
          }
        }],
        "modalBody": [{
          ctor: List,
          props: {
            id: "list",
            multiselect: true,
            rendering: {
              direction: "vertical",
            },
            css: {
              "margin-top": "30px",
            },
            display: false,
            dataProvider: [],
            valueField: "id",
            classesField: "buttonClass",
            defaultClasses: ["btn-default"],
            selectedClasses: ["btn-success"],

            components: [
              {
                ctor: Label,
                props: {
                  id: "button",
                  type: "button",
                  value: "{id}",
                  label: "{source + '  :  ' + message}",
                  classes: "{buttonClass}",
                  css: {
                    display: "block",
                  },
                },
              },
            ],
          },
        }]
      }
    }



  },]

}

);


function createEventSourceWhenPageLoaded() {
  // Check if the page has already loaded
  if (document.readyState !== 'complete') {

    document.addEventListener('DOMContentLoaded', function () {
      const eventSource = new EventSource('http://localhost:4000/notifications/sse');
      const notificationList = [];
      myContainer.modal_notifications.modalDialog.modalContent.modalBody.list.dataProvider = [];

      eventSource.onmessage = function (event) {

        const notificationMessage = JSON.parse(event.data);
        // Check if the notification ID is not already in the list
        if (!notificationList.includes(notificationMessage.id)) {

          notificationList.push(notificationMessage.id);
          // Push the new notification to your data provider (assuming it's an array)
          myContainer.modal_notifications.modalDialog.modalContent.modalBody.list.dataProvider.push(notificationMessage);
        }
      }
    });
  }

}


createEventSourceWhenPageLoaded();



function onclick() {
  myContainer.modal_notifications.show();
  myContainer.modal_notifications.display = true;
  myContainer.modal_notifications.modalDialog.modalContent.modalBody.list.display = true;
}

function closemodal() {
  myContainer.modal_notifications.hide();
}

myContainer.render().then(function (cmpInstance) {
  $("#root").append(cmpInstance.$el);
});
export { myContainer };
