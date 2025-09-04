import React from 'react';

const tournaments = [
    {
        dates: '26-27',
        month: 'SEPTEMBER',
        location: 'SAN FRANCISCO, CALIFORNIA',
        name: 'GOLDEN GATE OPENER',
        hasStar: false,
    },
    {
        dates: '11-12',
        month: 'OCTOBER',
        location: 'PORTLAND, OREGON',
        name: 'LEWIS & CLARK',
        hasStar: false,
    },
    {
        dates: '1-2',
        month: 'NOVEMBER',
        location: 'STOCKTON, CALIFORNIA',
        name: 'UNIVERSITY OF THE PACIFIC',
        hasStar: false,
    },
    {
        dates: 'TBD',
        month: 'DECEMBER',
        location: 'ONLINE',
        name: 'WHITMAN',
        hasStar: false,
    },
    {
        dates: '8-11',
        month: 'JANUARY',
        location: 'LEBANON, ILLINOIS',
        name: 'MOUND HIGH',
        hasStar: false,
    },
    {
        dates: '31-1',
        month: 'JANUARY',
        location: 'BERKELEY, CALIFORNIA',
        name: 'GOLDEN GATE INVITATIONAL',
        hasStar: false,
    },
    {
        dates: 'TBD',
        month: 'FEBRUARY',
        location: 'MACON, GEORGIA',
        name: 'NPDA NATIONAL CHAMPS',
        hasStar: true,
    },
    {
        dates: 'TBD',
        month: 'MARCH',
        location: 'TBD',
        name: 'NPTE NATIONAL CHAMPS',
        hasStar: true,
    },
    {
        dates: 'TBD',
        month: 'APRIL',
        location: 'BERKELEY, CALIFORNIA',
        name: 'PDAB SEASON CLOSER',
        hasStar: false,
    },
];

const TournamentTable = () => {
    return (
        <div className="event-table">
            <h1 className="info-sesh-title">Tourneys</h1>
            <div className="text e-table-wrapper">
                <div className="overflow-x-auto e-table">
                    <table className="divide-y divide-gray-300">
                        <thead className="">
                            <tr>
                                <th
                                    scope="col"
                                    className="e-head py-3.5 px-6 text-left font-semibold"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className="e-head py-3.5 px-6 text-left font-semibold"
                                >
                                    Location
                                </th>
                                <th
                                    scope="col"
                                    className="e-head py-3.5 px-6 text-left font-semibold"
                                >
                                    Tournament
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {tournaments.map((tournament, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50 transition-colors duration-200 ease-in-out"
                                >
                                    <td className="e-row py-4 px-6 font-medium text-gray-900">
                                        {tournament.month.toLowerCase()} {tournament.dates}
                                    </td>
                                    <td className="e-row py-4 px-6 text-gray-700 whitespace-nowrap">
                                        {tournament.location.toLowerCase()}
                                    </td>
                                    <td className="e-row py-4 px-6 text-gray-700 whitespace-nowrap">
                                        {tournament.name.toLowerCase()} {tournament.hasStar && '⭐'}
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

export default TournamentTable;

