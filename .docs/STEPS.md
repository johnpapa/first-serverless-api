# Create Your First Serverless API

This file lists the raw steps to follow when creating your first serverless API endpoints. You will perform these five steps:

1. Create your first function using VS Code
1. Walkthrough the directory structure
1. Update the function
1. Debugging a Azure Functions App
1. Install Node Modules in your Azure Functions App

## Setup

1. Open VS Code
1. Go to \_git folder

## 1 - Create Your First Function Using VS Code

Create your first Serverless Function using VS Code

### Create the Function Project and Function

1. Make a folder named **first-serverless-api**
1. Open the folder in VS Code
1. Install the extension **Azure Functions** (Reload if needed)

   > If you do not have the Azure Functions Core Tools installed, you will be automatically prompted to install. Follow the specified instructions.

1. Open Command Palette
1. Enter and select **Azure Functions: Create New Project**
1. Select the folder **first-serverless-api**
1. Select **JavaScript**
1. Select **HTTP Trigger**
1. Enter the name of the function as **products-get**
1. Select **Anonymous** for the Authorization Level

### Trigger the endpoint

1. Open Command Palette
1. Enter and select **Terminal: Create New Integrated Terminal**
1. In the terminal, type `func start`
1. Open your browser (Edge)
1. Navigate to http://localhost:7071/api/products-get/?name=John

## 2 - Walkthrough the directory structure

Walkthrough the directory structure

### Explore the key files

1. Open the folder **first-serverless-api** in VS Code
1. The **products-get** folder is where the your first function was created
1. The `function.json` file is where you can configure how your function is triggered and behaves.
1. The `index.js` file contains the logic for your function.
1. `sample.dat` is a placeholder file for sample data.
1. Open the file `.vscode/launch.json` to see your debugging configuration
1. All files listed in `.funcignore` will not be published to Azure
1. All files listed in `.gitignore` will be ignored by git
1. The `host.json` metadata file contains global configuration options that affect all functions for a function app.
1. The `local.settings.json` file stores app settings, connection strings, and settings used by local development tools.
1. The `package.json` file is where your npm scripts and npm package dependencies are listed.
1. The `proxies.json` file is where you can specify endpoints on your function app that are implemented by another resource. Which can be used to split a large API into multiple function apps while still presenting a single API surface.

## 3 - Update the function

Update the function to get a list of products

### Modify the function to get products

1. Open the folder **first-serverless-api** in VS Code
1. Create a file `product-data.js`
1. Paste the snippet **data-products** for the data
1. Open the `products-get/index.js` file
1. Delete all of the code
1. Paste the snippet **func-products** for getting products
1. Examine the code and the require statement

### Modify the function to be HTTP Get for api/products

1. Open the file `products-get/function.json`
1. Remove the **post** from the methods array
1. Add the property for `route: 'products'`
1. The endpoint will now be triggered only on a GET request to **api/products**

### Trigger the endpoint

1. Open Command Palette
1. Enter and select **Terminal: Create New Integrated Terminal**
1. In the terminal, type `func start`
1. Open your browser (Edge)
1. Navigate to http://localhost:7071/api/products

## 4 - Debugging a Azure Functions App

Debugging a Serverless Application

### Explore the Debug Configuration

1. Open the folder **first-serverless-api** in VS Code
1. Open the file `.vscode/launch.json` to see your debugging configuration
1. This configuration was created for you when you created the Function project

### Set a breakpoint

1. Open the `products-get/index.js` file
1. Set a breakpoint in the gutter on the line of code that gets the products

### Run the debugger

1. Click the **Run and Debug** icon in the Activity Bar
1. The Run view displays all information related to running and debugging and has a top bar with debugging commands and configuration settings.
1. Select **Attach to Node Functions**
1. Click the green arrow to debug (this will start the functions app)

### Trigger the endpoint

1. Open your browser (Edge)
1. Navigate to http://localhost:7071/api/products
1. Examine how the debugger stops on your breakpoint

### Data Inspection

1. Everything about debugging is here in the **Run and Debug** view
1. Explore the variables windows
1. Explore the Local and Closure lists
1. Hover over the `products` array, notice how it is undefined
1. Step over the line of code.
1. Hover over the `products` array and notice how it changed
1. Expand the variables
1. Point out the Watch, Call Stack, and Breakpoints panels
1. Tell the debugger continue to run
1. Stop the debugger

## 5 - Install Node Modules in your Azure Functions App

Install Node Modules in your Serverless Function

Update the function to format the expiration dates

### Install date-fns

1. Open the folder **first-serverless-api** in VS Code
1. Open Command Palette
1. Enter and select **Terminal: Create New Integrated Terminal**
1. In the terminal, type `npm install date-fns`
1. Examine `package.json` to see the new dependency

### Import date-fns

1. Open the `products-get/index.js` file
1. Import `date-fns` by pasting the snippet **func-products-date-fns**
1. Examine the code and the require statement

### Modify the function to format the dates

1. Open the `products-get/index.js` file
1. Create a new line of code beneath the `const products`
1. Paste the snippet **func-products-format** to format the dates with YYYY-MM-DD in a new array named `products`

### Trigger the endpoint

1. Open Command Palette
1. Enter and select **Terminal: Create New Integrated Terminal**
1. In the terminal, type `func start`
1. Open your browser (Edge)
1. Navigate to http://localhost:7071/api/products
