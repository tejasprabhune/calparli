const events = [
    {
        session: 'Infosession #1',
        date: '09/09',
        location: 'ESHLEMAN 310',
        time: '7 - 9 PM',
    },
    {
        session: 'Infosession #2',
        date: '09/10',
        location: 'ESHLEMAN 310',
        time: '7 - 9 PM',
    },
];

const EventTable = () => {
    return (
        <div className="event-table">
            <h1 className="info-sesh-title">Info Sessions</h1>
            <div className="text e-table-wrapper">
                <div className="overflow-x-auto e-table">
                    <table className="divide-y divide-gray-300">
                        <thead className="">
                            <tr>
                                <th
                                    scope="col"
                                    className="e-head py-3.5 px-6 text-left font-semibold uppercase"
                                >
                                    Session
                                </th>
                                <th
                                    scope="col"
                                    className="e-head py-3.5 px-6 text-left font-semibold uppercase"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className="e-head py-3.5 px-6 text-left font-semibold uppercase"
                                >
                                    Location
                                </th>
                                <th
                                    scope="col"
                                    className="e-head py-3.5 px-6 text-left font-semibold uppercase"
                                >
                                    Time
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {events.map((event, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50 transition-colors duration-200 ease-in-out"
                                >
                                    <td className="e-row py-4 px-6 font-medium text-gray-900">
                                        {event.session}
                                    </td>
                                    <td className="e-row py-4 px-6 text-gray-700 whitespace-nowrap">
                                        {event.date}
                                    </td>
                                    <td className="e-row py-4 px-6 text-gray-700 whitespace-nowrap">
                                        {event.location}
                                    </td>
                                    <td className="e-row py-4 px-6 text-gray-700 whitespace-nowrap">
                                        {event.time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EventTable;

