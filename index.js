var HUB = HUB || (function () {
    var _args = {}; // private
    var _primaryColor = "blue";
    var _secondaryColor = "green";
    var _primaryTextColor = "white";
    var _secondaryTextColor = "grey";

    var _expectedDivId = "hub";

    var _headers = [
        {
            title: "Power",
            functionName : "changeActive('airtime')"
        },
        {
            title: "Airtime",
            functionName : "changeActive('airtime')"
        },
        {
            title: "Data",
            functionName : "changeActive('airtime')"
        },
        {
            title: "Cable",
            functionName : "changeActive('airtime')"
        },
    ];

    var _hub = null;

    //creating container
    var _container = null;
  
       //creating headers
    var _navBar = null;


    var _scripts = null;

    var _headerList = null;

    var _styles = null;

    var _content = null;

    var _activeNode = null;

    var _advert = "<p>Do more with bills hub</p>";


    return {
        init: function (Args) {
            _args = Args;

            _hub = document.getElementById(`${_expectedDivId}`);
           

            if (!_hub) {
                console.error("Element with id Hub is required");
                return;
            }

            _container = document.createElement("div");

            _navBar = document.createElement("div");

            _scripts = document.createElement("script");

            _headerList = document.createElement("ul");
            _headerList.setAttribute("class","navList");

            _styles = document.createElement("style");

       

            _content = document.createElement("div");
            _content.setAttribute("class","content");
            _content.setAttribute("id",`${_expectedDivId}RouteContent`);




            //creating leader list
            
            // headerList.setAttribute('style', `color: ${_primaryColor}; background-color: ${_secondaryTextColor}; width: 100%; height: 200px;`);


            //create headers 
            _headers.forEach(header => {
                let listItem = document.createElement("li");
                listItem.setAttribute("class","navListItem");

               


                let navbutton =  document.createElement("span");

                navbutton.innerHTML = header.title;
                navbutton.setAttribute("onclick",header.functionName);

                listItem.appendChild(navbutton);

                _headerList.appendChild(listItem);
            });

            _container.setAttribute("style", `color: ${_primaryColor}; background-color: white; width: 100%; height: 100%;`);

            _navBar.setAttribute('style', `color: ${_primaryColor}; background-color: ${_secondaryTextColor}; width: 100%; height: 200px;`);

            _scripts.innerHTML = `
                function changeActive(params) {
                    this.HUB.setActiveNode(params);
                }
            `;

            _styles.innerHTML = `
                #${_expectedDivId} .navList {
                    list-style: none;
                    display: flex;
                    direction: column;
                    justify-content: space-evenly;
                }
              
                #${_expectedDivId} .${_expectedDivId}airtimeField { 
                    margin-top: 20px;
                }
                #${_expectedDivId} .${_expectedDivId}-form-group {
                    display: flex;
                    flex: 0 0 auto;
                    flex-flow: row wrap;
                    align-items: center;
                    margin-bottom: 0;
                }
                #${_expectedDivId} .${_expectedDivId}-form-control {
                    display: inline-block;
                    width: auto; 
                    vertical-align: middle;
                }
            `;

            this.render();
        },
        render: function () {

            /**
             * Fecthing main header
             */
            _navBar.appendChild(_headerList);
        
            _container.appendChild(_navBar);
            

           
            _hub.appendChild(_styles);
    
            
            

            


          
             _hub.appendChild(_container);
             _hub.appendChild(_content);

             
             _hub.appendChild(_scripts);


             this.setContent();


            

         




        },
        setActiveNode: function(node) {
            _activeNode = node;
            this.setContent();
        },
        setContent: function() {
           
            switch (_activeNode) {
                case null:
                    //show advert
                    _content.innerHTML = _advert;
                break;
                case 'airtime':
                    
                    
                    let main = document.createElement("div");

                    let airtime = document.createElement("div");
                    airtime.setAttribute("class",`${_expectedDivId}airtimeField`);


                    


                    /***** Form field ******/

                    let phoneNumber = document.createElement('div');
                    phoneNumber.setAttribute("class",`${_expectedDivId}-form-group`);

                    let phoneNumberLabel = document.createElement('label');
                    phoneNumberLabel.innerHTML = "Phone Number: ";
                    phoneNumberLabel.setAttribute("class",`${_expectedDivId}-form-label`);
                    phoneNumber.appendChild(phoneNumberLabel);

                    let phoneNumberFormFeild = document.createElement("input");
                    phoneNumberFormFeild.setAttribute("type","text");
                    phoneNumberFormFeild.setAttribute("class",`${_expectedDivId}-form-control`);
                    phoneNumber.appendChild(phoneNumberFormFeild);

                    /************************/
                    airtime.appendChild(phoneNumber);



                    main.appendChild(airtime);

                    _content.innerHTML = main.innerHTML;
                break;
            
                default:
                    break;
            }
        }

    };
}());
