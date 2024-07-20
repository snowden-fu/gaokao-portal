import { Tab, TabGroup, TabList } from '@headlessui/react';
import Image from "next/image";

export default function Home() {
  return (
<TabGroup>
  <h1 className='font-bold text-lg'>
  高考大数据
  </h1>
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
    <div className="p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-blue-500 text-white">
              <th className="py-2 px-4">Header 1</th>
              <th className="py-2 px-4">Header 2</th>
              <th className="py-2 px-4">Header 3</th>
              <th className="py-2 px-4">Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Data 1</td>
              <td className="border px-4 py-2">Data 2</td>
              <td className="border px-4 py-2">Data 3</td>
              <td className="border px-4 py-2">
                <button className="py-1 px-2 text-white bg-green-500 hover:bg-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  Edit
                </button>
                <button className="py-1 px-2 text-white bg-red-500 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border px-4 py-2">Data 4</td>
              <td className="border px-4 py-2">Data 5</td>
              <td className="border px-4 py-2">Data 6</td>
              <td className="border px-4 py-2">
                <button className="py-1 px-2 text-white bg-green-500 hover:bg-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  Edit
                </button>
                <button className="py-1 px-2 text-white bg-red-500 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Data 7</td>
              <td className="border px-4 py-2">Data 8</td>
              <td className="border px-4 py-2">Data 9</td>
              <td className="border px-4 py-2">
                <button className="py-1 px-2 text-white bg-green-500 hover:bg-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  Edit
                </button>
                <button className="py-1 px-2 text-white bg-red-500 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</TabGroup>
  );
}
