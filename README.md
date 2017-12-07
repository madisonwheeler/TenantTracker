# Tenant Tracker

Robberies and scams brought about by people impersonating utility workers have been a serious issue, especially for tenants who are temporarily renting housing. Right now a convenient and free way for landlords and tenants to communicate does not exist. This lack of communication has led to tenants being easily susceptible to scams and robberies from people claiming to be utility workers. 
Tenant Tracker, a web application that bridges the communication gap between landlords and their tenants, is designed to significantly prevent scams and robberies that are caused by common miscommunications. The application provides ways for tenants and landlords to submit repair requests, communicate payment statuses, and more. Unlike other applications, this solution communicates repair information, home visits, rent payment, and status of appliances in one easy to use space. 

## List of features
Tenant Tracker will introduce effective communication to landlords and tenants. Landlords will be able to enter their properties into Tenant Tracker, including any appliances and their condition. When a tenant is renting the property, they will be able to notify the landlord of any necessary repairs. Landlords can then notify their tenants of a scheduled repair time and the name of the repair company. Tenants will also be able to communicate the status of their rent payment to their landlord. Landlords will be able to setup automated notification of missed or late payments, as well as other notices, including entry of the properly.

## Dependencies and Software
Tenant tracker is built with MEAN.js (Angularjs, MySQL, Epress, and Node)

Starting template provided by scotch-io [here](https://github.com/scotch-io/starter-node-angular)

## How to Run (Linux only)

1. Clone this repo to your local machine

2. Navigate to the Tenant Tracker folder in a CLI (Command-line interface)

3. Install required dependencies using the following commands: 
      sudo npm install npm -g
      npm install 
      bower install

4. To start the application use the following command: 
      npm start

5. After using npm start, enter localhost:8080 in the address bar of any web browser in your Unix environment to view the application.

## How to Use Tenant Tracker

**Landlord Sign Up:** Before using Tenant Tracker you must register for an account. If you are a landlord, select the Landlord Register button on the homepage to register for an account. Enter your personal information and address. In the future, any tenants who would like to register to your property must use the same exact address. By pressing the submit button, you will be successfully registered and brought to the Landlord Login page.
 
**Tenant Sign Up:** Before using Tenant Tracker you must register for an account. If you are a tenant, select the Tenant Register button on the homepage to register for an account. Enter your personal information and make sure that the address entered matches exactly the address of your landlord. By pressing the submit button, you will be successfully registered and brought to the Tenant Login page.
 
**Landlord Login:** Enter your pre-registered username and password into the fields on the Landlord Login page. By pressing the login button, you will be successfully logged in and brought to your landlord homepage.
 
**Tenant Login:** Enter your pre-registered username and password into the fields on the Tenant Login page. By pressing the login button, you will be successfully logged in and brought to your tenant homepage.

**Landlord Property View:** Once logged into a landlord account, you can view the Appliances and Rent History for your property by selecting the tabs on the top right of your homepage. The address and tenants of your properties are displayed on this page.
 
**Tenant Property View:** Once logged into a tenant account, you can view the Appliances and Rent History for your property by selecting the tabs on the top right of your homepage. Current information for your rental is displayed on this page, including your address and your Landlord’s contact information. 
 
**Landlord Rent Status:** Once on the Rent page for your property, select the Add New Rent button to add a new rent payment. Enter the date in YYYY-MM-DD format and press submit to add a new payment. Payments start as both non-received and non-sent. Once you have received rent from your tenant you can select the Not Received button to indicate that the payment is now received, and the button will turn into a green Received button. 
 
**Tenant Rent Status:** Once on the Rent page for your rental, select the Add New Rent button to add a new rent payment. Enter the date in YYYY-MM-DD format and press submit to add a new payment. Payments start as both non-received and non-sent. Once you have sent rent from your landlord you can select the Not Sent button to indicate that the payment is now sent, and the button will turn into a green Sent button.
 
**Landlord Rent Status:** Once on the Rent page for your property, select the Add New Rent button to add a new rent payment. Enter the date in YYYY-MM-DD format and press submit to add a new payment. Payments start as both non-received and non-sent. Once you have received rent from your tenant you can select the Not Received button to indicate that the payment is now received, and the button will turn into a green Received button. 
 
**Tenant Appliance Status:** Once on the Appliance page for your rental, select the Add New Appliance button to add your new appliance. Enter the name of the appliance and press submit to add a new appliance. The status of each appliance is automatically set to Good. To request a repair for the appliance press the Request Repair button, type a message about the broken appliance in the text field that appears, and press submit. This will notify your landlord that the appliance needs repair by changing the status to Needs Repair. Once your appliance has been repaired press the Repairs Completed button to change the status back to Good. 
 
**Tenant Appliance Status:** Once on the Appliance page for your rental, select the Add New Appliance button to add your new appliance. Enter the name of the appliance and press submit to add a new appliance. The status of each appliance is automatically set to Good. When an appliance is set to Needs Repair status by your tenant you you can send them information by selecting the Update Repair Notes button, entering in any information about the time/date/person/company of the repair, and press submit. This will send the repair info to your tenant. Once your appliance has been repaired, you or your tenant may press the Repairs Completed button to change the status back to Good.

