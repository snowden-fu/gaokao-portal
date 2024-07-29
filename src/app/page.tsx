import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import { createClient } from "@/utils/supabaseClient";
import { TabGroup } from "@headlessui/react";

import Image from "next/image";

export default async function Home() {
  const supabase = createClient();
  const selectedColumns: Array<string> = [
    "院校名称",
    "科类",
    "专业名称",
  ];
  let { data: 历史本科提前批, error } = await supabase
    .from("历史本科提前批")
    .select(selectedColumns.length > 0 ? selectedColumns.join(","): "*")
    .range(0, 9);
    
  return (
    <TabGroup>
      <Header />
      <Tabs />
      <div className="p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-blue-500 text-white">
              {
                selectedColumns.map((key) => {
                  return <th className="py-2 px-4" key={crypto.randomUUID()}>{key}</th>
                })
              }
              <th className="py-2 px-4">Operations</th>
            </tr>
          </thead>
          <tbody>
            {error && <tr><td colSpan={selectedColumns.length + 1}>{error.message}</td></tr>}
            {历史本科提前批?.map((row) => {
              return (
                <tr className="bg-gray-100" key={crypto.randomUUID()}>
                  {
                    selectedColumns.map((value, idx) => {
                      return <td className="border px-4 py-2" key={crypto.randomUUID()}>{row[value]}
                        </td>
                    })
                  }
                  <td className="border px-4 py-2">
                    <button className="py-1 px-2 text-white bg-green-500 hover:bg-green-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                      Edit
                    </button>
                    <button className="py-1 px-2 text-white bg-red-500 hover:bg-red-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
            )}
          </tbody>
        </table>
      </div>
    </TabGroup>
  );
}
