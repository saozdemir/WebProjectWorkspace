import React, {useState, useEffect, useRef} from 'react';
import './Attendance.css';

type AttendanceStatus = 'Hastane' | 'İzin' | 'Mazeret';

interface AttendanceRecord {
    date: string;
    status: AttendanceStatus;
}

interface Employee {
    id: number;
    name: string;
    attendance: AttendanceRecord[];
}

const employees: Employee[] = Array.from({length: 20}, (_, i) => ({
    id: i + 1,
    name: `Personel ${i + 1}`,
    attendance: [],
}));

const getCurrentDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

const formatDate = (dayOfYear: number) => {
    const date = new Date(new Date().getFullYear(), 0, dayOfYear);
    return `${date.getDate()}/${date.getMonth() + 1}`;
};

const getDayName = (dayOfYear: number) => {
    const date = new Date(new Date().getFullYear(), 0, dayOfYear);
    const days = ['PAZ', 'PZT', 'SAL', 'ÇAR', 'PER', 'CUM', 'CTS'];
    return days[date.getDay()];
};

const getMonthDays = (year: number) => {
    return [
        {month: 'Ocak', days: 31},
        {month: 'Şubat', days: year % 4 === 0 ? 29 : 28},
        {month: 'Mart', days: 31},
        {month: 'Nisan', days: 30},
        {month: 'Mayıs', days: 31},
        {month: 'Haziran', days: 30},
        {month: 'Temmuz', days: 31},
        {month: 'Ağustos', days: 31},
        {month: 'Eylül', days: 30},
        {month: 'Ekim', days: 31},
        {month: 'Kasım', days: 30},
        {month: 'Aralık', days: 31},
    ];
};

const Attendance: React.FC = () => {
    const [data, setData] = useState<Employee[]>(employees);
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const currentDay = getCurrentDayOfYear();
        const scrollPosition = (currentDay - 1) * 50; // Her hücre genişliği 50px olarak varsayılmıştır
        if (tableRef.current) {
            tableRef.current.scrollLeft = scrollPosition;
        }
    }, []);

    const handleStatusChange = (id: number, date: string, status: AttendanceStatus) => {
        setData(prevData =>
            prevData.map(emp =>
                emp.id === id
                    ? {
                        ...emp,
                        attendance: [...emp.attendance, {date, status}],
                    }
                    : emp
            )
        );
    };

    const handleRangeStatusChange = (id: number, startDate: string, endDate: string, status: AttendanceStatus) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const dates = [];
        for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
            dates.push(new Date(d));
        }
        setData(prevData =>
            prevData.map(emp =>
                emp.id === id
                    ? {
                        ...emp,
                        attendance: [
                            ...emp.attendance,
                            ...dates.map(date => ({
                                date: `${date.getDate()}/${date.getMonth() + 1}`,
                                status,
                            })),
                        ],
                    }
                    : emp
            )
        );
    };

    const currentDay = getCurrentDayOfYear();
    const days = Array.from({length: 365}, (_, i) => i + 1);
    const futureDays = days.slice(currentDay - 1);
    const months = getMonthDays(new Date().getFullYear());

    return (
        <div>
            <h1>Yoklama Uygulaması</h1>
            <div className="table-container">
                <table ref={tableRef}>
                    <thead>
                    <tr>
                        <th rowSpan={3}>Personel</th>
                        {months.map(month => (
                            <th key={month.month} colSpan={month.days}>{month.month}</th>
                        ))}
                    </tr>
                    <tr>
                        {futureDays.map(day => (
                            <th key={day}>{formatDate(day)}</th>
                        ))}
                    </tr>
                    <tr>
                        {futureDays.map(day => (
                            <th key={day}>{getDayName(day)}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            {futureDays.map(day => {
                                const date = formatDate(day);
                                const record = emp.attendance.find(rec => rec.date === date);
                                return (
                                    <td key={day} className={record?.status.toLowerCase()}>
                                        <select
                                            value={record?.status || ''}
                                            onChange={e => handleStatusChange(emp.id, date, e.target.value as AttendanceStatus)}
                                        >
                                            <option value="">Seç</option>
                                            <option value="Hastane">Hastane</option>
                                            <option value="İzin">İzin</option>
                                            <option value="Mazeret">Mazeret</option>
                                        </select>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Tarih Aralığı Girişi</h2>
                {data.map(emp => (
                    <div key={emp.id}>
                        <h3>{emp.name}</h3>
                        <label>
                            Başlangıç Tarihi:
                            <input type="date" id={`start-${emp.id}`}/>
                        </label>
                        <label>
                            Bitiş Tarihi:
                            <input type="date" id={`end-${emp.id}`}/>
                        </label>
                        <select id={`status-${emp.id}`}>
                            <option value="">Seç</option>
                            <option value="Hastane">Hastane</option>
                            <option value="İzin">İzin</option>
                            <option value="Mazeret">Mazeret</option>
                        </select>
                        <button
                            onClick={() => {
                                const startDate = (document.getElementById(`start-${emp.id}`) as HTMLInputElement).value;
                                const endDate = (document.getElementById(`end-${emp.id}`) as HTMLInputElement).value;
                                const status = (document.getElementById(`status-${emp.id}`) as HTMLSelectElement).value as AttendanceStatus;
                                handleRangeStatusChange(emp.id, startDate, endDate, status);
                            }}
                        >
                            Kaydet
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Attendance;
