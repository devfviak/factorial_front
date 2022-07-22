/* eslint-disable react/prop-types */
import React from 'react';

function ExpensesTable ({ expenses }) {
  const userLocale = navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;

  return (
    <div className="flex flex-col mt-8">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th>
                            Concept
                        </th>
                        <th>
                            Value
                        </th>
                        <th>
                            Datetime
                        </th>
                        <th>
                            Processor
                        </th>
                    </tr>
                </thead>

                <tbody className='bg-transparent'>
                  {expenses.map(({ id, concept, total, currency, timestamp, processor }) => (
                    <tr key={id}>
                      {/* Concept */}
                      <td>
                        <div className="text-sm leading-5 text-gray-900">
                            {concept}
                        </div>
                      </td>
                      {/* Value */}
                      <td >
                        <div className="text-sm leading-5 text-gray-900">
                            {Intl.NumberFormat(userLocale, { style: 'currency', currency }).format(total)}
                        </div>
                      </td>
                      {/* Timestamp */}
                      <td >
                        <div className="text-sm leading-5 text-gray-900">
                          {formattedDateTime(userLocale, timestamp)}
                        </div>
                      </td>
                      {/* Processor */}
                      <td >
                        <div className="text-sm leading-5 text-gray-900">
                          {processor}
                        </div>
                      </td>
                    </tr>)
                  )}
                </tbody>

            </table>
          </div>
      </div>
    </div>
  );
}

const formattedDateTime = (locale, seconds) => {
  const date = new Date(seconds * 1000);
  return Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'medium' }).format(date);
};

export default ExpensesTable;
