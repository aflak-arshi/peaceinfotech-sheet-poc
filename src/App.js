import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import { registerAllModules } from 'handsontable/registry';

// register Handsontable's modules
registerAllModules();

const hotData = [
  ["", "Tesla", "Volvo", "Toyota", "Honda"],
  ["2020", 10, 11, 12, 13],
  ["2021", 20, 11, 14, 13],
  ["2022", 30, 15, 12, 13]
];


const hotSettings = {
  data: Handsontable.helper.createSpreadsheetData(50, 50),
  colHeaders: true,
  rowHeaders: true,
  height: 'auto',
  manualColumnFreeze: true,
  contextMenu: true,
  licenseKey: 'non-commercial-and-evaluation'
};

const App = () => {
  return (
    <div id="hot-app">
      <HotTable
        settings={hotSettings}
      />
    </div>
  );
}

export default App;
