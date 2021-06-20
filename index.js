var HUB = HUB || (function () {
    var _args = {}; // private
    var _primaryColor = "blue";
    var _secondaryColor = "green";
    var _primaryTextColor = "white";
    var _secondaryTextColor = "grey";
    var _formTextColor = "#"


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
            _content.setAttribute("class",`${_expectedDivId}-content`);
            _content.setAttribute("id",`${_expectedDivId}RouteContent`);




            

            //create headers 
            _headers.forEach(header => {
                let listItem = document.createElement("li");

                listItem.setAttribute("class",`${_expectedDivId}-navListItem`);

                let navbutton =  document.createElement("a");

                navbutton.innerHTML = header.title;

                navbutton.setAttribute("onclick",header.functionName);

                listItem.appendChild(navbutton);

                _headerList.appendChild(listItem);
            });

            _container.setAttribute("class", `${_expectedDivId}-container`);


            _navBar.setAttribute("class", `${_expectedDivId}-navBar`);


            _scripts.innerHTML = `
                function changeActive(params) {
                    this.HUB.setActiveNode(params);
                }   
            `;

            _styles.innerHTML = `
                #${_expectedDivId} .${_expectedDivId}-container {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    background-color: ${_primaryColor}

                }  
                #${_expectedDivId} .${_expectedDivId}-navBar {
                   flex: 1;
                }

                #${_expectedDivId} .navList {
                    display: flex;
                    list-style: none;
                    justify-content: space-evenly;
                }

                #${_expectedDivId} .${_expectedDivId}-navListItem {
                    
                }

                #${_expectedDivId} .${_expectedDivId}-navListItem a {
                    background-color: ${_secondaryColor};
                    padding: 10px;
                    display: inline-block;
                    border-radius: 5px;
                    width: 100px;
                    color: ${_primaryTextColor};
                    cursor: pointer;
                }


                #${_expectedDivId} .${_expectedDivId}-content {
                    
                }

               

                #${_expectedDivId} .${_expectedDivId}mainContent { 
                    background-color: white;
                 
                }
              
                #${_expectedDivId} .${_expectedDivId}contentField { 
                    
                    display: grid;
                    grid-template-columns: auto auto auto auto ;
                    grid-template-rows: auto;
                    padding: 10px;
                    
                    justify-content: space-evenly; 
                }
                #${_expectedDivId} .${_expectedDivId}-form-group {
                    display: flex;
                }
                #${_expectedDivId} .${_expectedDivId}-form-label {

                    flex: 1;
                 
                    
                }
                #${_expectedDivId} .${_expectedDivId}-form-control {
                    display: inline-block;
                    padding: 5px;
                    flex: 3;
                    font-size: 14px;
                    color: ${_secondaryTextColor};
                    
                }



                #${_expectedDivId}  .${_expectedDivId}-button {
                    background-color: ${_primaryColor};
                    padding: 10px;
                    display: inline-block;
                    border-radius: 5px;
                    width: 100px;
                    color: ${_primaryTextColor};
                    cursor: pointer;
                    
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
    
            
            

            


            _container.appendChild(_content);
             _hub.appendChild(_container);
         

             
             _hub.appendChild(_scripts);

             _activeNode = "airtime";


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
                    main.setAttribute("class",`${_expectedDivId}mainContent`);


                    let airtime = document.createElement("div");
                    airtime.setAttribute("class",`${_expectedDivId}contentField`);

                    let header = document.createElement("h1");
                    header.setAttribute("class",`${_expectedDivId}contentHeader`)
                    header.innerHTML = "Purchase Airtime";

                    main.appendChild(header);


                    


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
                    airtime.appendChild(phoneNumber);

                    /************************/
                   


                    /***** Form field ******/

                    let network = document.createElement('div');
                    network.setAttribute("class",`${_expectedDivId}-form-group`);

                    let networkLabel = document.createElement('label');
                    networkLabel.innerHTML = "Select Network: ";
                    networkLabel.setAttribute("class",`${_expectedDivId}-form-label`);
                    network.appendChild(networkLabel);

                    let networkFormFeild = document.createElement("select");
                    networkFormFeild.setAttribute("class",`${_expectedDivId}-form-control`);

                    [{name: "MTN", id: 1}, {name: "GLO", id: 2}, {name: "Airtel", id: 3}, {name: "Etisalat", id: 4}].forEach(item => {
                        let option = document.createElement("option");
                        option.setAttribute("value",item.id);
                        option.innerHTML = item.name;

                        networkFormFeild.appendChild(option);   

                    });


                    network.appendChild(networkFormFeild);
                    airtime.appendChild(network);
                    /************************/


                    /***** Form field ******/

                    let amount = document.createElement('div');
                    amount.setAttribute("class",`${_expectedDivId}-form-group`);

                    let amountLabel = document.createElement('label');
                    amountLabel.innerHTML = "Amount (NGN): ";
                    amountLabel.setAttribute("class",`${_expectedDivId}-form-label`);
                    amount.appendChild(amountLabel);

                    let amountFormFeild = document.createElement("input");
                    amountFormFeild.setAttribute("type","text");
                    amountFormFeild.setAttribute("class",`${_expectedDivId}-form-control`);
                    amount.appendChild(amountFormFeild);
                    airtime.appendChild(amount);

                    /************************/


                    /****Action Button *******/
                    let actionBtn = document.createElement("button");
                    actionBtn.setAttribute("class",`${_expectedDivId}-button`)
                    actionBtn.innerHTML = "PAY NOW";

                    airtime.appendChild(actionBtn);



                    /************************/
                    



                    main.appendChild(airtime);

                    this.removeAllChildNodes(_content);

                    _content.appendChild(main);

                    
                break;
            
                default:
                    break;
            }
        },
        removeAllChildNodes: function(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }

    };
}());
