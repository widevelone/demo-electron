import * as dayjs from "dayjs";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import es from "date-fns/locale/es";
import "react-day-picker/src/style.css";

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    background: #f1c40f;
    color: black;
  }
  .my-today { 
    font-weight: bold;
    font-size: 110%; 
    color: red;
}
.rdp-day:hover {
    color: black;
    background: red;
  }
  .days{
    background: red
  }
`;

export const RangeDate = ({ setPaginate, selectedDay, setSelectedDay }) => {
    const [view, setView] = useState(false);

    useEffect(() => {
        setPaginate((a) => ({
            ...a,
            initial:
                selectedDay !== undefined && selectedDay
                    ? selectedDay.from !== undefined && selectedDay.from
                        ? dayjs(selectedDay.from).format("YYYY-MM-DDTHH:mm:ss")
                        : ""
                    : "",
            final:
                selectedDay !== undefined && selectedDay
                    ? selectedDay.to !== undefined && selectedDay.to
                        ? dayjs(selectedDay.to).format("YYYY-MM-DDTHH:mm:ss")
                        : ""
                    : "",
        }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDay]);

    return (
        <div className="static">
            <div
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-black dark:text-gray-100 hover:text-black selected portrait:w-[100%] portrait:m-0"
                onClick={() => setView(!view)}
            >
                <div className="py-1 px-4 text-sm text-gray-800 dark:text-gray-200">
                    {selectedDay === undefined && !selectedDay ? (
                        "Desde - Hasta"
                    ) : (
                        <>
                            {selectedDay.from
                                ? dayjs(selectedDay.from).format("DD/MM/YYYY")
                                : ""}
                            {selectedDay.to ? (" - " + dayjs(selectedDay.to).format("DD/MM/YYYY")) : ""}
                        </>
                    )}
                </div>
            </div>
            {view && (
                <>
                    <div
                        onClick={() => setView(!view)}
                        className="fixed z-10 w-screen h-screen top-0 left-0"
                    ></div>
                    <style>{css}</style>
                    <div className="absolute z-10 bg-white text-xs font-bold dark:bg-gray-700 dark:text-gray-300 shadow-lg w-fit mt-1 rounded-md">
                        <DayPicker
                            locale={es}
                            mode="range"
                            selected={selectedDay}
                            onSelect={setSelectedDay}
                            className="custom-day-picker"
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today',
                                outside: 'days'
                            }}
                            modifiersStyles={{
                                disabled: { fontSize: '75%' }
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};
