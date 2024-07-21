import { Tab, TabList } from '@headlessui/react';


function Tabs() {
    return (
      <TabList className="flex space-x-4 p-4">
        <Tab className="py-2 px-4 text-white bg-blue-500 hover:bg-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Tab 1
        </Tab>
        <Tab className="py-2 px-4 text-blue-500 bg-white hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Tab 2
        </Tab>
        <Tab className="py-2 px-4 text-blue-500 bg-white hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Tab 3
        </Tab>
    </TabList>
    );
};
export default Tabs;
