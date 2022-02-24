import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  let [national] = useState({
    Vietnam: {
      date: new Date().getDate(),
      timeHours: new Date().getHours(),
      timeMinutes: new Date().getMinutes(),
      timeSeconds: new Date().getSeconds(),
    },
  })

  return (
    <>
      <div className="w-full max-w-md py-4 m-auto">
        <h1 className="text-center font-bold uppercase text-4xl">Mấy giờ rồi?</h1>
      </div>
      <div className="w-full max-w-md px-2 py-16 sm:px-0 m-auto">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-700 rounded-xl">
            {Object.keys(national).map((time, id) => (
              <Tab
                key={id}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {national}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(time).map((date, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'bg-white rounded-xl p-3',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                )}
              >
                <h1>{Vie}</h1>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}
