Task

final demo - https://yuriy-khoptyanii.github.io/test-project/#/

Develop a simple web application page that allows users to browse and filter product listings from a database. Use React and Redux to create an interface and manage application state. Interact with the API to retrieve and store data from the database.

In this task I made and used:

1. Create an application consisting of several components: a header, a search field, a list of products, and a form for adding a new product.
2. Also created two pages and used React Router for navigation.
3. Used integration with Api to get goods from the server and then store them in redux.
4. Used Redux ToolKit to manage the state of products, which allows you to add, update and delete products.
5. Created a product list component that receives data from the Redux store and displays them in the form of a table. 
Used the library to create the table - React-table.
Added the ability to sort products by each column.
Added new column which allows you to remove the term from the list and from the redux store.
6. Added a search box that allows users to search for products by name or category. The product list component is updated automatically when the user enters a query in the search field.
7. created a form for adding a new product. Used Formik and Yup to validate input.
8. Used TypeScript.


Technologies and useful links:

Test server - https://dummyjson.com/
Formik - https://formik.org/
Yup - https://github.com/jquense/yup
Router - https://reactrouter.com/en/main
Redux - https://redux.js.org/
React-Table - https://tanstack.com/table/v8
MUI - https://mui.com/
Bulma - https://bulma.io/
