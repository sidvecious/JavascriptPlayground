import React  from "react";
import ReactDOM from "react-dom";

import invoiceItems from "./invoice_items";
import { Invoice } from "./Invoice";

export const App = () => <div>
  <h1>Invoice</h1>
  <Invoice items={invoiceItems} />
</div>;

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);